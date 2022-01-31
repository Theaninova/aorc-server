import {controllers, users} from './main'

export function configureUsers() {
  users.on('connection', socket => {
    console.log(`User ${socket.id} connected`)
    controllers.emit('userJoined', socket.id)

    socket.on('disconnecting', reason => {
      console.log(`Client disconnected for reason: ${reason}`)
      controllers.emit('userLeft', socket.id)
    })
    socket.on('load_level', (level: number) => {
      console.log(`Loading level ${level}`)
    })
  })
  users.on('error', error => console.log(error))
}
