import express, { Request, Response } from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { lyricsTest, songListTestData } from "./testData";

const cors = require("cors");
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

// Get song list based on the query string
// If the api fails it will return an error
app.post("/", (req: Request, res: Response) => {
  // Uncomment below to use API
  const options = {
    params: { q: req.body.query },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };
  axios
    .get("https://genius-song-lyrics1.p.rapidapi.com/search", options)
    .then(function (response) {
      if (response.data.meta.status === 200) {
        return res.send(
          response.data.response.hits.map((hit: any) => hit.result)
        );
      } else {
        throw new Error(
          `Status: ${response.data.meta.status} - ${response.data.meta.message}`
        );
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  // Uncomment this line to use test data
  // const results = songListTestData.map((item) => item.result);
  // res.send(results);
});

// Get lyrics based on the song id
// If the api fails it will return an error and ui will display "no lyrics"
app.post("/lyrics", (req: Request, res: Response) => {
  if (!req.body.id) return res.send("No id provided");

  // Uncomment this line to use API
  const options = {
    method: "GET",
    url: `https://genius-song-lyrics1.p.rapidapi.com/songs/${req.body.id}/lyrics`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response.data.meta.status === 200) {
        return res.send(response.data.response.lyrics);
      } else {
        throw new Error(
          `Status: ${response.data.meta.status} - ${response.data.meta.message}`
        );
      }
    })
    .catch(function (error) {
      res.send(error.message);
    });

  // Uncomment this line to use test data
  // res.send(lyricsTest);
});
