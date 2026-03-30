import { createFileRoute } from '@tanstack/react-router'
import { aiContext } from '@/data/resume'

export const Route = createFileRoute('/api/chat')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.ANTHROPIC_API_KEY
        if (!apiKey) {
          return Response.json({ error: 'AI not configured' }, { status: 500 })
        }

        const body = await request.json()
        const messages: Array<{ role: string; content: string }> =
          body.messages ?? []

        const encoder = new TextEncoder()
        const stream = new ReadableStream({
          async start(controller) {
            try {
              const response = await fetch(
                'https://api.anthropic.com/v1/messages',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01',
                    'anthropic-beta': 'messages-2023-12-15',
                  },
                  body: JSON.stringify({
                    model: 'claude-haiku-4-5-20251001',
                    max_tokens: 512,
                    system: aiContext,
                    stream: true,
                    messages: messages.map((m) => ({
                      role: m.role,
                      content: m.content,
                    })),
                  }),
                },
              )

              if (!response.ok || !response.body) {
                const err = await response.text()
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify({ error: err })}\n\n`),
                )
                controller.close()
                return
              }

              const reader = response.body.getReader()
              const dec = new TextDecoder()

              while (true) {
                const { done, value } = await reader.read()
                if (done) break
                const chunk = dec.decode(value, { stream: true })
                const lines = chunk.split('\n')
                for (const line of lines) {
                  if (line.startsWith('data: ')) {
                    const data = line.slice(6)
                    if (data === '[DONE]') continue
                    try {
                      const parsed = JSON.parse(data)
                      if (parsed.type === 'content_block_delta') {
                        const text = parsed.delta?.text ?? ''
                        if (text) {
                          controller.enqueue(
                            encoder.encode(
                              `data: ${JSON.stringify({ text })}\n\n`,
                            ),
                          )
                        }
                      }
                    } catch {
                      // skip malformed lines
                    }
                  }
                }
              }
              controller.enqueue(encoder.encode('data: [DONE]\n\n'))
              controller.close()
            } catch (e) {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ error: String(e) })}\n\n`,
                ),
              )
              controller.close()
            }
          },
        })

        return new Response(stream, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive',
          },
        })
      },
    },
  },
})
