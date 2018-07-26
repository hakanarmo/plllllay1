const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log('By : JIMMY');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);

});
LOka.on('ready',  () => {

console.log('~~~~~~~~~~~~~~~~~~ By : JIMMY ~~~~~~~~~~~~~~~~~~~~~~~~'); 

console.log(`Logged in as  * [ "  JIMMY " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);

        

});
var prefix = "-"

LOka.on('message', message => {
     if (message.content === "crpic") {
                 if(!message.channel.guild) return;

             message.guild.setIcon(`https://i.imgur.com/0sQIdPH.jpg`)

}
});

LOka.on('message', message => {
     if (message.content === "crname") {
         LOka.guilds.forEach(m =>{
             m.setName(`Wizmoo Fans`)
})
}
});

LOka.on('message', message => {
     

     if (message.content === "crrole") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "♕ | Owner | ♕",
        permissions :   [1],
        color : " #000000"
    }) 
        m.createRole({
        name : "「 Admin 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "「 Master 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "「 Moderator 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "「 Manager 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "「 Veterans 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "「 V.I.P 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "「 SuperBot 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "「 Bots 」",
        permissions :   [1],
        color : " #000000"
    })
        m.createRole({
        name : "「 Music Bot 」",
        permissions :   [1],
        color : " #7e00d6"
    })
    m.createRole({
        name : "「 Streamer 」",
        permissions :   [1],
        color : " #c052bb"
    })
	    m.createRole({
        name : "「 Muted Voice 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "「 Member 」",
        permissions :   [1],
        color : " #000000"
    })
    m.createRole({
        name : "1",
        permissions :   [1],
        color : " #fda3d3"
    })
     m.createRole({
        name : "2",
        permissions :   [1],
        color : " #f07bb8"
    })
    m.createRole({
        name : "3",
        permissions :   [1],
        color : " #dd66a4"
    })
     m.createRole({
        name : "4",
        permissions :   [1],
        color : " #cf5394"
    })
    m.createRole({
        name : "5",
        permissions :   [1],
        color : " #bb3f80"
    })
     m.createRole({
        name : "6",
        permissions :   [1],
        color : " #af2f72"
    })
     m.createRole({
        name : "7",
        permissions :   [1],
        color : " #a72268"
    })
     m.createRole({
        name : "8",
        permissions :   [1],
        color : " #9b175c"
    })
    m.createRole({
        name : "9",
        permissions :   [1],
        color : " #7e0745"
    })
     m.createRole({
        name : "10",
        permissions :   [1],
        color : " #5e0432"
    })
    m.createRole({
        name : "11",
        permissions :   [1],
        color : " #fca0a0"
    })
     m.createRole({
        name : "12",
        permissions :   [1],
        color : " #fa8b8b"
    })
       m.createRole({
        name : "13",
        permissions :   [1],
        color : " #ff7979"
    })
     m.createRole({
        name : "14",
        permissions :   [1],
        color : " #f86060"
    })
    m.createRole({
        name : "15",
        permissions :   [1],
        color : " #f74c4c"
    })
     m.createRole({
        name : "16",
        permissions :   [1],
        color : " #e63e3e"
    })
    m.createRole({
        name : "17",
        permissions :   [1],
        color : " #cf3131"
    })
     m.createRole({
        name : "18",
        permissions :   [1],
        color : " #b12424"
    })
     m.createRole({
        name : "19",
        permissions :   [1],
        color : " #9e1414"
    })
     m.createRole({
        name : "20",
        permissions :   [1],
        color : " #8a0808"
    })
    m.createRole({
        name : "21",
        permissions :   [1],
        color : " #f8dd85"
    })
     m.createRole({
        name : "22",
        permissions :   [1],
        color : " #eccd6a"
    })
    m.createRole({
        name : "23",
        permissions :   [1],
        color : " #dfbf59"
    })
     m.createRole({
        name : "24",
        permissions :   [1],
        color : " #c5a746"
    })
      m.createRole({
        name : "25",
        permissions :   [1],
        color : " #af9339"
    })
     m.createRole({
        name : "26",
        permissions :   [1],
        color : " #9c822e"
    })
    m.createRole({
        name : "27",
        permissions :   [1],
        color : " #816a21"
    })
     m.createRole({
        name : "28",
        permissions :   [1],
        color : " #6d5919"
    })
    m.createRole({
        name : "29",
        permissions :   [1],
        color : " #504112"
    })
     m.createRole({
        name : "30",
        permissions :   [1],
        color : " #f1fd88"
    })
     m.createRole({
        name : "31",
        permissions :   [1],
        color : " #e7f568"
    })
     m.createRole({
        name : "32",
        permissions :   [1],
        color : " #d3e05a"
    })
    m.createRole({
        name : "33",
        permissions :   [1],
        color : " #bdca45"
    })
     m.createRole({
        name : "34",
        permissions :   [1],
        color : " #a1ad31"
    })
    m.createRole({
        name : "35",
        permissions :   [1],
        color : " #8b9627"
    })
     m.createRole({
        name : "36",
        permissions :   [1],
        color : " #79831f"
    })
       m.createRole({
        name : "37",
        permissions :   [1],
        color : " #646d16"
    })
     m.createRole({
        name : "38",
        permissions :   [1],
        color : " #4f5710"
    })
    m.createRole({
        name : "39",
        permissions :   [1],
        color : " #3c4209"
    })
     m.createRole({
        name : "40",
        permissions :   [1],
        color : " #2b3004"
    })
    m.createRole({
        name : "41",
        permissions :   [1],
        color : " #b4fc99"
    })
     m.createRole({
        name : "42",
        permissions :   [1],
        color : " #9de780"
    })
     m.createRole({
        name : "43",
        permissions :   [1],
        color : " #8ac572"
    })
     m.createRole({
        name : "44",
        permissions :   [1],
        color : " #73b956"
    })
    m.createRole({
        name : "45",
        permissions :   [1],
        color : " #5f9e45"
    })
     m.createRole({
        name : "46",
        permissions :   [1],
        color : " #498132"
    })
    m.createRole({
        name : "47",
        permissions :   [1],
        color : " #376923"
    })
     m.createRole({
        name : "48",
        permissions :   [1],
        color : " #285218"
    })
     m.createRole({
        name : "49",
        permissions :   [1],
        color : " #1e460f"
    })
     m.createRole({
        name : "50",
        permissions :   [1],
        color : " #123306"
    })
    m.createRole({
        name : "51",
        permissions :   [1],
        color : " #a1fdce"
    })
     m.createRole({
        name : "52",
        permissions :   [1],
        color : " #8df0bd"
    })
    m.createRole({
        name : "53",
        permissions :   [1],
        color : " #72d8a4"
    })
     m.createRole({
        name : "54",
        permissions :   [1],
        color : " #61c592"
    })
     m.createRole({
        name : "55",
        permissions :   [1],
        color : " #50a379"
    })
     m.createRole({
        name : "56",
        permissions :   [1],
        color : " #3a8860"
    })
    m.createRole({
        name : "57",
        permissions :   [1],
        color : " #2a744e"
    })
     m.createRole({
        name : "58",
        permissions :   [1],
        color : " #1f6441"
    })
    m.createRole({
        name : "59",
        permissions :   [1],
        color : " #145032"
    })
     m.createRole({
        name : "60",
        permissions :   [1],
        color : " #0b3a23"
    })
       m.createRole({
        name : "61",
        permissions :   [1],
        color : " #83dae4"
    })
     m.createRole({
        name : "62",
        permissions :   [1],
        color : " #70c7d1"
    })
    m.createRole({
        name : "63",
        permissions :   [1],
        color : " #5eb3bd"
    })
     m.createRole({
        name : "64",
        permissions :   [1],
        color : " #44939c"
    })
    m.createRole({
        name : "65",
        permissions :   [1],
        color : " #327981"
    })
     m.createRole({
        name : "66",
        permissions :   [1],
        color : " #235e64"
    })
     m.createRole({
        name : "67",
        permissions :   [1],
        color : " #1b5055"
    })
     m.createRole({
        name : "68",
        permissions :   [1],
        color : " #134044"
    })
    m.createRole({
        name : "69",
        permissions :   [1],
        color : " #0c383b"
    })
     m.createRole({
        name : "70",
        permissions :   [1],
        color : " #062325"
    })
    m.createRole({
        name : "71",
        permissions :   [1],
        color : " #89abfa"
    })
     m.createRole({
        name : "72",
        permissions :   [1],
        color : " #7999e2"
    })
      m.createRole({
        name : "73",
        permissions :   [1],
        color : " #6c89ca"
    })
     m.createRole({
        name : "74",
        permissions :   [1],
        color : " #566fa8"
    })
    m.createRole({
        name : "75",
        permissions :   [1],
        color : " #485f92"
    })
     m.createRole({
        name : "76",
        permissions :   [1],
        color : " #3c507c"
    })
    m.createRole({
        name : "77",
        permissions :   [1],
        color : " #30436d"
    })
     m.createRole({
        name : "78",
        permissions :   [1],
        color : " #27375c"
    })
     m.createRole({
        name : "79",
        permissions :   [1],
        color : " #1e2e52"
    })
     m.createRole({
        name : "80",
        permissions :   [1],
        color : " #12203f"
    })
    m.createRole({
        name : "81",
        permissions :   [1],
        color : " #c2a4ff"
    })
     m.createRole({
        name : "82",
        permissions :   [1],
        color : " #b191f0"
    })
    m.createRole({
        name : "83",
        permissions :   [1],
        color : " #9979d8"
    })
     m.createRole({
        name : "84",
        permissions :   [1],
        color : " #7d5fb9"
    })
       m.createRole({
        name : "85",
        permissions :   [1],
        color : " #6f52a8"
    })
     m.createRole({
        name : "86",
        permissions :   [1],
        color : " #604692"
    })
    m.createRole({
        name : "87",
        permissions :   [1],
        color : " #4c3675"
    })
     m.createRole({
        name : "88",
        permissions :   [1],
        color : " #3c2a5c"
    })
    m.createRole({
        name : "89",
        permissions :   [1],
        color : " #312050"
    })
     m.createRole({
        name : "90",
        permissions :   [1],
        color : " #241541"
    })
     m.createRole({
        name : "91",
        permissions :   [1],
        color : " #d3a1fa"
    })
     m.createRole({
        name : "92",
        permissions :   [1],
        color : " #be86eb"
    })
    m.createRole({
        name : "93",
        permissions :   [1],
        color : " #a271ca"
    })
     m.createRole({
        name : "94",
        permissions :   [1],
        color : " #8e61b3"
    })
    m.createRole({
        name : "95",
        permissions :   [1],
        color : " #7d52a0"
    })
     m.createRole({
        name : "96",
        permissions :   [1],
        color : " #6a428a"
    })
     m.createRole({
        name : "97",
        permissions :   [1],
        color : " #5b3877"
    })
     m.createRole({
        name : "98",
        permissions :   [1],
        color : " #4c2f64"
    })
    m.createRole({
        name : "99",
        permissions :   [1],
        color : " #3f2555"
    })
     m.createRole({
        name : "100",
        permissions :   [1],
        color : " #301942"
    })
     m.createRole({
        name : "101",
        permissions :   [1],
        color : " #800080"
    })
     m.createRole({
        name : "102",
        permissions :   [1],
        color : " #ff00ff"
    })
    m.createRole({
        name : "103",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "104",
        permissions :   [1],
        color : " #a52a2a"
    })
    m.createRole({
        name : "105",
        permissions :   [1],
        color : " #808080"
    })
     m.createRole({
        name : "106",
        permissions :   [1],
        color : " #0000ff"
    })
     m.createRole({
        name : "107",
        permissions :   [1],
        color : " #ffa500"
    })
     m.createRole({
        name : "108",
        permissions :   [1],
        color : " #808000"
    })
    m.createRole({
        name : "109",
        permissions :   [1],
        color : " #00ffff"
    })
     m.createRole({
        name : "110",
        permissions :   [1],
        color : " #020202"
    })
         
})
 
 
}
});
LOka.on('message', message => {
         if (message.content === "crtext") {
               LOka.guilds.forEach(m =>{
m.createChannel('★│welcome', 'text');
m.createChannel('★│rules', 'text');
m.createChannel('★│live-stream', 'text');
m.createChannel('★│announcements', 'text');
m.createChannel('★│bot-spams', 'text');
m.createChannel('★│general', 'text');
m.createChannel('★│just-4-fun', 'text');
m.createChannel('★│gallery', 'text');
m.createChannel('★│video', 'text');
m.createChannel('★│music', 'text');
m.createChannel('★│vip', 'text');
m.createChannel('★│staff', 'text');
m.createChannel('★│logs', 'text');

})
}
});

LOka.on('message', message => {
         if (message.content === "crvoice") {
                 LOka.guilds.forEach(m =>{
m.createChannel('☕ Chill Out ❶', 'voice');
m.createChannel('☕ Chill Out ❷', 'voice');
m.createChannel('☕ Chill Out ❸', 'voice');
m.createChannel('▬▬▬▬▬▬▬▬▬▬', 'voice');
m.createChannel('「 Owner 」', 'voice');
m.createChannel('「 STAFF 」', 'voice');
m.createChannel('「 V.I.P 」', 'voice');
m.createChannel('▬▬▬▬▬▬▬▬▬▬', 'voice');
m.createChannel('🎬 - | Streamer Only', 'voice');
m.createChannel('▬▬▬▬▬▬▬▬▬▬', 'voice');
m.createChannel('🎧 MUSIC • ♫♪♪', 'voice');
m.createChannel('🎧 MUSIC • ♫♪♪', 'voice');
m.createChannel('🎧 MUSIC • ♫♪♪', 'voice');
m.createChannel('▬▬▬▬▬▬▬▬▬▬', 'voice');
m.createChannel('🎮 - | Black Desert', 'voice');
m.createChannel('🎮 - | League of Legends', 'voice');
m.createChannel('🎮 - | Blade & Soul', 'voice');
m.createChannel('🎮 - | Overwatch', 'voice');
m.createChannel('🎮 - | PUPG', 'voice');
m.createChannel('🎮 - | Fortnite', 'voice');
m.createChannel('🎮 - | CSGO', 'voice');
m.createChannel('▬▬▬▬▬▬▬▬▬▬', 'voice');
m.createChannel('💤 - | Away', 'voice');

})
}

});



LOka.login(process.env.BOT_TOKEN);
