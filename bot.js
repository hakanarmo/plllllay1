const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const { Client, Util } = require('discord.js');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const stream = require('youtube-audio-stream')
const ypi = require('youtube-playlist-info');
const http2 = require('http2');
const yt_api_key = ("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const YouTube = require('simple-youtube-api');
const prefix = '1';
const discord_token = (process.env.BOT_TOKEN);
client.login(discord_token);

    var setGame = ['1play','By : ! JIMMY','Server : IG'];
    var i = -1;client.on('ready', function(){
    var ms = 60000 ;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
     client.user.setActivity(setGame[i],{type: 'WATCHING'});
    }, ms);
});

client.on('ready', () => {
client.user.setStatus("dnd");
});

var servers = ['351519476879196174','351519138566373386','','','','','','','','','','','','',''];
var queue = [];
var guilds = ['',''];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];


client.on('ready', () => {});
var download = function(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		console.log('content-type:', res.headers['content-type']);
		console.log('content-length:', res.headers['content-length']);

		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};

client.on('message', function(message) {
	const member = message.member;
	const mess = message.content.toLowerCase();
	const args = message.content.split(' ').slice(1).join(' ');

	if (mess.startsWith(prefix + 'play')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **Must BE at a voice channel**');
    		message.member.voiceChannel.join().then(message.react('▶️'));
		// if user is not insert the URL or song title
		if (args.length === 0) {
			let play_info = new Discord.RichEmbed()
				.setAuthor(client.user.username, client.user.avatarURL)
				.setFooter('request by : ' + message.author.tag)
				.setDescription('**Please enter a song name or Link**')
			message.channel.sendEmbed(play_info)
			return;
		}
		if (queue.length > 0 || isPlaying) {
			getID(args, function(id) {
				add_to_queue(id);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
						.setAuthor(message.author.username, message.author.avatarURL)
						.addField('⏯ تم اضافة الاغنية في قائمة التشغيل', `**${videoInfo.title}**`)
						.setColor("000000")
						.addField(`** **`, `By : ${message.author.username}`)
					  .setFooter("IG","https://a.top4top.net/p_90840sx01.png")
					  .setTimestamp()
						.setThumbnail(videoInfo.thumbnailUrl)
					message.channel.sendEmbed(play_info);
					queueNames.push(videoInfo.title);
					now_playing.push(videoInfo.title);

				});
			});
		}
		else {

			isPlaying = true;
			getID(args, function(id) {
				queue.push('placeholder');
				playMusic(id, message);
				fetchVideoInfo(id, function(err, videoInfo) {
					if (err) throw new Error(err);
					let play_info = new Discord.RichEmbed()
           .setAuthor(message.author.username, message.author.avatarURL)
						.addField('▶️ ** Playing **', `
                                               **${videoInfo.title}**`)
						.setColor("000000")
             
			.addField(`** **`, `By : ${message.author.username}`)
           .setFooter("IG","https://a.top4top.net/p_90840sx01.png")  
             .setTimestamp()
          
						.setThumbnail(videoInfo.thumbnailUrl)
							
					// .setDescription('?')
					message.channel.sendEmbed(play_info)
					// client.user.setGame(videoInfo.title,'https://www.twitch.tv/Abdulmohsen');
				});
			});
		}
	}
  
	else if (mess.startsWith(prefix + 'skip')) {
		if (!message.member.voiceChannel) return message.reply(':no_entry: || **يجب ان تكون في روم صوتي**');
    		message.member.voiceChannel.join().then(message.react('⏭'));
		message.channel.send(':ok:').then(() => {
			skip_song(message);
			var server = server === servers[message.guild.id];
			if (message.guild.voiceConnection) message.guild.voiceConnection.end();
		});
	}
	else if (message.content.startsWith(prefix + 'vol')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **يجب ان تكون في روم صوتي**');
     		message.member.voiceChannel.join().then(message.react('🔊'));
		// console.log(args)
		if (args > 100) return message.channel.send('1 - 100')
		if (args < 1) return message.channel.send('1 - 100')
		dispatcher.setVolume(1 * args / 50);
		message.channel.sendMessage(`** ${dispatcher.volume*50}%  volume **`);
	}
  
	
	else if (mess.startsWith(prefix + 'stop')) {
		if (!message.member.voiceChannel) return message.reply(':no_entry: || **يجب ان تكون في روم صوتي**');
		message.member.voiceChannel.join().then(message.react('🛑'));
		message.member.voiceChannel.join().then(message.channel.send(':ok:'));
		var server = server === servers[message.guild.id];
		if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
  }

	else if (mess.startsWith(prefix + 'ruseme')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **يجب ان تكون في روم صوتي**');
    				message.member.voiceChannel.join().then(message.react('⏯'));
			message.channel.send(':ok:').then(() => {
			dispatcher.resume();
		});
	}
		else if (mess.startsWith(prefix + 'pause')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **يجب ان تكون في روم صوتي**');
      		message.member.voiceChannel.join().then(message.react('⏸'));
		message.channel.send(':ok:').then(() => {
			dispatcher.pause();
		});
	}
	else if (mess.startsWith(prefix + 'join')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **يجب ان تكون في روم صوتي**');
     		message.member.voiceChannel.join().then(message.react('✅'));
		message.member.voiceChannel.join().then(message.channel.send(':ok:'));
	}

	else if (mess.startsWith(prefix + 'play')) {
		if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **يجب ان تكون في روم صوتي**');
     message.member.voiceChannel.join().then(message.react('▶️'));
		if (isPlaying === false) return message.channel.send(':anger: || **Stoped**');
		let playing_now_info = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.addField('Playing:', `**
				  ${videoInfo.title}
				  **`)
			.setColor("RANDOM")
			.setFooter('request By : ' + message.author.tag)
			.setThumbnail(videoInfo.thumbnailUrl)
		//.setDescription('?')
		message.channel.sendEmbed(playing_now_info);
	}
  
});

function skip_song(message) {
	if (!message.member.voiceChannel) return message.channel.send(':no_entry: || **يجب ان تكون في روم صوتي**');
	dispatcher.end();
}

function playMusic(id, message) {
	voiceChannel = message.member.voiceChannel;


	voiceChannel.join().then(function(connectoin) {
		let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
			filter: 'audioonly'
		});
		skipReq = 0;
		skippers = [];

		dispatcher = connectoin.playStream(stream);
		dispatcher.on('end', function() {
			skipReq = 0;
			skippers = [];
			queue.shift();
			queueNames.shift();
			if (queue.length === 0) {
				queue = [];
				queueNames = [];
				isPlaying = false;
			}
			else {
				setTimeout(function() {
					playMusic(queue[0], message);
				}, 500);
			}
		});
	});
}

function getID(str, cb) {
	if (isYoutube(str)) {
		cb(getYoutubeID(str));
	}
	else {
		search_video(str, function(id) {
			cb(id);
		});
	}
}

function add_to_queue(strID) {
	if (isYoutube(strID)) {
		queue.push(getYoutubeID(strID));
	}
	else {
		queue.push(strID);
	}
}

function search_video(query, cb) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        try {
        var json = JSON.parse(body);
        cb(json.items[0].id.videoId);
        } catch (e) {
    cb('EgqUJOudrcM');
    return;

    console.error(e);
            
        }
    });
}



function isYoutube(str) {
	return str.toLowerCase().indexOf('youtube.com') > -1;
}

client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '_help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
      .addField("**🎵 Music Commands | اومر الاغاني 🎵**","** **")
      .addField("**▶️ _play **","**لـ تشغيل الاغنية**")
	  .addField("**⏸ _stop **","**لـ ايقاف الاغنية**")
      .addField("**🔊 _vol **","**لـ تعلية الصوت او انخفاضه**")
	  .addField("**✅ _join **","**لـ ادخال البوت الي الروم**")
      .addField("**⏭ _skip **","**لـ تخطي اغنية**")
.setColor("000000")
.setFooter("IG","https://a.top4top.net/p_90840sx01.png")
.setTimestamp()	 
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '_help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:wrench: Programmer bot | مبرمج البوت :wrench: **",
		                                                                "**     @ ! HuNteR#6616**")

.setColor("000000")
.setFooter("IG","https://a.top4top.net/p_90840sx01.png")
.setTimestamp()	 
  message.author.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content === "_help") {
message.react("📩")
}
});

client.on('message', msg => {
  if (msg.content === '_help') {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');

  }
});
