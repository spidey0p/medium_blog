import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

const app = new Hono()

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env.DATABASE_URL
}).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  })

  //@ts-ignore
  const token = await sign({id: user.id}, c.env.JWT_SECRET)

  return c.json({
    jwt: token
  })
})

// app.post('/api/v1/signin', (c) => {
//   return c.json({ message: 'Signin success' })
// })

// app.post('/api/v1/blog', (c) => {
//   return c.json({ message: 'Vlog created' })
// })

// app.put('/api/v1/blog', (c) => {
//   return c.json({ message: 'Vlog updated' })
// })

// app.get('/api/v1/blog/:id', (c) => {
//   return c.json({ message: 'Vlog fetched' })
// })

export default app
