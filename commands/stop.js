const strings = require("../strings.json");
const utils = require("../utils");

module.exports.run = async (client, message, args) => {

    const serverQueue = queue.get("queue");
    if(!serverQueue){return message.channel.send(strings.nothingPlaying);};

    serverQueue.songs = [];


    utils.log("Stopped playing music");

    serverQueue.connection.dispatcher.end();

    return message.channel.send(strings.musicStopped);

};

module.exports.names = {
    list: ["stop", "st"]
};
