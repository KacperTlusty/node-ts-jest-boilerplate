import { Server } from 'http'

export const localServer = new Server((req, res) => {
  return res.end('Hello world')
}).listen(3000)
