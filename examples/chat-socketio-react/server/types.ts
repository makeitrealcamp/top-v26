export interface ServerToClientEvents {
  welcomeMsg: (d: string) => void;
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  chat: (d: string) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
  newText: (data: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
