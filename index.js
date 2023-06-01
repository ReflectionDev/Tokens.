const token = [

    ];
    token.forEach(token => {
    const Discord = require("discord.js-selfbot");
      const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS]
    });
      const {userAccount} = require("sphinx-run");
    new userAccount(client, Discord).leveling({
        channel: '1113594929516654622',
        randomLetters: false , 
        time: 20000, 
        type: 'ar'
    });
      
      client.on('message', (message) => {
     if (message.author.bot) return false;
     if (message.content.toLowerCase().startsWith('_say')) {
      message.channel.send(
       `${message.content.toLowerCase().replace('_say' , '')}`
        
      );
     }
    });
    client.on('ready', () => {
            console.log(`${client.user.tag} Is Online`)
        })
        client.login(token)
    })
   
    
