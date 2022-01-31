import {Server} from 'socket.io'

const port = Number(process.env.PORT) || 4593
const io = new Server(port)

io.of('users').on('connection', socket => {
  console.log(`Client ${socket.id} connected`)
  socket.on('disconnecting', reason => console.log(`Client disconnected for reason: ${reason}`))
  socket.on('load_level', (level: number) => {
    console.log(`Loading level ${level}`)
  })
})
io.of('users').on('error', error => console.log(error))

// eslint-disable-next-line @typescript-eslint/no-explicit-any
io.engine.on('connection_error', (error: any) => {
  console.log(error.req) // the request object
  console.log(error.code) // the error code, for example 1
  console.log(error.message) // the error message, for example "Session ID unknown"
  console.log(error.context) // some additional error context
})

console.log(`Server is running on port ${port}`)
