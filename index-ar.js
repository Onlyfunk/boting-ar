require('dotenv').config();  // Charge les variables d'environnement à partir du fichier .env

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log('IMPERIUM ARCHIVES FONCTIONNEL');
});

client.login(process.env.TOKEN);  // Utilise le token depuis le fichier .env
