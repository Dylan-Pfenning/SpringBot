const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
})

client.on('message', message => {
    if (message.content.startsWith(`${prefix}GPQ`)) { //~gpq
        message.channel.send("Select the best days for you to run (1 - 7 relating to days starting with monday = 1)")
        message.channel.send("Select the best times. React here for RESET -")
        message.channel.send("Select the best times. React here for RESET +")
    }
    if (message.content.startsWith(`${prefix}ClassAssigner`)) {
        message.channel.send("React to the glass you will come to GPQ on");
        message.channel.send("React here for Thief Classes")
    }
    if (message.content.startsWith(`${prefix}MakeParties`)) {
        message.channel.send("React here to check in for GPQ today")
    }
    if (message.author.id === '726967340511527063') {
        //Class assigner code
        if (message.content.startsWith('React here for Thief Classes')) {
            const NW = client.emojis.cache.find(emoji => emoji.name === 'NW');
            message.react(NW);
            const NL = client.emojis.cache.find(emoji => emoji.name === 'NL');
            message.react(NL);
            const Phantom = client.emojis.cache.find(emoji => emoji.name === 'Phantom');
            message.react(Phantom);
            const Shadower = client.emojis.cache.find(emoji => emoji.name === 'Shadower');
            message.react(Shadower);
            const Cadena = client.emojis.cache.find(emoji => emoji.name === 'Cadena');
            message.react(Cadena);
            const Xenon = client.emojis.cache.find(emoji => emoji.name === 'Xenon');
            message.react(Xenon);
            const filter = (reaction, user) => {
                return [NW.name, NL.name, Phantom.name, Shadower.name, Cadena.name, Xenon.name].includes(reaction.emoji.name) && user.id != message.author.id;
            };
            const collector = message.createReactionCollector(filter, { time: null });

            collector.on('collect', (reaction, user) => {
                //console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
                const role = message.guild.roles.cache.find(role => role.name === `${reaction.emoji.name} Role`);
                const member = message.guild.members.cache.find(member => member.id === user.id);
                member.roles.add(role);
            });
        } else if (message.content.startsWith('Select the best days for you to run')) {

            message.react('1️⃣')
                .then(() => message.react('2️⃣'))
                .then(() => message.react('3️⃣'))
                .then(() => message.react('4️⃣'))
                .then(() => message.react('5️⃣'))
                .then(() => message.react('6️⃣'))
                .then(() => message.react('7️⃣'))
        }
    }
})

client.login(token);