const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log('By ! HuNteR');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);

});
LOka.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('      ~            ~  By : ! HuNteR ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  ! HuNteR " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);

        
    

});
var prefix = "-"

LOka.on('message', message => {
     if (message.content === "ig") {
                 if(!message.channel.guild) return;

             message.guild.setIcon(`https://e.top4top.net/p_887fbar51.png`)

}
});

LOka.on('message', message => {
     if (message.content === "ig") {
         LOka.guilds.forEach(m =>{
             m.setName(`! IG`)
})
}
});

LOka.on('message', message => {
     

     if (message.content === "ig") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "- IG ♕ | Owner | ♕",
        permissions :   [1],
        color : " #000000"
    }) 
        m.createRole({
        name : "- IG |「 Not Active 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Master 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 CO Owner 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Leader 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 CO Leader 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「General 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Manger 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Moderator 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Admin 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Moonlight 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Queen 」",
        permissions :   [1],
        color : " #000000"
    })
     m.createRole({
        name : "- IG |「 Ban 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Kick 」",
        permissions :   [1],
        color : " #000000"
    })

    m.createRole({
        name : "- IG |「 Clear 」",
        permissions :   [1],
        color : " #000000"
    }) 
    m.createRole({
        name : "- IG |「 Nickname 」",
        permissions :   [1],
        color : " #000000"
    })

    m.createRole({
        name : "- IG |「 ادارة 」",
        permissions :   [1],
        color : " #000000"
    }) 
    m.createRole({
        name : "- IG |「 GOLDEN VOICE 」",
        permissions :   [1],
        color : " #ffd400"
    })
    m.createRole({
        name : "- IG |「 YouTuber 」",
        permissions :   [1],
        color : " #000000"
    })
        m.createRole({
        name : "- IG |「 Friends 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 V.I.P 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Bot 」",
        permissions :   [1],
        color : " #cc0043"
    })
    m.createRole({
        name : "- IG |「 Music Bot 」",
        permissions :   [1],
        color : " #7e00d6"
    })
    m.createRole({
        name : "- IG |「 System 」",
        permissions :   [1],
        color : " #b600ce"
    })
    m.createRole({
        name : "- IG |「 مكافحة النشر 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Gamer 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 DJ 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "IG™",
        permissions :   [1],
        color : " #000000"
    })
     m.createRole({
        name : "- IG |「 مكافحة النشر 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Muted Voice 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Pictures 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Muted 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "- IG |「 Member 」",
        permissions :   [1],
        color : " #000000"
    })
   
})
 
 
}
});
LOka.on('message', message => {
         if (message.content === "ig") {
               LOka.guilds.forEach(m =>{
m.createChannel('chat', 'text');
m.createChannel('chat-gamer', 'text');
m.createChannel('chat-youtuber', 'text');
m.createChannel('im_gamer', 'text');
m.createChannel('rulse', 'text');
m.createChannel('color', 'text');
m.createChannel('pic', 'text');
m.createChannel('music', 'text');
m.createChannel('hunter', 'text');
m.createChannel('cut_tweet', 'text');

m.createChannel('feeling', 'text');

m.createChannel('bo7', 'text');

m.createChannel('staff', 'text');

m.createChannel('sra7a', 'text');
m.createChannel('vip', 'text');
m.createChannel('log-hunter', 'text');
m.createChannel('log', 'text');
m.createChannel('lo-5erok', 'text');
m.createChannel('roles', 'text');
m.createChannel('activation', 'text');
m.createChannel('report', 'text');
})
}
});

LOka.on('message', message => {
         if (message.content === "ig") {
                 LOka.guilds.forEach(m =>{
m.createChannel('☕ - | Café ❶', 'voice');
m.createChannel('☕ - | Café ❷', 'voice');
m.createChannel('☕ - | Café ❸', 'voice');
m.createChannel('IG - | Coffee', 'voice');
m.createChannel('IG - | Party', 'voice');
m.createChannel('IG - | Friends', 'voice');
m.createChannel('IG - | Friends', 'voice');
m.createChannel('IG - | Alone', 'voice');
m.createChannel('IG - | Single', 'voice');

m.createChannel('IG - | Lovers', 'voice');
m.createChannel('IG - | Lovers', 'voice');

m.createChannel('IG - | Paris', 'voice');
m.createChannel('IG - |「 Owner 」', 'voice');
m.createChannel('IG - |「 STAFF 」', 'voice');
m.createChannel('IG - |「 HuNteR 」', 'voice');
m.createChannel('🎧 - |  ♪♪♫ • MUSIC • ♫♪♪', 'voice');
m.createChannel('🎧 - |  ♪♪♫ • MUSIC • ♫♪♪', 'voice');
m.createChannel('🎧 - |  ♪♪♫ • MUSIC • ♫♪♪', 'voice');
m.createChannel('🎮 - | League of Legends', 'voice');
m.createChannel('🎮 - | Rules of Survival', 'voice');
m.createChannel('🎮 - | GTA V', 'voice');
m.createChannel('🎮 - | GTA IV', 'voice');
m.createChannel('🎮 - | CSGO', 'voice');

m.createChannel('🎮 - | Black Squad', 'voice');
m.createChannel('🎮 - | Miencraft', 'voice');
m.createChannel('🎮 - | Rust', 'voice');
m.createChannel('🎮 - | Roblox', 'voice');
m.createChannel('🎮 - | MTA SA', 'voice');
m.createChannel('🎬 - | Youtuber((❶))only', 'voice');
m.createChannel('🎬 - | Youtuber((❷))only', 'voice');
m.createChannel('🎬 - | Youtuber((❸))only', 'voice');

m.createChannel('💤 - | Dreaming', 'voice');
m.createChannel('🔐 - | Shady', 'voice');
m.createChannel('🕋 - | Quran | القران الكريم', 'voice');
m.createChannel('▬▬▬▬▬ ☕ Café ▬▬▬▬▬', 'voice');
m.createChannel('▬▬▬▬▬「 IG 」▬▬▬▬▬', 'voice');
m.createChannel('▬▬▬▬▬ 💀 STAFF ▬▬▬▬▬', 'voice');
m.createChannel('▬▬▬▬▬ 🎧 اغاني ▬▬▬▬▬', 'voice');
m.createChannel('▬▬▬▬▬▬ 🎮 العاب ▬▬▬▬▬', 'voice');
m.createChannel('▬▬▬▬▬ 🎬 اليوتيوبر ▬▬▬▬▬', 'voice');
m.createChannel('▬▬▬▬▬ 💤 AFK ▬▬▬▬▬', 'voice');
m.createChannel('▬▬▬▬ 🔐 الغرف الخاصة ▬▬▬▬', 'voice');
m.createChannel('▬▬▬▬▬ 🕋 قران ▬▬▬▬▬▬', 'voice');
m.createChannel('📝 - | text channels', 'voice');
})
}

});



client.login(process.env.BOT_TOKEN);
