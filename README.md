# Assetto Corsa Discord Bot

## General Information
This is a ongoing project where I will develop a wide variety of discord bot tools to enhance a channel I'm apart of, where we participate in friendly weekly Assetto Corsa races.

Currently a basic leaderboard feature has been implemented, which will need to be optimised and modularised further, along with making it more dynamic (currently containing some hardcoding, starting project please forgive).
Certain things have been hardcoded, the race_out.json file requires to be copy/pasted to root as I was just playing around with it to get it up and running for now. 

## Discord Developer Portal Setup
- Visit https://discord.com/developers/applications & sign in with your Discord account (create a Discord account if you do not have one as of yet)
- Create New Application & follow steps. Once done, copy the Bot's token
- Create a ```.env``` file with the following contents inside ```DISCORDJS_BOT_TOKEN=<Your Bot's token>```

## Locating the race_out.json file
Navigate to your Assetto Corsa game folder: ```\Assetto Corsa\out\race_out.json```

## Project setup
Copy & Paste the ```race_out.json``` file into your Project's root folder
** Attention ** This is purely temporary, will be changed in the future to be more dynamic and not require a copy/paste of latest file.
```
npm install
```

## Run Project
```
npm start
```
