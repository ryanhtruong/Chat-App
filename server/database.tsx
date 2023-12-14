// use MongoDB to store data

// TODO: setup database connection

// TODO: setup following database functions
export async function getAllMessages() {
  console.log("Getting all messages");
}

export async function getMessage(id:string) {
  console.log("Getting message with id: " + id);
}

export async function deleteMessage(id: string) {
  console.log("Deleting message with id: " + id);
}

export async function createMessage(name: string, message: string) {
  console.log("Creating message with name: " + name + " and message: " + message);
}