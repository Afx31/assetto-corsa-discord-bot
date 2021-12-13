import {} from 'dotenv/config';
import { Client, Intents, MessageEmbed } from 'discord.js';
import fs from 'fs';
import table from 'table';
import { FormatCar, FormatTrack } from './reformatInput.js';
import { CalcLapTime } from './calcLapTime.js';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fileRead = fs.readFileSync('./race_out.json');
const jsonData = JSON.parse(fileRead);
const PREFIX = "!";

/*************************************** Player Stats *******************************************/
class PlayerInfo {
  constructor(name, car, number) {
    this.name = name;
    this.car = car;
    this.number = number;
  }
}

var player = jsonData.players;
var playerStats = new Array();

for (var i = 0; i < player.length; i++)
  // filter out 'ghost' players? They might have changed car during practice/ exited and rejoined, making it a new vehicle?
  if (player[i].name != '')
    playerStats.push(new PlayerInfo(player[i].name, player[i].car, i));

/*************************************** Race Session *******************************************/
var session = jsonData.sessions;
var raceSession, raceLeaderboard, raceResults = [];

for (var i = 0; i < session.length; i ++) {
  if (session[i].name == "Race")   {
    raceSession = session[i].bestLaps;
    raceLeaderboard = session[i].raceResult;
  } 
}

for (var i = 0; i < raceLeaderboard.length; i++)
  for (var j = 0; j < raceSession.length; j++)
    if (raceLeaderboard[i] === raceSession[j].car) 
      raceResults.push(raceSession[j])

/************************************ Buidling table data ***************************************/
var tableData = [['#', 'Driver', 'Car', 'Fastest Lap']];

for (var i = 0; i < raceResults.length; i++) {
  for (var j = 0; j < playerStats.length; j++) {    
    if (raceResults[i].car === playerStats[j].number) {
      var name = playerStats[j].name;
      var car = FormatCar(playerStats[j].car);
      var fastestLap = CalcLapTime(raceResults[j].time);
      tableData.push([i, name, car, fastestLap]);
      break;
    }
  }
}

/************************************************************************************************/
const embed = new MessageEmbed()
  .setColor(0xCB5A5E)
  .setTitle(FormatTrack(jsonData.track))
  .setDescription(`\`\`\`${table.table(tableData)}\`\`\``);

client.on('message', async (message) => {
  var channelWantSend = client.channels.cache.find(channel => channel.name === "race-results");
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
    .trim()
    .substring(PREFIX.length)
    .split(/\s+/);    
    if (CMD_NAME === 'results') {
      channelWantSend.send({ embeds: [embed] });
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);