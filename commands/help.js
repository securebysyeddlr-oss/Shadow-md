const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
✦ ───── ⋆⋅♡⋅⋆ ───── ✦
      ♡̷  *${settings.botName || 'DEX-MD'}*  ♡̷
   Version ✦ *${settings.version || '3.0.0'}*
   Owner ✦ ${settings.botOwner || 'Mr Shyam Hacker'}
   YT ✦ ${global.ytch || 'https://youtube.com/@...'}
✦ ───── ⋆⋅♡⋅⋆ ───── ✦

           ♡ DEX MENU ♡
         ⋆⋅✦⋅⋆⋅♡⋅⋆⋅✦⋅⋆

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
          🌸 *General Commands* 🌸
├──────────────────────────────────┤
│  ♡ .help  /  .menu               │
│  ♡ .ping                         │
│  ♡ .alive                        │
│  ♡ .tts <text>                   │
│  ♡ .owner                        │
│  ♡ .joke                         │
│  ♡ .quote                        │
│  ♡ .fact                         │
│  ♡ .weather <city>               │
│  ♡ .news                         │
│  ♡ .attp <text>                  │
│  ♡ .lyrics <song>                │
│  ♡ .8ball <question>             │
│  ♡ .groupinfo                    │
│  ♡ .staff  /  .admins            │
│  ♡ .vv                           │
│  ♡ .trt <text> <lang>            │
│  ♡ .ss <link>                    │
│  ♡ .jid                          │
│  ♡ .url                          │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
          👑 *Admin Commands* 👑
├──────────────────────────────────┤
│  ♡ .ban @user                    │
│  ♡ .promote @user                │
│  ♡ .demote @user                 │
│  ♡ .mute <minutes>               │
│  ♡ .unmute                       │
│  ♡ .delete  /  .del              │
│  ♡ .kick @user                   │
│  ♡ .warnings @user               │
│  ♡ .warn @user                   │
│  ♡ .antilink                     │
│  ♡ .antibadword                  │
│  ♡ .clear                        │
│  ♡ .tag <message>                │
│  ♡ .tagall                       │
│  ♡ .tagnotadmin                  │
│  ♡ .hidetag <msg>                │
│  ♡ .chatbot                      │
│  ♡ .resetlink                    │
│  ♡ .antitag <on/off>             │
│  ♡ .welcome <on/off>             │
│  ♡ .goodbye <on/off>             │
│  ♡ .setgdesc <desc>              │
│  ♡ .setgname <name>              │
│  ♡ .setgpp (reply image)         │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
           💗 *Owner Commands* 💗
├──────────────────────────────────┤
│  ♡ .mode <public/private>        │
│  ♡ .clearsession                 │
│  ♡ .antidelete                   │
│  ♡ .cleartmp                     │
│  ♡ .update                       │
│  ♡ .settings                     │
│  ♡ .setpp (reply image)          │
│  ♡ .autoreact <on/off>           │
│  ♡ .autostatus <on/off>          │
│  ♡ .autostatus react <on/off>    │
│  ♡ .autotyping <on/off>          │
│  ♡ .autoread <on/off>            │
│  ♡ .anticall <on/off>            │
│  ♡ .pmblocker <on/off/status>    │
│  ♡ .pmblocker setmsg <text>      │
│  ♡ .setmention (reply msg)       │
│  ♡ .mention <on/off>             │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
       🎀 *Image / Sticker* 🎀
├──────────────────────────────────┤
│  ♡ .blur <image>                 │
│  ♡ .simage (reply sticker)       │
│  ♡ .sticker (reply image)        │
│  ♡ .removebg                     │
│  ♡ .remini                       │
│  ♡ .crop (reply image)           │
│  ♡ .tgsticker <link>             │
│  ♡ .meme                         │
│  ♡ .take <packname>              │
│  ♡ .emojimix <emoji1>+<emoji2>   │
│  ♡ .igs <insta link>             │
│  ♡ .igsc <insta link>            │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
          🖤 *Pies Commands* 🖤
├──────────────────────────────────┤
│  ♡ .pies <country>               │
│  ♡ .china                        │
│  ♡ .indonesia                    │
│  ♡ .japan                        │
│  ♡ .korea                        │
│  ♡ .hijab                        │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
           🎮 *Games* 🎮
├──────────────────────────────────┤
│  ♡ .tictactoe @user              │
│  ♡ .hangman                      │
│  ♡ .guess <letter>               │
│  ♡ .trivia                       │
│  ♡ .answer <answer>              │
│  ♡ .truth                        │
│  ♡ .dare                         │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
           🤍 *AI Commands* 🤍
├──────────────────────────────────┤
│  ♡ .gpt <question>               │
│  ♡ .gemini <question>            │
│  ♡ .imagine <prompt>             │
│  ♡ .flux <prompt>                │
│  ♡ .sora <prompt>                │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
           💕 *Fun Commands* 💕
├──────────────────────────────────┤
│  ♡ .compliment @user             │
│  ♡ .insult @user                 │
│  ♡ .flirt                        │
│  ♡ .shayari                      │
│  ♡ .goodnight                    │
│  ♡ .roseday                      │
│  ♡ .character @user              │
│  ♡ .wasted @user                 │
│  ♡ .ship @user                   │
│  ♡ .simp @user                   │
│  ♡ .stupid @user [text]          │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
        💗 *Textmaker* 💗
├──────────────────────────────────┤
│  ♡ .metallic <text>              │
│  ♡ .ice <text>                   │
│  ♡ .snow <text>                  │
│  ♡ .impressive <text>            │
│  ♡ .matrix <text>                │
│  ♡ .light <text>                 │
│  ♡ .neon <text>                  │
│  ♡ .devil <text>                 │
│  ♡ .purple <text>                │
│  ♡ .thunder <text>               │
│  ♡ .leaves <text>                │
│  ♡ .1917 <text>                  │
│  ♡ .arena <text>                 │
│  ♡ .hacker <text>                │
│  ♡ .sand <text>                  │
│  ♡ .blackpink <text>             │
│  ♡ .glitch <text>                │
│  ♡ .fire <text>                  │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
       📥 *Downloader* 📥
├──────────────────────────────────┤
│  ♡ .play <song name>             │
│  ♡ .song <song name>             │
│  ♡ .spotify <query>              │
│  ♡ .instagram <link>             │
│  ♡ .facebook <link>              │
│  ♡ .tiktok <link>                │
│  ♡ .video <song name>            │
│  ♡ .ytmp4 <link>                 │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
         🖤 *MISC / Edits* 🖤
├──────────────────────────────────┤
│  ♡ .heart    ♡ .horny            │
│  ♡ .circle   ♡ .lgbt             │
│  ♡ .lolice   ♡ .its-so-stupid    │
│  ♡ .namecard ♡ .oogway           │
│  ♡ .tweet    ♡ .ytcomment        │
│  ♡ .comrade  ♡ .gay              │
│  ♡ .glass    ♡ .jail             │
│  ♡ .passed   ♡ .triggered        │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
         🫶 *Anime Actions* 🫶
├──────────────────────────────────┤
│  ♡ .nom    ♡ .poke               │
│  ♡ .cry    ♡ .kiss               │
│  ♡ .pat    ♡ .hug                │
│  ♡ .wink   ♡ .facepalm           │
╰─────── ⋆⋅♡⋅⋆ ───────╯

╭─────── ⋆⋅♡ BLACKPINK ⋅⋆ ───────╮
         💿 *Github / Script* 💿
├──────────────────────────────────┤
│  ♡ .git     ♡ .github            │
│  ♡ .sc      ♡ .script            │
│  ♡ .repo                         │
╰─────── ⋆⋅♡⋅⋆ ───────╯

✦ ───── ⋆⋅♡⋅⋆ ───── ✦
       Join our channel for updates!
       https://whatsapp.com/channel/0029VbBgXTsKwqSKZKy38w2o
✦ ───── ⋆⋅♡⋅⋆ ───── ✦`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363406449026172@newsletter',
                        newsletterName: 'DEX-BOT-MD',
                        serverMessageId: -1
                    }
                }
            }, { quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363406449026172@newsletter',
                        newsletterName: 'Dex-bot by Mr Shyam Hacker',
                        serverMessageId: -1
                    } 
                }
            }, { quoted: message });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { 
            text: helpMessage 
        }, { quoted: message });
    }
}

module.exports = helpCommand;
