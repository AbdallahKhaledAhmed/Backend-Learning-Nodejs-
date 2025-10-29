const EventEmmiter = require("node:events");
const event = new EventEmmiter();

event.on("new-message", (contenet) => {
  console.log("There is a new message! contents:" + contenet);
});

event.emit("new-message", "Hello!!");
