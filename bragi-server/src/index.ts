import express, { Request, Response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express({});
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

// const options = {
//   params: { q: "Daft Punk" },
//   headers: {
//     "X-RapidAPI-Key": process.env.API_KEY,
//     "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
//   },
// };
// axios
//   .get("https://genius-song-lyrics1.p.rapidapi.com/search", options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

app.post("/", (req: Request, res: Response) => {
  res.send("Ok");
});
