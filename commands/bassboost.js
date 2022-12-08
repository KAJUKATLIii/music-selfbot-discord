const strings = require("../strings.json");
const utils = require("../utils");

module.exports.run = async (client, message, args) => {

    const serverQueue = queue.get("queue");

    if(!serverQueue) return message.channel.send(strings.nothingPlayingVolume);

  if (args != "on" && args != "off") return message.channel.send(strings.wrong);

  if (args[0] === "on"){

    floatVolume = 100;
    message.channel.send(strings.deep.replace(serverQueue.volume = floatVolume));
    serverQueue.volume = floatVolume;

    return serverQueue.connection.dispatcher.setVolumeLogarithmic(floatVolume / 5);
  };


  if (args[0] === "off"){

    floatVolume = 4;
    message.channel.send(strings.deep.replace(serverQueue.volume = floatVolume));
    serverQueue.volume = floatVolume;

    return serverQueue.connection.dispatcher.setVolumeLogarithmic(floatVolume / 5);
  };
};

module.exports.names = {
    list: ["bassboost", "bb"]
};
