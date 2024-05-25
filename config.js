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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_23_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLVS81YjZpNmg3aG5EK3RkVTcwR2Y1M0p1TUppU2hoQlRuY0VvMjhhcHI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwNVQ0cWZIUVR6Q21QcUJORlRiUXZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZkMmQ5NzUyLTI2NmUtNDQ4MC05ZTk2LTNkNzk4MWU4YTRmNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDIwNCxcbiAgICAgIDkyLFxuICAgICAgNzMsXG4gICAgICAxMjcsXG4gICAgICAxMDksXG4gICAgICAxMzcsXG4gICAgICAyMDUsXG4gICAgICA3MSxcbiAgICAgIDE2MSxcbiAgICAgIDQyLFxuICAgICAgNTksXG4gICAgICAxOTAsXG4gICAgICA5NixcbiAgICAgIDE2LFxuICAgICAgMTY3LFxuICAgICAgMTk5LFxuICAgICAgMTgxLFxuICAgICAgMTI0LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAxOTcsXG4gICAgICAyMjcsXG4gICAgICA5LFxuICAgICAgMjE2LFxuICAgICAgODUsXG4gICAgICAxMjIsXG4gICAgICAyMTUsXG4gICAgICA1NixcbiAgICAgIDI0MyxcbiAgICAgIDEzMCxcbiAgICAgIDI1LFxuICAgICAgMTEyLFxuICAgICAgMjMxLFxuICAgICAgMjMxLFxuICAgICAgMTIyLFxuICAgICAgMTYsXG4gICAgICA0NixcbiAgICAgIDIyMSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjNPNm80RkVPNkh4cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvQVVnWndnS1RtWm5Sa0F3c0hHN2dkMHBwNzdrN1R1ZUpqVEFkN3M0UFFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBkeWp1czZKMEFDb1l3TjZFUUNhWm81VkJ3SDFCVmlVWk1UUjMyYjdlUGdnTzJDUTBxYzVveFdqOWJmUHVIYWNWSllRWTJUcFFkNmczZkNpWUMxVURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInF1SVd1TWtxWi9XSExPUDM2blh0RE9EYzQ3TWkyNkxBMFNrTlhEQnErZGdRQ1BDcFpsN2lONjF2U3dXOEZtMGwrZmpKSk12djFHdCtMczVPZ2VQSkRRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQxNDM1NzI2OjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDgxOTAyMjY1MTU4Nzo1MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MTQzNTcyNjo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjYxODIyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZYaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlhnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWDdOeVNkckNMaDl4dzBVMXFINXRXbkd5d0FIQnZoYktzNHhaSHpuQWVXOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzczMjg0MTg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE2MTM5MjQ3MDQ3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlhoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQU4vT3pMa0dkVmREQW9RSVQxMGRuLzl0Ym5JNXdodnQybzEzUXFEQlVyQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzczMjg0MTg3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGWGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0M2VPMnczOG00Uzg2TVdEdmhIYTc3N1Q3V1ZIM2ZIWGRQQW5UUlZQeFY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzMyODQxODcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjM5Mzk3MzIzOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZYai5qc29uIjogIntcImtleURhdGFcIjpcIk84eEV0KytEVzUySTN0MWpHU1lwYXRpeXpXdzZNK1lUYllXS1c0djEvWEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MzI4NDE4NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlhrLmpzb24iOiAie1wia2V5RGF0YVwiOlwibVl1OEZIS3ZZQnZzUW1uTm5VQkM1c1FjYmNyMVdzMUIwN0k3Ny8xUG9JOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzczMjg0MTg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY2MTU1ODUwNzhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGWGwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTTmtaaW81MTJIdDdsaUg3V0dXdjRxOEVLa2FXTmo2OURnTW5aanJMQ3lZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzMyODQxODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY2MTgyMDM3NjZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGWG0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJFMDR5M0NUWXdmTFdnMEZuLzFZMzEvS21TSm5rWEtFY1pkMlpDMzhmZVl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzMyODQxODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY2MTgyMjQzNTlcIn0iCn0="
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
