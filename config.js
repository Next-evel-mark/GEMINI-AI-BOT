const fs = require('fs-extra');
if (fs.existsSync('.env'))
  require('dotenv').config({ path: __dirname + '/.env' });
const path = require("path");

module.exports = { 
    SESSION_ID: process.env.SESSION_ID || '',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝙼𝙰𝚁𝙺 𝚃𝙴𝙲𝙷",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "",  // put only one number
    SUDO_NUMBERS : process.env.SUDO_NUMBERS || "", // can be multiple numbers separated by commas
    BOT_NAME : process.env.BOT_NAME || '𝙶𝙴𝙼𝙸𝙽𝙸-𝙰𝙸-𝙱𝙾𝚃',
    FOOTER : process.env.FOOTER || '𝙼𝙰𝙳𝙴 𝚆𝙸𝚃𝙷 ❣️',
    CAPTION : process.env.CAPTION || '©2025 𝙶𝙴𝙼𝙸𝙽𝙸-𝙰𝙸-𝙱𝙾𝚃 𝚅 0.0.1',
    VERSION: process.env.VERSION || '0.0.1',
    BOT_PIC : process.env.BOT_PIC || 'https://files.catbox.moe/ca4z8w.jpg',            
    MODE: process.env.MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'false',
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi",
    DM_PRESENCE : process.env.DM_PRESENCE || 'online', // recording/typing/online/offline
    GC_PRESENCE : process.env.GC_PRESENCE || 'online', // recording/typing/online/offline
    CHATBOT : process.env.CHATBOT || 'false', // can be true/audio/false   
    CHATBOT_MODE : process.env.CHATBOT_MODE || 'inbox', // can be inbox/groups/allchats
    STARTING_MESSAGE : process.env.STARTING_MESSAGE || "true",
    ANTIDELETE : process.env.ANTIDELETE || 'indm', // inchat/indm/false
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'false',
    ANTICALL : process.env.ANTICALL || 'false', // (decline/true)/block/false
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'false',
    ANTILINK : process.env.ANTILINK || 'false', // or delete or kick or true
    AUTO_LIKE_STATUS : process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || 'true',
    STATUS_LIKE_EMOJIS : process.env.STATUS_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",   
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT || "*sᴛᴀᴛᴜs ᴠɪᴇᴡᴇᴅ ʙʏ ɢᴇᴍɪɴɪ*",             
    AUTO_REACT : process.env.AUTO_REACT || 'false',
    AUTO_REPLY : process.env.AUTO_REPLY || 'false',
    AUTO_READ_MESSAGES : process.env.AUTO_READ_MESSAGES || 'false', // true/commands/false
    AUTO_BIO : process.env.AUTO_BIO || 'false',
    AUTO_BLOCK: process.env.AUTO_BLOCK || '212,233',
    YT: process.env.YT || 'youtube.com/@giftedtechnexus',
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363408839929349@newsletter',
    NEWSLETTER_URL: process.env.NEWSLETTER_URL || 'https://whatsapp.com/channel/0029Vb3hlgX5kg7G0nFggl0Y',
    BOT_REPO: process.env.BOT_REPO || 'mauricegift/gifted-md',
    PACK_NAME: process.env.PACK_NAME || '𝙶𝙴𝙼𝙸𝙽𝙸 𝙰𝙸',
    PACK_AUTHOR: process.env.PACK_AUTHOR || '𝙼𝙰𝚁𝙺 𝚃𝙴𝙲𝙷'
};

let fileName = require.resolve(__filename);
fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);
    console.log(`Writing File: ${__filename}`);
    delete require.cache[fileName];
    require(fileName);
});
