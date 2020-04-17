const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})
client.login(NzAwNjgwMTQxODM1MDc1NjQ1.XpmfdA.quJEMZpDYjLPFKgO5nahIUbdBXQ)
npm install nodemon --save-dev
