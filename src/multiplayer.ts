import {multiplayer} from './main'
import {Socket} from 'socket.io'

function roomPlayers(room: string): string[] {
  return [...(multiplayer.adapter.rooms.get(room)?.values() ?? [])]
}

function broadcastRooms(socket: Socket, event: string): void {
  socket.on(event, data => {
    for (const room of socket.rooms) {
      socket.to(room).emit(event, data)
    }
  })
}

function broadcastAllRooms(socket: Socket, events: string[]): void {
  events.map(it => broadcastRooms(socket, it))
}

export function configureMultiplayer() {
  multiplayer.on('connection', socket => {
    console.log(`Multiplayer User ${socket.id} connected`)
    socket.on('disconnect', () => {
      console.log(`Multiplayer User ${socket.id} disconnected`)
    })

    socket.on('joinLobby', (lobby: number) => {
      console.log(`Multiplayer User ${socket.id} joined lobby ${lobby}`)
      socket.join(lobby.toString())
    })
    socket.on('leaveLobby', () => {
      console.log(`Multiplayer User ${socket.id} left lobby`)
      for (const room of socket.rooms) {
        socket.leave(room)
      }
    })

    broadcastAllRooms(socket, ['replayUpdated', 'startEvent'])
    /*socket.on('multiplayerChangeMap', data => {
      socket.broadcast.emit('multiplayerChangeMap', data)
    })
    socket.on('multiplayerChangeRally', data => {
      socket.broadcast.emit('multiplayerChangeRally', data)
    })
    socket.on('multiplayerLoadMap', data => {
      socket.broadcast.emit('multiplayerLoadMap', data)
    })*/
  })

  multiplayer.adapter.on('join-room', (room: string, socket) => {
    console.log(`Multiplayer User ${socket.id} joined room ${room}`)
    multiplayer.to(room).emit('playersUpdated', roomPlayers(room))
  })

  multiplayer.adapter.on('leave-room', (room: string, socket) => {
    console.log(`Multiplayer User ${socket.id} left room ${room}`)
    multiplayer.to(room).emit('playersUpdated', roomPlayers(room))
  })
}
