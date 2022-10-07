# Bragi

Norse god of music

Simple GUI and Server to search for songs and their lyrics.
Project for SWENG861 - Penn State Masters Program

## Getting Started

```
git clone https://github.com/Kurt-Urban/Bragi.git
```

I have already almost run out of api uses on the free tier, please sign up for a free key here:
https://rapidapi.com/Glavier/api/genius-song-lyrics1/
You will need to replace ```process.env.API_KEY``` with your api key in two places indicated in the index.js by comments.

Open two terminals and run the following commands in each:

Server:

```
cd bragi-server
npm install || yarn
npm start || yarn start
```

UI

```
cd bragi-ui
npm install || yarn
npm run dev || yarn dev
```
Then paste this url in any browser:
```
http://localhost:3000
```


