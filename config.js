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
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://botty_yfw4_user:aldZVqy0DNKAC8ZnVfR4m1n1PTZJkxLV@dpg-coom4ru3e1ms73b8gglg-a.oregon-postgres.render.com/botty_yfw4"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_51_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgyLFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDksXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDAsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIyLFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY09kL05yZmFreVE1QUw4VHFOTlVmNEZ0bTdVaTJBREN3S3dITzkvd0ozdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN29iUy15N1dROUtZRUNjRXlZLWdqZ1wiLFxuICBcInBob25lSWRcIjogXCIyMDA5MzRjNi0zMGZlLTRjMzYtYWFhMy01NDRiMzg4YzkzYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTQwLFxuICAgICAgNCxcbiAgICAgIDY5LFxuICAgICAgOTQsXG4gICAgICA3NixcbiAgICAgIDcxLFxuICAgICAgMzksXG4gICAgICAyNDcsXG4gICAgICAxNTEsXG4gICAgICAyMSxcbiAgICAgIDc1LFxuICAgICAgMjI0LFxuICAgICAgNDIsXG4gICAgICA0MCxcbiAgICAgIDE1MixcbiAgICAgIDE2MCxcbiAgICAgIDI0MixcbiAgICAgIDg3LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDkxLFxuICAgICAgMjIxLFxuICAgICAgNDMsXG4gICAgICAxNTMsXG4gICAgICAxOCxcbiAgICAgIDg4LFxuICAgICAgMTMyLFxuICAgICAgNyxcbiAgICAgIDExOCxcbiAgICAgIDE3NSxcbiAgICAgIDEyMyxcbiAgICAgIDAsXG4gICAgICAyMzUsXG4gICAgICAxODcsXG4gICAgICAxOSxcbiAgICAgIDE4MSxcbiAgICAgIDE1OSxcbiAgICAgIDE5NixcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05mTzZvNEZFTVhQeGJFR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL0FVZ1p3Z0tUbVpuUmtBd3NIRzdnZDBwcDc3azdUdWVKalRBZDdzNFBRRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaeGFEdEE4KzkxS0g3SW8zbGZRcUJsTi9WdzQ4aWhZN1F5ZzJsK00yNVJRaHhyeXZtNHlRQ3VRaGpma1JRZER2cTdTMTlzb3VwM1Y4NjFpRGZiWlhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZbUgyUktIL2owNmxhL29tQWxsczUwcWs0TjNuVklxMEc3ZEhyaDFKU2ZuMFNyQzM1WGtZRnZUWlFUWUVvZ1RlTzBLb2EvSE5BaURydUdJWnh5Zzhodz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MTQzNTcyNjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTA4MTkwMjI2NTE1ODc6MzVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQnJpYW7imaRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MTQzNTcyNjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDUxMzg2NFxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.6",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
