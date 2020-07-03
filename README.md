# SpringBot
Spring bot is a discord bot created to make party creation for Maplestory's Guild Party Quest easier

Link to add the bot to your discord; https://discordapp.com/oauth2/authorize?client_id=726967340511527063&scope=bot&permissions=2080898299
## Setting up the bot
1. Create a roll with the name 'Goon'. The bot will only listen to commands from people who have this role so I recommend giving it to the people who organize GPQ for your guild
2. Create a roll reaction channel. Ideally this chat will not allow other users to type in the chat so that the role reacts will always be visible when clicking on that chat.
 -> To create a chat channel that only admins can type in add a channel and go to edit channel (the cog) and permissions. @everyone should have send messages set to off.
3. Use the ~init command. This command creates all the roles needed for the bot to fully function. Yes its a lot of roles. Blame nexon not me.
4. In the roll reaction channel use 2 commands
 -> ~GPQRoleAssigner command will give the users a message to react to if they want to be pinged for all things GPQ
 -> ~ClassAssigner command will post a huge list of reactions so users can react to the class they will come on GPQ with.
  -> please note for the class assigner. The party creation takes priority in support classes. So if people have multiple classes with one being a support they will be placed in a party such as they are playing a support class.
5. Get people to react in the class assigner and you're good to go!

## Using the bot
There are 3 commands you'll end up using for your weekly GPQ runs.
1. ~GPQDay will post a message with the numbers 1-7 for users to select what days they are free to run gpq!
2. ~GPQTime will post 2 messages for users to react to in order to select the best time for them to run. Ideally you'll use ~GPQDay then after some time use GPQTime so everyone knows the day you're running before selecting a time.
    ->All times are in UTC (Reset = midnight UTC aka Maplestory's daily reset time)
3. ~MakeParties. This command will post a check in for users to react to. This stays collecting reacts for 1 hour before forming parties.
    -> Right now parties are formed with 5 people. It will also list supports you need to place in parties.
    -> As the the can't tell how strong you are the parties will be imperfect. I'm working on adding class synergy to the parties but that update is still in the works.

## Ending
If you enjoy the bot or have any feedback/extra stuff to know just drop me a message on discord at Dyln#0009. :)
