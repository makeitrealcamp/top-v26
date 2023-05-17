export interface ServerToClientEvents {
  sendMessage: (data: { message: string }) => void;
  broadcast: (data: string) => void;
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
  clientMessage: (
    d: { message: string },
    callback: (data: string) => void
  ) => void;
  hello: () => void;
  close: () => void;
}
export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
