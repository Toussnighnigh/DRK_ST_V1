//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "darksten4@gmail.com";
global.location = "America,Port-au-Prince.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://sten_4ldx_user:9o1M5XMhT9FutGJ7gN1S90S39i9C0pQQ@dpg-cqr69ng8fa8c73foguig-a.oregon-postgres.render.com/sten_4ldx";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Dark-S-TEN/DRK_ST_V1/tree/main";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/101bf22f101df83c4adbf.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9Sb2xZa09PUVZFN0FzbDdTenlhdE5CZm84WnJsY0V3L0VtdHFudjIxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRG4xSXQ2NDViNDMycUI1aEt2RVJ4OGRLc0VIYkpqUlFybkpOZjkrK3lYMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTmlFVUZ3TGc3K3hsUm1kNHhhN0FMSVNjaUh4TXpDemNySDNlYUtMRUZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFbXNuKzl1QkhwaXB3eFRZcEI4c3hnOXNkUWtNbTl5SkdCQStJMURLeTBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMaFcxVFN4cGRkUkZqL2xRQS9YRm5EU0pjdHEvck1LVXB2bnVGY3A0M1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjdmh5a1pza1Ziam1UYTZDZzVRTGpIQ2ZYWHFLc0NLZUJ2d3FId0wwRGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUo4RkRpRU5pa2dGeUlDbWJnd0lxUEYvNm1oK2M1di9UM2czR2tBSU5Fbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDNuSERuMVM2UFd1TFM5cFBzSHB0dXRDMnlBdHl4cG9pbWs4Y2VrT1VGWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZiMlVBWlJlSVNQQktQc3F5dE9DYWRXUTBWdlc1ekNRQUF3aGZYZDloTUNBcVhMb2s4Ui9SY2hBWXdkRVdTWXFZWitZUkhtTEdVQVRHTUlsS1FMMmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6IjF6S1gwcHEzbzlZMjdBNGQwL1psTE5uMWxLTTcrdmdrdzcybFRNdzJkc0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5MzE5MTQxODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjBCQzc2NzFCRjMwQjM5ODhERTc4NzVCQjE1NEYzRUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDE4MTI2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5MzE5MTQxODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUE0MzhENTFBRTg0RUFBM0YzRkFGOEJGRDYzQTdFNEMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDE4MTI2Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNHB0N1h6NTZTUGlRZ1RsWkJsaG5xUSIsInBob25lSWQiOiI5ZGZlMWM3MC1iYzJiLTQ1MWYtOGIyNy1iNTk1OGM5NTVlMGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTVRTURNUjQzZ2c2NnlZVSs3dCtsK2c2UkVFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRPWG9aQ1V6YU94YmxORFh5TzVRbXU1K3VOOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZNlY3OFQyTiIsIm1lIjp7ImlkIjoiNTA5MzE5MTQxODk6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUT1VTU05JR0gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BicDIrTUVFSVBXazdZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjN1em9BZzN3RGdjamhkejdCdWlIQnRUNnFGSFVtS2VBU05SZFBoOXVaM0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktnYjV4MG8za0JTMUlGM1BDOG5iMlplQjNMVzNtVjVmbi9xM2FwZE11L2ZmN1dzUVIwcjlSU0U1NHNiNWpCeTN3UXlpZnRDUXU0a0tHejAxK28zTEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMd0JFT2t2S1d1SG44eElhUlcyQ040OHltWkNUSHdxL0xHQU9DM29MNFlaYW5ORWhLM01mQkZrVklCVVVvaUh3ZjMwNDFxN0ZaS3pwM08zclZxbE9odz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTMxOTE0MTg5OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDdzNkFJTjhBNEhJNFhjK3dib2h3YlUrcWhSMUppbmdFalVYVDRmYm1keSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDE4MTI2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFTnYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in DRK_ST_Tech| enjoy your time| this is DRK_ST_V1",
  author: process.env.PACK_AUTHER || "TOUSSNIGH",
  packname: process.env.PACK_NAME || "👹",
  botname: process.env.BOT_NAME || "DRK_ST_V1",
  ownername: process.env.OWNER_NAME || "TOUSSNIGH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FRECYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
