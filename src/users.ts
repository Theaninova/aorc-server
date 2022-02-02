import {controllers, users} from './main'
import {forwardAll} from './util'

export function configureUsers() {
  users.on('connection', socket => {
    console.log(`User ${socket.id} connected`)
    controllers.emit('userJoined', {user: socket.id})

    socket.on('disconnecting', reason => {
      console.log(`Client disconnected for reason: ${reason}`)
      controllers.emit('userLeft', {user: socket.id})
    })
    socket.on('error', error => {
      console.log(`Client error: ${error}`)
    })

    forwardAll(socket, ['loadLevel', 'stageUpdate', 'waypointsGathered'])
  })
  users.on('error', error => console.log(error))
}
