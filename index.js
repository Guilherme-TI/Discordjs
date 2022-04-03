const { Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('ready', () => {
    console.log('✅ Estou on');
});

client.on('message', msg => {

    //ID do Bot

    var prefix = "$";
    let avatar = msg.author.displayAvatarURL({format: "png"});

    //Apresentação

    if (msg.content === prefix + "oi") {
        msg.reply('Oii ' + msg.author.username);
    }

    if(msg.content === prefix + "embed"){
        const embed = new MessageEmbed()
        .setAuthor(msg.author.tag, avatar)
        .setTitle('Titulo')
        .setDescription('Descrição')
        .addField('Titulo do campo', 'Conteúdo', true)
        .addFields(
            { name: 'Titulo do campo', value: 'Conteúdo', inline: true },
            { name: 'Titulo do campo', value: 'Conteúdo', inline: true }
        )
        .setImage('https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/908828/how-to-make-a-discord-bot-7c0fe302b98b05b145682344b3a4ec59.png')
        .setTimestamp()
        .setColor('DARK_BLUE')
        .setThumbnail(avatar)
        .setFooter({text: 'Rodapé'});
        msg.channel.send({embeds: [embed]});
    }
});

client.login(config.token);