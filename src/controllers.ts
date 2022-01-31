import {controllers, users} from './main'

export function configureControllers() {
  controllers.on('connection', socket => {
    console.log(`Controller ${socket.id} connected`)
  })

  controllers.on('getUsers', socket => {
    users.allSockets().then(sockets => {
      socket.emit('userJoined', [...sockets])
    })
  })
}
