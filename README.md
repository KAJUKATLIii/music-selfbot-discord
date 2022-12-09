# KAJUKATLii MUSIC SELFBOT v4
This uses  uses users token to play music in voice channel.


<h3 align="left">Languages Used</h3>
<p align="left">

<img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="javascript"
      width="40"
      height="40"
    />
    <a> <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
      alt="javascript"
      width="40"
      height="40"
    />
   
## Deployment

To deploy this project on Replit.

[![Run on Repl.it](https://repl.it/badge/github/KAJUKATLii/music-selfbot-discord)](https://repl.it/github/KAJUKATLii/music-selfbot-discord)

## To Host Bot 24/7
Use [UPTIMEROBOT](https://uptimerobot.com/login) to run bot 24/7
## CODE EXAMPLE

```javascript
const Discord = require("discord.js-selfbot");
const client = new Discord.Client();
const fs = require('fs');
const Enmap = require('enmap');
const utils = require('./utils');
const keepAlive = require("./server")

if (!process.env.TOKEN){
  try{
    const config = require("./config");
    global.config = {'token': config.token, 'prefix': config.prefix};
  } catch (e){
    console.error("No config file found, create it or use environnement variables.");
    process.exit(1);
  };
} else{
  if (!process.env.PREFIX) process.env.PREFIX="--";
  global.config = {'token': process.env.TOKEN, 'prefix': process.env.PREFIX};
}
if (!process.env.ALLOWED){
  try {global.config.allowed=require("./allowed.json").allowed}
  catch (e){
    global.config.allowed=[]
  }
} else{
  global.config.allowed=process.env.ALLOWED
}
keepAlive();
client.login(config.token)

utils.log("Logging in...");

/* ----------------------------------------------- */

global.queue = new Map();
client.commands = new Enmap();

/* ----------------------------------------------- */

var loaded = {events: [], commands: []};

var promise = new Promise((resolve) => {
  fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      const evt = require(`./events/${file}`);
      let evtName = file.split('.')[0];
      loaded.events.push(evtName)
      client.on(evtName, evt.bind(null, client));
    });
    resolve();
  });
});


fs.readdir('./commands/', async (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./commands/${file}`);
    props.names.list.forEach(name => {
      client.commands.set(name, props);
    })
    let cmdName = file.split('.')[0];
    loaded.commands.push(cmdName)
  });
  promise.then(() => {utils.log(`Table of commands and events :\n${utils.showTable(loaded)}`)});
});


/* --------------------------------------------------- */
```


## To Run The Code

To run code, run the following command

```bash
  node index.js
```

## Environment Variables

System environment variables.

To run this project, you will need to add the following environment variables to your .env file

For REPLIT

To run this project in replit , you will need to add the following environment variables to your secrets.


`TOKEN` DISCORD USERS TOKEN.

`ALLOWED` DISCORD USERS ID.

`PREFIX` Prefix which you want for your bot for example "!".



## THE CODE MADE BY

- [@KAJUKATLii](https://www.github.com/KAJUKATLii)


## WARNINGS
⚠️Warning : Self-bots are discouraged by Discord and is against Discord's ToS. You might get banned for this if not used properly.

⚠️Discord's Terms of Service : https://discord.com/terms
