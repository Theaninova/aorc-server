import {controllers, users} from './main'
import {forwardAll} from './util'

export function configureUsers() {
  users.on('connection', socket => {
    console.log(`User ${socket.id} connected`)
    controllers.emit('userJoined', socket.id)

    socket.on('disconnecting', reason => {
      console.log(`Client disconnected for reason: ${reason}`)
      controllers.emit('userLeft', socket.id)
    })

    forwardAll(socket, ['loadLevel', 'timerUpdate'])
  })
  users.on('error', error => console.log(error))
}
