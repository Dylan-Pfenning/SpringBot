const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const MaxDPS = 5;
const MaxSupport = 2;
var Days = [0, 0, 0, 0, 0, 0, 0];

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
        message.channel.send("React here for Thief Classes");
        message.channel.send("React here for Archer Classes");
        message.channel.send("React here for Warrior Classes");
        message.channel.send("React here for Pirate Classes");
        message.channel.send("React here for Mage Classes");
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
            const DB = client.emojis.cache.find(emoji => emoji.name === 'DB');
            message.react(DB);
            const Hoyoung = client.emojis.cache.find(emoji => emoji.name === 'Hoyoung');
            message.react(Hoyoung);
            const filter = (reaction, user) => {
                return [NW.name, NL.name, Phantom.name, Shadower.name, Cadena.name, Xenon.name, DB.name, Hoyoung.name].includes(reaction.emoji.name) && user.id != message.author.id;
            };
            const collector = message.createReactionCollector(filter, { time: null });

            collector.on('collect', (reaction, user) => {
                //console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
                const role = message.guild.roles.cache.find(role => role.name === `${reaction.emoji.name} Role`);
                const member = message.guild.members.cache.find(member => member.id === user.id);
                member.roles.add(role);
            });
        } else if (message.content.startsWith('React here for Archer Classes')) {
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

            const filter = (reaction, user) => {
                return [WH.name, Marksman.name, Pathfinder.name, WA.name, Mercedes.name, Bowmaster.name].includes(reaction.emoji.name) && user.id != message.author.id;
            };
            const collector = message.createReactionCollector(filter, { time: null });

            collector.on('collect', (reaction, user) => {
                const role = message.guild.roles.cache.find(role => role.name === `${reaction.emoji.name} Role`);
                const member = message.guild.members.cache.find(member => member.id === user.id);
                member.roles.add(role);
            });

        } else if (message.content.startsWith('React here for Warrior Classes')) {
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

            const filter = (reaction, user) => {
                return [Hero.name, DK.name, Paladin.name, Mihile.name, DW.name, Aran.name, Blaster.name, DA.name, DS.name, Kaiser.name, Adele.name, Hayato.name].includes(reaction.emoji.name) && user.id != message.author.id;
            };
            const collector = message.createReactionCollector(filter, { time: null });

            collector.on('collect', (reaction, user) => {
                const role = message.guild.roles.cache.find(role => role.name === `${reaction.emoji.name} Role`);
                const member = message.guild.members.cache.find(member => member.id === user.id);
                member.roles.add(role);
            });
        } else if (message.content.startsWith('React here for Pirate Classes')) {
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

            const filter = (reaction, user) => {
                return [Bucc.name, Sair.name, Jett.name, TB.name, Shade.name, Mechanic.name, AB.name, Ark.name].includes(reaction.emoji.name) && user.id != message.author.id;
            };
            const collector = message.createReactionCollector(filter, { time: null });

            collector.on('collect', (reaction, user) => {
                const role = message.guild.roles.cache.find(role => role.name === `${reaction.emoji.name} Role`);
                const member = message.guild.members.cache.find(member => member.id === user.id);
                member.roles.add(role);
            });
        } else if (message.content.startsWith('React here for Mage Classes')) {
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
            const filter = (reaction, user) => {
                return [Bishop.name, FP.name, IL.name, BW.name, DW.name, Evan.name, Luminous.name, BM.name, Illium.name, Kanna.name, BT.name, Kinesis.name].includes(reaction.emoji.name) && user.id != message.author.id;
            };
            const collector = message.createReactionCollector(filter, { time: null });

            collector.on('collect', (reaction, user) => {
                const role = message.guild.roles.cache.find(role => role.name === `${reaction.emoji.name} Role`);
                const member = message.guild.members.cache.find(member => member.id === user.id);
                member.roles.add(role).catch(message.channel.send(`You dont have ${reaction.emoji.name} Role`));
            });
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

            collector.on('collect', (reaction, user) => {
                switch (reaction.emoji.name) {
                    case '1️⃣':
                        Days[0]++;
                        break;
                    case '2️⃣':
                        Days[1]++;
                        break;
                    case '3️⃣':
                        Days[2]++;
                        break;
                    case '4️⃣':
                        Days[3]++;
                        break;
                    case '5️⃣':
                        Days[4]++;
                        break;
                    case '6️⃣':
                        Days[5]++;;
                        break;
                    case '7️⃣':
                        Days[6]++;
                        break;
                }
            })

            collector.on('end', collected => {
                let highestScore = Days[0];
                let highestScoreDay = 1;
                let nextScore;
                for (let i = 1; i < Days.length; i++) {
                    nextScore = Days[i];
                    if (nextScore > highestScore) {
                        highestScoreDay = i + 1;
                    }
                }
                switch (highestScoreDay) {
                    case 1:
                        message.channel.send('GPQ Will be run on monday this week!')
                        break;
                    case 2:
                        message.channel.send('GPQ Will be run on tuesday this week!')
                        break;
                    case 3:
                        message.channel.send('GPQ Will be run on wednesday this week!')
                        break;
                    case 4:
                        message.channel.send('GPQ Will be run on thursday this week!')
                        break;
                    case 5:
                        message.channel.send('GPQ Will be run on friday this week!')
                        break;
                    case 6:
                        message.channel.send('GPQ Will be run on saturday this week!')
                        break;
                    case 7:
                        message.channel.send('GPQ Will be run on sunday this week!')
                        break;
                    default:
                        //Error dont hit
                        break;

                }
            })
        }
    }
})

client.login(process.env.token);