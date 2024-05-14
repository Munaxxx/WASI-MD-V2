//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/IsLtsl3.jpeg";
global.devs = "2348060585869";
global.sudo = process.env.SUDO || "2348060585869,918590822912";
global.owner = process.env.OWNER_NUMBER || "2348060585869";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFRYmN1MnNNY1VhdW1BeGZlV2ZoZXNUeGZGbGo2d3NNbTNqRDJ3Y1ozRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjJtWVhlV1c3OC9TVmVJSjdpdktJazVtY2ljVUF0eldzQ2dDU3ErS2NrRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxT2xCS3dhTXpEQTRpODBUL0VWUFJuY3kxQjN3Y0dTMG1PMHdKakJBUEh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSjl4eS90ZExDdjA4bTlWMnZhL2ZXYkJMdEhmNzNWek5JLzljRC84K1NNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFBNDl6TVhVbVZkcVBoVE5HL0h6R1FBMVk2RTd4dGdBYnlRTFRPSjNQMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DbnM0WlgwWkM1d0FJWEpEZmlYS1JTNzFnbVp3eFZtRUhZRmZ2MXJ3ekk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0MrT3dvZGlHRTU1S1VUY05MaUZtc2ZVdmtJbkFNOFNHYUJlM2ZQNjkxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWxST21PY3llZXpqekQxU3c3T2g0N3p1cFA3Rzhxa1JjZEJxamR2SFhDQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV4OSt6UHY4c2ROS1BjOTc2ckRoL0tLaUtwblVqVkpBMmU3WTlzOEowRnJXcmxZYjBqNzJwUDBRSTNoK1VzeW9VTUpIeUNnVDRCTjBCcEpZNUU4eGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6ImJPWmYvTFRlRmtub3ZBZEJ4MFRuM3FHdnpYUXNuVWxOdm5pRW5pMnlLVTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJNcnlfTm14VGM2QkhJbFBBcExpU2ciLCJwaG9uZUlkIjoiYWNkNzkyNjQtMGQzZC00NTM1LTkxZmQtYTNjZjU2ZGE2MzU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB0VWxSam4xQmRzVmNYaFBOdk5NS3ByM1VPWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRU1IUmFYVzRSNzRLVjZxU2pTeVR6dS9TSGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUVQTkZIWFIiLCJtZSI6eyJpZCI6IjIzNDgwNjA1ODU4Njk6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoixKsuYW0gIOG0iiDhtI8gICAgIOG0iuG0jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSytmaDQwR0VQUFppN0lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR0Zqd1N0c0RkMFJzcW15L0FkOGtkeHhNMUV1REZIMjFKc1YvRFZ4NW56QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVVNYSmVVTDhXMzBrbTM5MjZoMWlnQXd0SGJDenJoTm9KSDhldWhhcE4yZ1hZMzRvSEZZTzAvR1UxYzhyVWIrVjBreWl5NVNYVG1MOGx2aSt3WFhKQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImZtOE5ISjdkUFovc2ExaWVqRHFvbTJPRWFZWXNKRUxja3hHTDVodEd5VU04cGx1cUI3QUJMWGE3MTZFcDhtWFk2a0hjMkhKaUJQS1ZuVVRMRlVzS2l3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2MDU4NTg2OToyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSaFk4RXJiQTNkRWJLcHN2d0hmSkhjY1ROUkxneFI5dFNiRmZ3MWNlWjh3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NjYyMDc5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1OciJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-ᴊ ᴏ ᴊᴏ",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "☠️",
  botname: process.env.BOT_NAME || "𝑗𝑜-𝐽𝑂",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "2348060585869",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
