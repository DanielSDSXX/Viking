const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "loop",
    description: "Alternar loop de música",
    usage: "loop",
    aliases: ["l"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|** looop: **\`${serverQueue.loop === true ? "ativado" : "desativado"}\`**`
                }
            });
        };
    return sendError("Não há nada reproduzindo neste servidor.", message.channel);
  },
};
