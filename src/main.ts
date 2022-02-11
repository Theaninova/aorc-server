import {Server} from 'socket.io'
import {configureControllers} from './controllers'
import {configureUsers} from './users'
import {configureMultiplayer} from './multiplayer'

const port = Number(process.env.PORT) || 4593
export const io = new Server({
  cors: {
    origin: '*',
  },
})
export const users = io.of('users')
export const multiplayer = io.of('multiplayer')
export const controllers = io.of('controllers')
configureControllers()
configureUsers()
configureMultiplayer()

io.listen(port)
console.log(`Server is running on port ${port}`)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
io.engine.on('connection_error', (error: any) => {
  console.log(error.req) // the request object
  console.log(error.code) // the error code, for example 1
  console.log(error.message) // the error message, for example "Session ID unknown"
  console.log(error.context) // some additional error context
})
