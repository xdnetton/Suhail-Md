const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_22_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNCxcbiAgICAgICAgODIsXG4gICAgICAgIDI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDk0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICA3NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcImE1blVUMkxnSWFYcHgraTk3MUVqMlorTjloRTUwMjZ3enoxaXdZdkNLdFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQxNDM1NzI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NUIxRENGQkEzRTE0NUJFODgyQ0RCMUQ3NDJGNkQ0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4Nzg1MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXBVTEIycFVRQ3FmTW5YNDlBZUFBZ1wiLFxuICBcInBob25lSWRcIjogXCI4YmUwMmI5Zi1kMzQzLTRiNzYtOTJkNy1mY2YyYzQzMzkzZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMjUyLFxuICAgICAgMjYsXG4gICAgICAyNTIsXG4gICAgICA2MixcbiAgICAgIDczLFxuICAgICAgMzAsXG4gICAgICA2MCxcbiAgICAgIDIyMSxcbiAgICAgIDQyLFxuICAgICAgMTIwLFxuICAgICAgODYsXG4gICAgICAxNjcsXG4gICAgICAxNDcsXG4gICAgICA0MixcbiAgICAgIDE5MixcbiAgICAgIDI0OSxcbiAgICAgIDEyMCxcbiAgICAgIDE4NyxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDE0OCxcbiAgICAgIDE4MyxcbiAgICAgIDg0LFxuICAgICAgNzgsXG4gICAgICAxNDYsXG4gICAgICAyMjksXG4gICAgICAxMzAsXG4gICAgICAyNDksXG4gICAgICAyMSxcbiAgICAgIDIzOCxcbiAgICAgIDE4NyxcbiAgICAgIDExNyxcbiAgICAgIDEyOCxcbiAgICAgIDIwNyxcbiAgICAgIDkzLFxuICAgICAgMjUzLFxuICAgICAgMjQ2LFxuICAgICAgMTk0LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR0U2VlhHWVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MTQzNTcyNjo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4MTkwMjI2NTE1ODc6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXJJK09FREVLMlV4TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvQno1QWRUV2lISVZzQW1ubUxrc0k5SVNNL2xBUXRoQk9uUDUwa0NSbGxRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklGL1liNTdkYXY5M09UdDAzOEdDL25NWUxyeGlsY3J5VVU0ZlVkNENYa1VMTnJIczBmeHN4RzFHWFl2c2d1UE1GSEFqQUU1Qzd5cGlLWkVGUGhocEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZFVStmOUlvUnhYTEtKTVRxZWVrVDZnekU2U1pVOTNjVFRha3VFTUJWeklRYlNqMHB2dGh5THFNaE9hNlltNFh1UGErZlFqYks0UnhtRi9FeitJSmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MTQzNTcyNjo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODc4NTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQTBzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBMHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrUks0NGI2ZWhlenFaYXJoQi9iZVkyWG9HVkd0T2FlYjZUUkhPMk9UNHhnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMTA3MDU0MTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjA4ODgyNjAxMFwifSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
