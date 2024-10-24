const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=mmA3hA6D#uo_t8oJ_dpLSJrAgx2n2XFX6kvXjBAyNl_5GiUZfGy0",
MONGODB: process.env.MONGODB || "mongodb+srv://vimashasathsarani541:<db_password>@cluster0.tum08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
