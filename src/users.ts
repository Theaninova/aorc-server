import {controllers, users} from './main'
import {forwardAll} from './util'
import {writeFileSync} from 'fs'

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
    socket.on('carsInfo', info => writeFileSync('data/cars.json', info))
    socket.on('stagesInfo', info => writeFileSync('data/stages.json', info))
    socket.on('translationSourceAdded', info => writeFileSync('data/translations.json', info))

    forwardAll(socket, ['loadLevel', 'stageUpdate', 'waypointsGathered'])

    socket.on('replayUpdated', data => {
      socket.broadcast.emit('replayReceived', data)
    })
    socket.on('multiplayerChangeMap', data => {
      socket.broadcast.emit('multiplayerChangeMap', data)
    })
    socket.on('multiplayerChangeRally', data => {
      socket.broadcast.emit('multiplayerChangeRally', data)
    })
    socket.on('multiplayerLoadMap', data => {
      socket.broadcast.emit('multiplayerLoadMap', data)
    })
  })
  users.on('error', error => console.log(error))
}
