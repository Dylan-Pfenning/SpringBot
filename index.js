const Discord = require('discord.js');
//const { prefix, token } = require('./config.json');
const prefix = "~";
// /const client = new Discord.Client();
const MaxDPS = 5;
const MaxSupport = 2;
var Days = [0, 0, 0, 0, 0, 0, 0];
var CheckedInMembers = [];
var BuildingParties = false;
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });




client.once('ready', () => {
    console.log('Ready!');
})

client.on('message', message => {
    // const author = message.guild.members.cache.find(member => member.id === user.id);
    if (message.content.startsWith(`${prefix}GPQDay`)) { //~gpq
        message.channel.send("Select the best days for you to run (1 - 7 relating to days starting with monday = 1)")
    }
    if (message.content.startsWith(`${prefix}GPQTime`)) {
        message.channel.send("Select the best times. React here for RESET -")
        message.channel.send("Select the best times. React here for RESET +")
    }
    if (message.content.startsWith(`${prefix}ClassAssigner`)) {
        if (message.author.id != '145463495830405120') {
            console.log("bad author")
            console.log(message.author.id);
            return;
        }
        message.channel.send("Please React to only the class you'd run GPQ on. If you get a support class role you'll be expected to come on that support class");
        message.channel.send("Thief Classes");
        message.channel.send("Archer Classes");
        message.channel.send("Warrior Classes");
        message.channel.send("Pirate Classes");
        message.channel.send("Mage Classes");
    }
    if (message.content.startsWith(`${prefix}MakeParties`)) {
        let pingRole = message.guild.roles.cache.find(role => role.name === `GPQ`);

        message.channel.send(`React here to check in for GPQ today <@&${pingRole.id}>`);
    }
    if (message.content.startsWith(`${prefix}init`)) {
        if (message.author.id != '145463495830405120') {
            console.log("bad author")
            return;
        }
        message.channel.send("Initializing Bot useage by creating class roles...");
        message.guild.roles.create({ data: { name: 'NW Role' } });
        message.guild.roles.create({ data: { name: 'NL Role' } });
        message.guild.roles.create({ data: { name: 'Phantom Role' } });
        message.guild.roles.create({ data: { name: 'Shadower Role' } });
        message.guild.roles.create({ data: { name: 'Cadena Role' } });
        message.guild.roles.create({ data: { name: 'Xenon Role' } });
        message.guild.roles.create({ data: { name: 'DB Role' } });
        message.guild.roles.create({ data: { name: 'Hoyoung Role' } });
        message.guild.roles.create({ data: { name: 'Jett Role' } });
        message.guild.roles.create({ data: { name: 'Cannoneer Role' } });
        message.guild.roles.create({ data: { name: 'Mihile Role' } });
        message.guild.roles.create({ data: { name: 'FP Role' } });
        message.guild.roles.create({ data: { name: 'Bishop Role' } });
        message.guild.roles.create({ data: { name: 'Hero Role' } });
        message.guild.roles.create({ data: { name: 'Illium Role' } });
        message.guild.roles.create({ data: { name: 'DA Role' } });
        message.guild.roles.create({ data: { name: 'Aran Role' } });
        message.guild.roles.create({ data: { name: 'Luminous Role' } });
        message.guild.roles.create({ data: { name: 'IL Role' } });
        message.guild.roles.create({ data: { name: 'Adele Role' } });
        message.guild.roles.create({ data: { name: 'Shade Role' } });
        message.guild.roles.create({ data: { name: 'TB Role' } });
        message.guild.roles.create({ data: { name: 'BM Role' } });
        message.guild.roles.create({ data: { name: 'Hayato Role' } });
        message.guild.roles.create({ data: { name: 'Mechanic Role' } });
        message.guild.roles.create({ data: { name: 'Evan Role' } });
        message.guild.roles.create({ data: { name: 'Bucc Role' } });
        message.guild.roles.create({ data: { name: 'BT Role' } });
        message.guild.roles.create({ data: { name: 'AB Role' } });
        message.guild.roles.create({ data: { name: 'Kaiser Role' } });
        message.guild.roles.create({ data: { name: 'DK Role' } });
        message.guild.roles.create({ data: { name: 'Sair Role' } });
        message.guild.roles.create({ data: { name: 'Kanna Role' } });
        message.guild.roles.create({ data: { name: 'Paladin Role' } });
        message.guild.roles.create({ data: { name: 'Kinesis Role' } });
        message.guild.roles.create({ data: { name: 'DW Role' } });
        message.guild.roles.create({ data: { name: 'Ark Role' } });
        message.guild.roles.create({ data: { name: 'Blaster Role' } });
        message.guild.roles.create({ data: { name: 'DS Role' } });
        message.guild.roles.create({ data: { name: 'BW Role' } });
        message.guild.roles.create({ data: { name: 'WH Role' } });
        message.guild.roles.create({ data: { name: 'Marksman Role' } });
        message.guild.roles.create({ data: { name: 'Pathfinder Role' } });
        message.guild.roles.create({ data: { name: 'WA Role' } });
        message.guild.roles.create({ data: { name: 'Mercedes Role' } });
        message.guild.roles.create({ data: { name: 'Bowmaster Role' } });
        message.channel.send("All done!");
    }
    if (message.author.id === '726967340511527063') {
        //Class assigner code
        if (message.content.startsWith('Thief Classes')) {
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
            const DB = client.emojis.cache.find(emoji => emoji.name === 'DB');
            message.react(DB);
            const Hoyoung = client.emojis.cache.find(emoji => emoji.name === 'Hoyoung');
            message.react(Hoyoung);
        } else if (message.content.startsWith('Archer Classes')) {
            const WH = client.emojis.cache.find(emoji => emoji.name === 'WH');
            message.react(WH);
            const Marksman = client.emojis.cache.find(emoji => emoji.name === 'Marksman');
            message.react(Marksman);
            const Pathfinder = client.emojis.cache.find(emoji => emoji.name === 'Pathfinder');
            message.react(Pathfinder);
            const WA = client.emojis.cache.find(emoji => emoji.name === 'WA');
            message.react(WA);
            const Mercedes = client.emojis.cache.find(emoji => emoji.name === 'Mercedes');
            message.react(Mercedes);
            const Bowmaster = client.emojis.cache.find(emoji => emoji.name === 'Bowmaster');
            message.react(Bowmaster);
        } else if (message.content.startsWith('Warrior Classes')) {
            const Hero = client.emojis.cache.find(emoji => emoji.name === 'Hero');
            message.react(Hero);
            const DK = client.emojis.cache.find(emoji => emoji.name === 'DK');
            message.react(DK);
            const Paladin = client.emojis.cache.find(emoji => emoji.name === 'Paladin');
            message.react(Paladin);
            const Mihile = client.emojis.cache.find(emoji => emoji.name === 'Mihile');
            message.react(Mihile);
            const DW = client.emojis.cache.find(emoji => emoji.name === 'DW');
            message.react(DW);
            const Aran = client.emojis.cache.find(emoji => emoji.name === 'Aran');
            message.react(Aran);
            const Blaster = client.emojis.cache.find(emoji => emoji.name === 'Blaster');
            message.react(Blaster);
            const DA = client.emojis.cache.find(emoji => emoji.name === 'DA');
            message.react(DA);
            const DS = client.emojis.cache.find(emoji => emoji.name === 'DS');
            message.react(DS);
            const Kaiser = client.emojis.cache.find(emoji => emoji.name === 'Kaiser');
            message.react(Kaiser);
            const Adele = client.emojis.cache.find(emoji => emoji.name === 'Adele');
            message.react(Adele);
            const Hayato = client.emojis.cache.find(emoji => emoji.name === 'Hayato');
            message.react(Hayato);
        } else if (message.content.startsWith('Pirate Classes')) {
            const Bucc = client.emojis.cache.find(emoji => emoji.name === 'Bucc');
            message.react(Bucc);
            const Sair = client.emojis.cache.find(emoji => emoji.name === 'Sair');
            message.react(Sair);
            const Cannoneer = client.emojis.cache.find(emoji => emoji.name === 'Cannoneer');
            message.react(Cannoneer);
            const Jett = client.emojis.cache.find(emoji => emoji.name === 'Jett');
            message.react(Jett);
            const TB = client.emojis.cache.find(emoji => emoji.name === 'TB');
            message.react(TB);
            const Shade = client.emojis.cache.find(emoji => emoji.name === 'Shade');
            message.react(Shade);
            const Mechanic = client.emojis.cache.find(emoji => emoji.name === 'Mechanic');
            message.react(Mechanic);
            const AB = client.emojis.cache.find(emoji => emoji.name === 'AB');
            message.react(AB);
            const Ark = client.emojis.cache.find(emoji => emoji.name === 'Ark');
            message.react(Ark);
        } else if (message.content.startsWith('Mage Classes')) {
            const Bishop = client.emojis.cache.find(emoji => emoji.name === 'Bishop');
            message.react(Bishop);
            const FP = client.emojis.cache.find(emoji => emoji.name === 'FP');
            message.react(FP);
            const IL = client.emojis.cache.find(emoji => emoji.name === 'IL');
            message.react(IL);
            const BW = client.emojis.cache.find(emoji => emoji.name === 'BW');
            message.react(BW);
            const DW = client.emojis.cache.find(emoji => emoji.name === 'DW');
            message.react(DW);
            const Evan = client.emojis.cache.find(emoji => emoji.name === 'Evan');
            message.react(Evan);
            const Luminous = client.emojis.cache.find(emoji => emoji.name === 'Luminous');
            message.react(Luminous);
            const BM = client.emojis.cache.find(emoji => emoji.name === 'BM');
            message.react(BM);
            const Illium = client.emojis.cache.find(emoji => emoji.name === 'Illium');
            message.react(Illium);
            const Kanna = client.emojis.cache.find(emoji => emoji.name === 'Kanna');
            message.react(Kanna);
            const BT = client.emojis.cache.find(emoji => emoji.name === 'BT');
            message.react(BT);
            const Kinesis = client.emojis.cache.find(emoji => emoji.name === 'Kinesis');
            message.react(Kinesis);
        } else if (message.content.startsWith('Select the best days for you to run')) {

            message.react('1️⃣')
                .then(() => message.react('2️⃣'))
                .then(() => message.react('3️⃣'))
                .then(() => message.react('4️⃣'))
                .then(() => message.react('5️⃣'))
                .then(() => message.react('6️⃣'))
                .then(() => message.react('7️⃣'))
                .catch(console.error);
            const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣'].includes(reaction.emoji.name) && user.id != message.author.id;
            }
            const collector = message.createReactionCollector(filter, { time: 86400000 });
            collector.on('end', collected => {
                message.channel.send("GPQ Date voting has finished.");
            })
        } else if (message.content.startsWith('Select the best times')) {
            message.react('1️⃣')
                .then(() => message.react('2️⃣'))
                .then(() => message.react('3️⃣'))
                .then(() => message.react('4️⃣'))
                .then(() => message.react('5️⃣'))
                .then(() => message.react('6️⃣'))
                .then(() => message.react('7️⃣'))
                .then(() => message.react('8️⃣'))
                .then(() => message.react('9️⃣'))
                .then(() => message.react('🔟'))
                .then(() => message.react('⏸'))
                .catch(console.error);
            const filter = (reaction, user) => {
                return ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '⏸'].includes(reaction.emoji.name) && user.id != message.author.id;
            }
            const collector = message.createReactionCollector(filter, { time: 86400000 });
            collector.on('end', collected => {
                message.channel.send("GPQ Time voting has finished.");
            })
        } else if (message.content.startsWith('React here to check in for GPQ today')) {
            const Cool = client.emojis.cache.find(emoji => emoji.name === 'dylcool');
            message.react(Cool);
            CheckedInMembers = [];
            BuildingParties = true;
            const filter = (reaction, user) => {
                return [Cool.name].includes(reaction.emoji.name) && user.id != message.author.id;
            }
            const collector = message.createReactionCollector(filter, { time: 900000 * 4 });
            //

            collector.on('collect', (reaction, user) => {
                var addMem = true;
                const member = message.guild.members.cache.find(member => member.id === user.id);

                if (CheckedInMembers.length <= 1) {
                    CheckedInMembers.push(member);
                } else {
                    CheckedInMembers.forEach(OtherMember => {
                        if (OtherMember.user.id === member.user.id) {
                            addMem = false;
                        }
                    });
                    if (addMem == true) {
                        CheckedInMembers.push(member);
                    }
                }
            });

            collector.on('end', collected => {
                //console.log(CheckedInMembers.user.username);
                BuildingParties = false;
                var Parties = [];
                var Supports = [];
                var NumParties = 1;
                CheckedInMembers.forEach(member => {
                    if (member.roles.cache.some(role => role.name === 'Kanna Role') || member.roles.cache.some(role => role.name === 'Bishop Role') || member.roles.cache.some(role => role.name === 'BT Role') || member.roles.cache.some(role => role.name === 'BW Role') || member.roles.cache.some(role => role.name === 'BM Role')) {
                        Supports.push(member);
                    }
                });
                if (CheckedInMembers.length - Supports.length < 6) {
                    NumParties = 1;
                } else {
                    NumParties = (CheckedInMembers.length / 5);
                }
                for (let i = 0; i < NumParties; i++) {
                    Parties[i] = [0]
                }
                message.channel.send("Forming Parties now...")
                CheckedInMembers.forEach(member => {
                    if (member.roles.cache.some(role => role.name === 'Kanna Role') || member.roles.cache.some(role => role.name === 'Bishop Role') || member.roles.cache.some(role => role.name === 'BT Role') || member.roles.cache.some(role => role.name === 'BW Role') || member.roles.cache.some(role => role.name === 'BM Role')) {

                    } else {
                        for (let i = 0; i < NumParties; i++) {
                            //add member to first available party
                            if (Parties[i][0] < 5) {
                                Parties[i].push(member);
                                Parties[i][0]++;
                                break;
                            }
                        }
                    }
                });
                for (let i = 0; i < Parties.length; i++) {
                    let party = "";
                    for (let j = 1; j < Parties[i].length; j++) {
                        //party.concat(Parties[i][j].user.username);
                        let name = "<@" + Parties[i][j].user.id + ">, ";
                        party += name;
                        //party.concat(name);
                    }
                    message.channel.send(`Party #${i + 1} ${party}`);
                }
                let supportList = "";
                Supports.forEach(member => {
                    let name = "<@" + member.user.id + ">, "
                    supportList += name;
                });
                message.channel.send(`Supports to be placed; ${supportList}`);
            })
        }

    }
})

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) {
        try {
            await reaction.message.fetch();
        } catch (error) {
            console.log('Something went wrong when fetching the message: ', error);
        }
    }
    if (reaction.message.author.id === user.id) {
        return;
    }
    if (reaction.message.content.startsWith('Thief Classes') || reaction.message.content.startsWith('Archer Classes') || reaction.message.content.startsWith('Warrior Classes') || reaction.message.content.startsWith('Pirate Classes') || reaction.message.content.startsWith('Mage Classes')) {
        const role = reaction.message.guild.roles.cache.find(role => role.name === `${reaction.emoji.name} Role`);
        const member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        member.roles.add(role);
    }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) {
        try {
            await reaction.message.fetch();
        } catch (error) {
            console.log('Something went wrong when fetching the message: ', error);
        }
    }

    if (reaction.message.content.startsWith('Thief Classes') || reaction.message.content.startsWith('Archer Classes') || reaction.message.content.startsWith('Warrior Classes') || reaction.message.content.startsWith('Pirate Classes') || reaction.message.content.startsWith('Mage Classes')) {
        //remove role
        const role = reaction.message.guild.roles.cache.find(role => role.name === `${reaction.emoji.name} Role`);
        const member = reaction.message.guild.members.cache.find(member => member.id === user.id);
        member.roles.remove(role);
    } else if (reaction.message.content.startsWith('React here to check in for GPQ today ')) {
        if (BuildingParties == true) {
            for (let i = 0; i < CheckedInMembers.length; i++) {
                if(CheckedInMembers[i].user.id === user.id){
                    CheckedInMembers.splice(i)
                }
            }

        }

    }
});

client.login(process.env.token);
//
