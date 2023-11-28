export interface Conversation {
    id: number,
    message: string,
    sender: string,
    receiver: string,
    date: Date,
    lastSeen: Date,
  }