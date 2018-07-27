const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, Util } = require('discord.js');
const dateFormat = require('dateformat');
const fs = require('fs');
const moment = require('moment');




var Eris = require("eris");
let  ID = "448501199608610826";
const BT  = new Eris(process.env.BOT_TOKEN);
BT.connect(process.env.BOT_TOKEN)
BT.on("ready", ready => {
setInterval(function(){

            let currentTime = new Date(),
            hours = currentTime.getHours() + 2 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            week = currentTime.getDay();



            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "AM";
            if (hours >= 12) {
                suffix = "PM";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
BT.editChannel("448501199608610826", {name : "🌹WEL"})
BT.editChannel("448501199608610826", {name : "🌹WELC"})
BT.editChannel("448501199608610826", {name : "🌹WELCO"})
BT.editChannel("448501199608610826", {name : "🌹WELCOM"})
BT.editChannel("448501199608610826", {name : "🌹WELCOME"})
BT.editChannel("448501199608610826", {name : "🌹WELCOME T"})
BT.editChannel("448501199608610826", {name : "🌹WELCOME TO"})
BT.editChannel("448501199608610826", {name : "🌹WELCOME TO P"})
BT.editChannel("448501199608610826", {name : "🌹WELCOME TO PR"})
BT.editChannel("448501199608610826", {name : "🌹WELCOME TO PRO🌹"})



}, 5000);

});

 
client.on('message',message =>{
    var prefix = "*";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/GnR2unD.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

   
client.on('message', message => {
    id = client.user.id;
    guild = message.guild;
    emojiHasPermission = permission => {
      console.log(permission);
      if (guild.member(id).permissions.has(permission, false)) {
        return ':white_check_mark:';
      } else {
        return ':x:';
      }
    };
    if (message.content === '*per') {
    message.channel.send({embed: {
      title: ':tools: Permissions',
      color: 0x06DF00,
      fields: [
        {
   
          name: 'Administrator :',
          value: emojiHasPermission('ADMINISTRATOR'),
          inline: true
        },
        {
          name: 'Create Instant Invite :',
          value: emojiHasPermission('CREATE_INSTANT_INVITE'),
          inline: true
        },
        {
          name: 'Kick Members :',
          value: emojiHasPermission('KICK_MEMBERS'),
          inline: true
        },
        {
          name: 'Ban Members :',
          value: emojiHasPermission('BAN_MEMBERS'),
          inline: true
        },
        {
          name: 'Manage Channels :',
          value: emojiHasPermission('MANAGE_CHANNELS'),
          inline: true
        },
        {
          name: 'Manage Guild :',
          value: emojiHasPermission('MANAGE_GUILD'),
          inline: true
        },
        {
          name: 'Add Reactions :',
          value: emojiHasPermission('ADD_REACTIONS'),
          inline: true
        },
        {
          name: 'View Audit Log :',
          value: emojiHasPermission('VIEW_AUDIT_LOG'),
          inline: true
        },
        {
   
          name: 'Manage Messages :',
          value: emojiHasPermission('MANAGE_MESSAGES'),
          inline: true
        },
        {
          name: 'Embed Links :',
          value: emojiHasPermission('EMBED_LINKS'),
          inline: true
        },
        {
          name: 'Attach Files :',
          value: emojiHasPermission('ATTACH_FILES'),
          inline: true
        },
        {
          name: 'Read Message History :',
          value: emojiHasPermission('READ_MESSAGE_HISTORY'),
          inline: true
        },
        {
          name: 'Mention Everyone :',
          value: emojiHasPermission('MENTION_EVERYONE'),
          inline: true
        },
        {
          name: 'Use External Emojis :',
          value: emojiHasPermission('USE_EXTERNAL_EMOJIS'),
          inline: true
        },
        {
          name: 'Connect :',
          value: emojiHasPermission('CONNECT'),
          inline: true
        },
        {
          name: 'Speak :',
          value: emojiHasPermission('SPEAK'),
          inline: true
        },
        {
   
          name: 'Mute Members :',
          value: emojiHasPermission('MUTE_MEMBERS'),
          inline: true
        },
        {
          name: 'Deafen Members :',
          value: emojiHasPermission('DEAFEN_MEMBERS'),
          inline: true
        },
        {
          name: 'Move Members :',
          value: emojiHasPermission('MOVE_MEMBERS'),
          inline: true
        },
        {
          name: 'Use VAD :',
          value: emojiHasPermission('USE_VAD'),
          inline: true
        },
        {
          name: 'Change Nickname :',
          value: emojiHasPermission('CHANGE_NICKNAME'),
          inline: true
        },
        {
          name: 'Manage Nicknames :',
          value: emojiHasPermission('MANAGE_NICKNAMES'),
          inline: true
        },
        {
          name: 'Manage Roles :',
          value: emojiHasPermission('MANAGE_ROLES'),
          inline: true
        },
        {
          name: 'Manage Webhooks :',
          value: emojiHasPermission('MANAGE_WEBHOOKS'),
          inline: true
        },
        {
          name: 'Manage Emojis :',
          value: emojiHasPermission('MANAGE_EMOJIS'),
          inline: true
        }
      ]
    }
    });
    }
  });



   
  client.on("message", async message => {
    if(!message.channel.guild) return;
    var prefix = "*";
if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
    .then(invites => {
     invites.forEach(invite => {
        if (invite.inviter === message.author) {
             nul+=invite.uses
            }
        });
    });
  if (nul > 0) {
      console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
      var embed = new Discord.RichEmbed()
          .setColor("#000000")
            .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                  message.channel.send({ embed: embed });
              return;
            } else {
               var embed = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

               message.channel.send({ embed: embed });
                return;
            }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});


client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "*";
if(message.content.startsWith(prefix + 'channel')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("Channel Info")
      .setColor("#9932CC")
      .setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("Created At", `${channel.createdAt}`)
      .addField("Channel Type", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });
 

    client.on("message", async message => {
        if(!message.channel.guild) return;
    var prefix = "*";
    if(message.content.startsWith(prefix + 'member')) {
        let guild = await message.guild.fetchMembers()
        let bots = guild.members.filter(m => m.user.bot).size
        let members = guild.memberCount
        let humans = members - bots
        let dndusers = guild.members.filter(member => member.user.presence.status === "dnd")
        let awayusers = guild.members.filter(member => member.user.presence.status === "idle")
        let onlineusers = guild.members.filter(member => member.user.presence.status === "online")
        let offlineusers = guild.members.filter(member => member.user.presence.status === "offline")
        var embed = new Discord.RichEmbed()
              .setColor("#000000")
              .setTitle("Membercount")
              .setDescription("Membercount in " + guild.name)
              .addField("Members", `${members}`, true)
              .addField("Humans", `${humans}`, true)
              .addField("Bots", `${bots}`, true)
              .addField("Status Users", `Online Users: ${onlineusers.size}\nDND Users: ${dndusers.size}\nAway Users: ${awayusers.size}\nOffline Users: ${offlineusers.size}\nTotal Members: ${message.guild.memberCount}`, true)
              .setThumbnail(message.author.avatarURL)
              message.channel.send({ embed: embed });
     
      }
     
        });


        client.on('message', message => {
            var prefix = "*"
      if(message.content.startsWith (prefix  + 'mb')) {
          if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`**:battery: حالة اعضاء السيرفر**
         
    **:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
    **:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
    **:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
    **:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)
     
            message.channel.send()
     
    message.channel.sendEmbed(embed)
    }
    });
    
    client.on("message", async message => {
        if(!message.channel.guild) return;
 var prefix= "*";
        if(message.content.startsWith(prefix + 'server')) {
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField("صاحب السيرفر :", `${guild.owner}`, true)
          .addField("أيدي السيرفر :", `${guild.id}`, true)
          .addField("موقع السيرفر :", `${guild.region}`, true)
          .addField("مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField("عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField("عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField("عدد اعضاء السيرفر :", `${members}`, true)
          .addField("عدد البوتات :", `${bots}`, true)
          .addField("عدد الاشخاص :", `${humans}`, true)
          .addField("عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });

    client.on('message', message => {
        var prefix = "*"
        if(message.content === prefix + "emojis") {
          const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
          message.channel.send(emojiList);
        }
      });


      client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith('!report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'report');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
      }
      });

      client.on('message', message => {
        if (message.content.startsWith("رابط")) {
            message.channel.createInvite({
            thing: true,
            maxUses: 1,
            maxAge: 3600,
        }).then(invite =>
          message.author.sendMessage(invite.url)
        )
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
              .setDescription(" تم أرسال الرابط برسالة خاصة ")
               .setAuthor(client.user.username, client.user.avatarURL)
                     .setAuthor(client.user.username, client.user.avatarURL)
                    .setFooter('طلب بواسطة: ' + message.author.tag)
     
          message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
                  const Embed11 = new Discord.RichEmbed()
            .setColor("RANDOM")
             
        .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
          message.author.sendEmbed(Embed11)
        }
    }); 

    client.on('message', message => {
        if (message.content.startsWith("*avatar")) {
            var mentionned = message.mentions.users.first();
        var x5bzm;
          if(mentionned){
              var x5bzm = mentionned;
          } else {
              var x5bzm = message.author;
               
          }
            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${x5bzm.avatarURL}`)
          message.channel.sendEmbed(embed);
        }
    });

    client.on('message', message => {
        if(!message.channel.guild) return;
    if (message.content.startsWith('!ping')) {
    if(!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`
    var api = `${Math.round(client.ping)}`
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail('https://media.discordapp.net/attachments/417477494950854656/438706305125974017/maxresdefaul1t.jpg?width=339&height=353')
    .setColor('RANDOM')
    .addField('**Time Taken:**',msg + " ms")
    .addField('**WebSocket:**',api + " ms")
    message.channel.send({embed:embed});
    }
    });


    var prefix = "*";
 
    client.on('message', message => {
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command === "say") {
              message.delete()
        message.channel.sendMessage(args.join(" ")).catch(console.error);
      }
       
      
     
    if (command == "embed") {
        let say = new Discord.RichEmbed()
        .setDescription(args.join("  "))
        .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
      }
     
     
    });
     
    client.on("message", message => {
        const prefix = "*"
                   
              if(!message.channel.guild) return;
       if(message.author.bot) return;
          if(message.content === prefix + "image"){ 
              const embed = new Discord.RichEmbed()
       
          .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
      .setAuthor(message.author.username, message.guild.iconrURL)
        .setColor(0x164fe3)
        .setImage(message.guild.iconURL)
        .setURL(message.guild.iconrURL)
                        .setTimestamp()
     
       message.channel.send({embed});
          }
      });
      
client.on('message', message =>{
    if(message.content == "*roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});


client.on('message', message => {
    if (message.content === "*rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;
 
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
         
.addField(':arrow_down:اسماء الرومات. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
 

var prefix = "*";
const HeRo = new Discord.Client();
client.on('message', message => {
    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
            .setFooter(`+help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
             message.channel.sendEmbed(Date15);
    }
});


client.on('message', message => {
    var prefix = "*";
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "id")) {
    var embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setThumbnail(message.author.avatarURL)
    .addField("اسمك في السيرفر ", `${message.author.tag} (ID: ${message.author.id})`, true)
    .addField("حالتك :", message.member.presence !== null && message.member.presence.status !== null ? message.member.presence.status : "Offline")
    .addField("يلعب؟ : ", `${message.author.presence.game === null ? "None" :  message.author.presence.game.name}`, true)
    .addField("اسمك في دسكورد ", `${message.member.displayName}`, true)
    .addField("الرتب الذي تمتلكها ", `${message.member.roles.map(r => r.name).join(", ")}`)
    .addField("أعلى رتبه تمتلكها: ", message.member.highestRole.name)
    .addField("دخولك للدسكورد :", `${message.member.joinedAt.toDateString()}`)
    .addField("دخولك للسيرفر : ", `${message.author.createdAt.toDateString()}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL);
  if (message.mentions.users.size < 1) return message.channel.send({ embed: embed });
    
  let member = message.mentions.members.first();
  var embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setThumbnail(member.user.avatarURL)
    .addField("اسمه في دسكورد:", `${member.user.tag} (ID: ${member.id})`, true)
    .addField("حالته :", member.presence !== null && member.presence.status !== null ? member.presence.status : "Offline")
    .addField("يلعب :", `${member.user.presence.game === null ? "Nothing" :  member.user.presence.game.name}`, true)
    .addField("اسمه في السيرفر:", `${member.nickname === null ? "None" : member.nickname}`, true)
    .addField("الرتب :", `${member.roles.map(r => r.name).join(", ")}`)
    .addField("اعلى رتبه يمتلكها : :", member.highestRole.name)
    .addField("دخوله لدسكورد :", `${member.joinedAt.toDateString()}`)
    .addField("دخوله للسيرفر", `${member.user.createdAt.toDateString()}`)
    .setTimestamp()
    .setFooter(member.user.username, member.user.avatarURL);
    message.channel.send({ embed: embed });
            }
  });


  client.on("message", message => {
    var prefix = "*";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "report-owner")) {
  let reportMember = message.guild.member(message.mentions.members.first());
  let reportReason = args.slice(1).join(" ");
   
  if (message.mentions.users.size === 0) {
    message.channel.send("**منشن الشخص المراد الابلاغ عليه** :x:")
    return;
  } else {
    if(!reportMember) {
        message.channel.send("**هذه الشخص غير موجود في السيرفر** :x:")
        return; }}
    
  if (reportMember.id == message.author.id) {
    message.channel.send("**لا يمكنك الابلاغ عن نفسك** :facepalm:")
    return; }
   
  if (args[1] === undefined) {
    message.channel.send("**ضع سبب الابلاغ** :x:")
    return; }
   
  message.guild.owner.send({embed:{
    fields: [{
        name: "ابلاغ جديد من سيرفر : " + message.guild.name + "!",
        value: "تفاصيل:\n\n**صاحب الأبلاغ:** " + message.author.username + "\n**قام بالأبلاغ عن ::** " + reportMember.user.username + "\n**السبب:** " + reportReason + "\n**الروم المرسل منه الأبلاغ:** " + message.channel
      }
    ],
    thumbnail: {
        url: reportMember.user.displayAvatarURL
    },
    timestamp: new Date(),
    color: 0xFF0000
  }}).catch(err => {
    message.author.send("A error occured sending your report to the server owner! Error: " + err)
    return;
  })
  message.channel.send("تم ارسال الأبلاغ بنجاح\n\nمعلومات عن الأبلاغ:\n  **قمت بالابلاغ عن :** " + reportMember.user.username + "\n  **السبب:** " + reportReason + "\n  **الروم الذي قمت بأرسال الابلاغ منه:** " + message.channel)
   
  }
  });


  var prefix = "*";
  client.on('message', message => {
           if (message.content === prefix + "dt") {
           if (!message.channel.guild) return message.reply('** This command only for servers **');  
           var currentTime = new Date(),
              hours = currentTime.getHours() + 4 ,
              hours2 = currentTime.getHours() + 3 ,
              hours3 = currentTime.getHours() + 2 ,
              hours4 = currentTime.getHours() + 3 ,
              minutes = currentTime.getMinutes(),
              seconds = currentTime.getSeconds(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
               var h = hours
    if(hours > 12) {
                 hours -= 12;
              } else if(hours == 0) {
                  hours = "12";
              }  
               if(hours2 > 12) {
                 hours2 -= 12;
              } else if(hours2 == 0) {
                  hours2 = "12";
               
              }  
  if(hours3 > 12) {
                 hours3 -= 12;
              } else if(hours3 == 0) {
                  hours3 = "12";
              } 
              if (minutes < 10) {
                  minutes = '0' + minutes;
              }
   
   
              var suffix = 'صباحاَ';
              if (hours >= 12) {
                  suffix = 'مساء';
                  hours = hours - 12;
              }
              if (hours == 0) {
                  hours = 12;
              }
    
   
                  var Date15= new Discord.RichEmbed()
                  .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                  .setTitle( "「التاريخ  والوقت」")
                  .setColor('RANDOM')
                  .setFooter(message.author.username, message.author.avatarURL)
                  .addField('الامارات',
                  "「"+ hours + ":" + minutes +":"+ seconds + "」")
                   .addField('مكه المكرمه',
                  "「"+ hours2 + ":" + minutes +":"+ seconds  + "」") 
                  .addField('مصر',
                  "「"+ hours3 + ":" + minutes +":"+ seconds  + "」") 
                   
                  .addField('Date',
                  "「"+ Day + "-" + Month + "-" + Year +  "」")
   
                   message.channel.sendEmbed(Date15);
          }
      });
   
                  client.on('message', message => {
                      var prefix = "*";
                       
                        if (!message.content.startsWith(prefix)) return;
                        var args = message.content.split(' ').slice(1);
                        var argresult = args.join(' ');
                        if (message.author.id == 410835593451405312) return;
                       
                
                       
                
                       
                      if (message.content.startsWith(prefix + 'setname')) {
                      if (message.author.id !== '411564557027508235') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                        client.user.setUsername(argresult).then
                            message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
                        return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
                      } else
                           
                      if (message.content.startsWith(prefix + 'setavatar')) {
                      if (message.author.id !== '411564557027508235') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
                      client.user.setAvatar(argresult);
                          message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
                      }
                       
                       });
client.on("message", message => {
if (message.content === "*help") {
message.react("✅")
message.react("😵")
                         const embed = new Discord.RichEmbed() 
                             .setColor("#ffff00")
                             .setDescription(`
 ══════════ஜ۩۞۩ஜ════════════
🌎「اوامر عامة」💎
                       
🌎!*server 「يعرض لك معلومات السيرفر」
 
🌎*id 「أمر الايدي」

🌎*per 「لمعرفة خصائص رتبتك」

🌎*mb 「لمعرفة حالة الاعضاء」 

🌎*member 「عدد وحالة اعضاء السيرفر」 
                        
🌎*report 「للابلاغ عن شخص」

ملاحظة:**يجب انشاء روم بأسم report لتلقي الابلاغات**

🌎*report-owner 「لأرسال ابلاغ لصاحب السيرفر」 

🌎*date 「لمعرفه التاريخ」

🌎*dt 「لمعرفة التاريخ والوقت لدولة مصر والسعودية والامارات」
                           
🌎*ping 「لمعرفه سرعه البوت」

🌎*emojis 「يعرض لك ايموجيات حقت السيرفر」

🌎*rooms 「لعرض عدد واسماء الرومات」

🌎*roles 「لعرض اسماءالرتب」

🌎*channel 「يعرض لك معلومات عن الروم」

🌎*embed 「خاصيه غرد لكن بغير طريقه」

🌎*say 「لي يكرر الكلام الذي تقوله」

🌎رابط
「لارسال رابط السيرفر على الخاص」

🌎*invites 「يعرض لك كم جبت اعضاء لهذة السيرفر」

🌎*invite-codes 「يرسل لك على الخاص جميع الروابط التي قمت بأنشائها لهذة السيرفر」

🌎*top 「يعرض لك جميع روابط دعوات التي تم انشائها مع عدد الاشخاص الي دخلو من الرابط」

🎴*avatar 「لي عرض صورتك او صوره اي شخص」

🎴*image 「لي عرض صوره السيرفر」

══════════ஜ۩۞۩ஜ════════════   
                         
                          `)
                           
                           
message.author.send({ embed: embed });
                           
}
}); 
                        

  client.login(process.env.BOT_TOKEN);

  
