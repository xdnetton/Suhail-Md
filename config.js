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
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://koyeb-adm:w9kva5enTzur@ep-small-union-a2j94m1b.eu-central-1.pg.koyeb.app/koyebdb"

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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_35_05_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWlhGS2NLZHRNQjNnVTlVZlczaldjMXVSS203TFY2U2hmajZxcExWSmlvRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV1pxUGFvMDVSckdTM1VpZDAxUHI1UVwiLFxuICBcInBob25lSWRcIjogXCJkMjQ1ZjlhOS00ZTcwLTRiNWMtYWZmMC1jNWZiMDQ4ODUyNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTEwLFxuICAgICAgMjgsXG4gICAgICAyLFxuICAgICAgMCxcbiAgICAgIDEwNyxcbiAgICAgIDI0OSxcbiAgICAgIDE1MCxcbiAgICAgIDIwOCxcbiAgICAgIDM2LFxuICAgICAgMjMxLFxuICAgICAgMjMzLFxuICAgICAgMTAwLFxuICAgICAgMTg2LFxuICAgICAgOTgsXG4gICAgICA0MixcbiAgICAgIDEyMSxcbiAgICAgIDU1LFxuICAgICAgMjQsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMjExLFxuICAgICAgMTcyLFxuICAgICAgMTEyLFxuICAgICAgMTM1LFxuICAgICAgMTYxLFxuICAgICAgMTUzLFxuICAgICAgMTY0LFxuICAgICAgMTcsXG4gICAgICAyNTQsXG4gICAgICA1MSxcbiAgICAgIDEyNCxcbiAgICAgIDIxMixcbiAgICAgIDIxMSxcbiAgICAgIDE4OSxcbiAgICAgIDExNSxcbiAgICAgIDM4LFxuICAgICAgMjA4LFxuICAgICAgMTkwLFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOdk82bzRGRU9Id3FMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9BVWdad2dLVG1ablJrQXdzSEc3Z2QwcHA3N2s3VHVlSmpUQWQ3czRQUUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOFpaaThZWnk5alRDOE1tY2dtQURhc3VJODdnQTI4amNaRUp6dE1uOGcwenRxWWVVQ2Z4cFpWVklnRUZ2YTRGZVU4WGE3NkozYlg2ZkU0dG1nbzdtQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMDVlOGZXRlNpUmJucUlUV3MrR0xhVFdGWFBpR3hISDIxYVJBdXhHM1d5REoyYWYvRi9US050S25GV1p3Z0cwbjJpc21Pb1hYdkJCblhNUXNUbENlRFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDE0MzU3MjY6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwODE5MDIyNjUxNTg3OjQ4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQxNDM1NzI2OjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MTQwMTM0XG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
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
