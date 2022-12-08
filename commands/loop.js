const strings = require("../strings.json");
const utils = require("../utils");


module.exports.run = async (client, message, args) => {

    const serverQueue = queue.get("queue");

    if(!serverQueue){return message.channel.send(strings.cantLoop);};

    if(serverQueue.loop === false) {
        serverQueue.loop = true;
        utils.log(`Started looping : ${serverQueue.songs[0].title}`);
        message.channel.send(strings.loopOn.replace("SONG_TITLE", serverQueue.songs[0].title));
    } else {
        serverQueue.loop = false;
        utils.log(`Stopped looping : ${serverQueue.songs[0].title}`);
        message.channel.send(strings.loopOff.replace("SONG_TITLE", serverQueue.songs[0].title));
    };
};

module.exports.names = {
    list: ["loop", "l"]
};
