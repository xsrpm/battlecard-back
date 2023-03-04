import { z } from 'zod'

export const iniciarJuegoSchema = z.object({
  event: z.string(),
  payload: z.object({
    jugadorId: z.string()
  })
})

export type IniciarJuegoRequest = z.infer<typeof iniciarJuegoSchema>
