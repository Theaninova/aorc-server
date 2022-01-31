import {Socket} from 'socket.io'
import {controllers} from './main'

export function forward(socket: Socket, event: string) {
  socket.on(event, (data: unknown) => controllers.emit(event, {user: socket.id, data}))
}

export function forwardAll(socket: Socket, events: string[]) {
  for (const event of events) forward(socket, event)
}
