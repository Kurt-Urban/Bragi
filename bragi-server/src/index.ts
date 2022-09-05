import express, { Request, Response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const cors = require("cors");
const app = express({});
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

const lindemann = [
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 1,
      api_path: "/songs/2869949",
      artist_names: "Maggie Lindemann",
      full_title: "Pretty Girl by Maggie Lindemann",
      header_image_thumbnail_url:
        "https://images.genius.com/e1942fce58c332d4876b31b5d9210d71.300x300x1.jpg",
      header_image_url:
        "https://images.genius.com/e1942fce58c332d4876b31b5d9210d71.1000x1000x1.jpg",
      id: 2869949,
      instrumental: false,
      lyrics_owner_id: 2204231,
      lyrics_state: "complete",
      lyrics_updated_at: 1618850108,
      path: "/Maggie-lindemann-pretty-girl-lyrics",
      pyongs_count: 35,
      relationships_index_url:
        "https://genius.com/Maggie-lindemann-pretty-girl-sample",
      release_date_components: {
        year: 2016,
        month: 9,
        day: 30,
      },
      release_date_for_display: "September 30, 2016",
      song_art_image_thumbnail_url:
        "https://images.genius.com/e1942fce58c332d4876b31b5d9210d71.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/e1942fce58c332d4876b31b5d9210d71.1000x1000x1.jpg",
      stats: {
        unreviewed_annotations: 0,
        concurrents: 2,
        hot: false,
        pageviews: 508920,
      },
      title: "Pretty Girl",
      title_with_featured: "Pretty Girl",
      updated_by_human_at: 1654744342,
      url: "https://genius.com/Maggie-lindemann-pretty-girl-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/557178",
        header_image_url:
          "https://images.genius.com/ec14665f7c6dc007f3122f12820fb907.1000x333x1.jpg",
        id: 557178,
        image_url:
          "https://images.genius.com/2062346d32b411341de0863cb73096ca.734x734x1.jpg",
        index_character: "m",
        is_meme_verified: false,
        is_verified: true,
        name: "Maggie Lindemann",
        slug: "Maggie-lindemann",
        url: "https://genius.com/artists/Maggie-lindemann",
        iq: 473,
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 9,
      api_path: "/songs/1930792",
      artist_names: "Lindemann",
      full_title: "Praise Abort by Lindemann",
      header_image_thumbnail_url:
        "https://images.rapgenius.com/e8b81c86c8b4243f3336ab7ebd393470.300x68x1.jpg",
      header_image_url:
        "https://images.rapgenius.com/e8b81c86c8b4243f3336ab7ebd393470.990x225x1.jpg",
      id: 1930792,
      instrumental: false,
      lyrics_owner_id: 292346,
      lyrics_state: "complete",
      lyrics_updated_at: 1654711554,
      path: "/Lindemann-praise-abort-lyrics",
      pyongs_count: 16,
      relationships_index_url:
        "https://genius.com/Lindemann-praise-abort-sample",
      release_date_components: {
        year: 2015,
        month: 5,
        day: 28,
      },
      release_date_for_display: "May 28, 2015",
      song_art_image_thumbnail_url:
        "https://images.genius.com/86927d746c268a5ef7ee1b548b8f9a46.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/86927d746c268a5ef7ee1b548b8f9a46.700x700x1.jpg",
      stats: {
        unreviewed_annotations: 0,
        hot: false,
        pageviews: 125518,
      },
      title: "Praise Abort",
      title_with_featured: "Praise Abort",
      updated_by_human_at: 1654711567,
      url: "https://genius.com/Lindemann-praise-abort-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/337610",
        header_image_url:
          "https://images.genius.com/e7b3daee439f55b3ff1c5c59f4dab69e.820x461x1.jpg",
        id: 337610,
        image_url:
          "https://images.genius.com/dac8407d830164ab66ff8bb31251144e.499x499x1.jpg",
        index_character: "l",
        is_meme_verified: false,
        is_verified: false,
        name: "Lindemann",
        slug: "Lindemann",
        url: "https://genius.com/artists/Lindemann",
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 1,
      api_path: "/songs/3058820",
      artist_names: "Maggie Lindemann (Ft. CADE & Cheat Codes)",
      full_title:
        "Pretty Girl (Cheat Codes X Cade Remix) by Maggie Lindemann (Ft. CADE & Cheat Codes)",
      header_image_thumbnail_url:
        "https://images.genius.com/6211d4e45c544fe32076991fa0ba8a92.300x300x1.jpg",
      header_image_url:
        "https://images.genius.com/6211d4e45c544fe32076991fa0ba8a92.1000x1000x1.jpg",
      id: 3058820,
      instrumental: false,
      lyrics_owner_id: 104344,
      lyrics_state: "complete",
      lyrics_updated_at: 1625994264,
      path: "/Maggie-lindemann-pretty-girl-cheat-codes-x-cade-remix-lyrics",
      pyongs_count: 17,
      relationships_index_url:
        "https://genius.com/Maggie-lindemann-pretty-girl-cheat-codes-x-cade-remix-sample",
      release_date_components: {
        year: 2017,
        month: 3,
        day: 3,
      },
      release_date_for_display: "March 3, 2017",
      song_art_image_thumbnail_url:
        "https://images.genius.com/6211d4e45c544fe32076991fa0ba8a92.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/6211d4e45c544fe32076991fa0ba8a92.1000x1000x1.jpg",
      stats: {
        unreviewed_annotations: 1,
        hot: false,
        pageviews: 112485,
      },
      title: "Pretty Girl (Cheat Codes X Cade Remix)",
      title_with_featured:
        "Pretty Girl (Cheat Codes X Cade Remix) (Ft. CADE & Cheat Codes)",
      updated_by_human_at: 1626368207,
      url: "https://genius.com/Maggie-lindemann-pretty-girl-cheat-codes-x-cade-remix-lyrics",
      featured_artists: [
        {
          _type: "artist",
          api_path: "/artists/377002",
          header_image_url:
            "https://images.genius.com/a94a0a5f2f8f88064826a670f58ce167.1000x400x1.jpg",
          id: 377002,
          image_url:
            "https://images.genius.com/1ca647f20139e88b5c0e4a56846cee37.1000x1000x1.jpg",
          index_character: "c",
          is_meme_verified: false,
          is_verified: true,
          name: "Cheat Codes",
          slug: "Cheat-codes",
          url: "https://genius.com/artists/Cheat-codes",
          iq: 511,
        },
        {
          _type: "artist",
          api_path: "/artists/56160",
          header_image_url:
            "https://images.genius.com/d21929ffc45da1e1083afd9d5792c3ee.451x451x1.jpg",
          id: 56160,
          image_url:
            "https://images.genius.com/d21929ffc45da1e1083afd9d5792c3ee.451x451x1.jpg",
          index_character: "c",
          is_meme_verified: false,
          is_verified: false,
          name: "CADE",
          slug: "Cade",
          url: "https://genius.com/artists/Cade",
        },
      ],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/557178",
        header_image_url:
          "https://images.genius.com/ec14665f7c6dc007f3122f12820fb907.1000x333x1.jpg",
        id: 557178,
        image_url:
          "https://images.genius.com/2062346d32b411341de0863cb73096ca.734x734x1.jpg",
        index_character: "m",
        is_meme_verified: false,
        is_verified: true,
        name: "Maggie Lindemann",
        slug: "Maggie-lindemann",
        url: "https://genius.com/artists/Maggie-lindemann",
        iq: 473,
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 9,
      api_path: "/songs/3309577",
      artist_names: "Maggie Lindemann",
      full_title: "Obsessed by Maggie Lindemann",
      header_image_thumbnail_url:
        "https://images.genius.com/e974ca2cea94e87e2d28782bb47a88ac.300x164x1.png",
      header_image_url:
        "https://images.genius.com/e974ca2cea94e87e2d28782bb47a88ac.1000x548x1.png",
      id: 3309577,
      instrumental: false,
      lyrics_owner_id: 2383145,
      lyrics_state: "complete",
      lyrics_updated_at: 1549339346,
      path: "/Maggie-lindemann-obsessed-lyrics",
      pyongs_count: 5,
      relationships_index_url:
        "https://genius.com/Maggie-lindemann-obsessed-sample",
      release_date_components: {
        year: 2017,
        month: 11,
        day: 17,
      },
      release_date_for_display: "November 17, 2017",
      song_art_image_thumbnail_url:
        "https://images.genius.com/6c2b141bc9819f48e372389dbad442bf.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/6c2b141bc9819f48e372389dbad442bf.600x600x1.jpg",
      stats: {
        unreviewed_annotations: 1,
        hot: false,
        pageviews: 107628,
      },
      title: "Obsessed",
      title_with_featured: "Obsessed",
      updated_by_human_at: 1608345833,
      url: "https://genius.com/Maggie-lindemann-obsessed-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/557178",
        header_image_url:
          "https://images.genius.com/ec14665f7c6dc007f3122f12820fb907.1000x333x1.jpg",
        id: 557178,
        image_url:
          "https://images.genius.com/2062346d32b411341de0863cb73096ca.734x734x1.jpg",
        index_character: "m",
        is_meme_verified: false,
        is_verified: true,
        name: "Maggie Lindemann",
        slug: "Maggie-lindemann",
        url: "https://genius.com/artists/Maggie-lindemann",
        iq: 473,
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 6,
      api_path: "/songs/1782383",
      artist_names: "Lindemann",
      full_title: "Skills in Pills by Lindemann",
      header_image_thumbnail_url:
        "https://images.genius.com/25a2aec368b6ac538b040724e406c658.300x300x1.jpg",
      header_image_url:
        "https://images.genius.com/25a2aec368b6ac538b040724e406c658.355x355x1.jpg",
      id: 1782383,
      instrumental: false,
      lyrics_owner_id: 1267514,
      lyrics_state: "complete",
      lyrics_updated_at: 1628406895,
      path: "/Lindemann-skills-in-pills-lyrics",
      pyongs_count: 14,
      relationships_index_url:
        "https://genius.com/Lindemann-skills-in-pills-sample",
      release_date_components: {
        year: 2015,
        month: 5,
        day: 2,
      },
      release_date_for_display: "May 2, 2015",
      song_art_image_thumbnail_url:
        "https://images.genius.com/25a2aec368b6ac538b040724e406c658.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/25a2aec368b6ac538b040724e406c658.355x355x1.jpg",
      stats: {
        unreviewed_annotations: 0,
        hot: false,
        pageviews: 74273,
      },
      title: "Skills in Pills",
      title_with_featured: "Skills in Pills",
      updated_by_human_at: 1658267980,
      url: "https://genius.com/Lindemann-skills-in-pills-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/337610",
        header_image_url:
          "https://images.genius.com/e7b3daee439f55b3ff1c5c59f4dab69e.820x461x1.jpg",
        id: 337610,
        image_url:
          "https://images.genius.com/dac8407d830164ab66ff8bb31251144e.499x499x1.jpg",
        index_character: "l",
        is_meme_verified: false,
        is_verified: false,
        name: "Lindemann",
        slug: "Lindemann",
        url: "https://genius.com/artists/Lindemann",
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 3,
      api_path: "/songs/2027355",
      artist_names: "Lindemann",
      full_title: "Yukon by Lindemann",
      header_image_thumbnail_url:
        "https://images.genius.com/71c6e3caab7e921e70adc7255657efa2.300x300x1.jpg",
      header_image_url:
        "https://images.genius.com/71c6e3caab7e921e70adc7255657efa2.1000x1000x1.jpg",
      id: 2027355,
      instrumental: false,
      lyrics_owner_id: 292346,
      lyrics_state: "complete",
      lyrics_updated_at: 1623613109,
      path: "/Lindemann-yukon-lyrics",
      pyongs_count: 17,
      relationships_index_url: "https://genius.com/Lindemann-yukon-sample",
      release_date_components: {
        year: 2015,
        month: 6,
        day: 5,
      },
      release_date_for_display: "June 5, 2015",
      song_art_image_thumbnail_url:
        "https://images.genius.com/71c6e3caab7e921e70adc7255657efa2.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/71c6e3caab7e921e70adc7255657efa2.1000x1000x1.jpg",
      stats: {
        unreviewed_annotations: 0,
        hot: false,
        pageviews: 59474,
      },
      title: "Yukon",
      title_with_featured: "Yukon",
      updated_by_human_at: 1654711856,
      url: "https://genius.com/Lindemann-yukon-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/337610",
        header_image_url:
          "https://images.genius.com/e7b3daee439f55b3ff1c5c59f4dab69e.820x461x1.jpg",
        id: 337610,
        image_url:
          "https://images.genius.com/dac8407d830164ab66ff8bb31251144e.499x499x1.jpg",
        index_character: "l",
        is_meme_verified: false,
        is_verified: false,
        name: "Lindemann",
        slug: "Lindemann",
        url: "https://genius.com/artists/Lindemann",
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 7,
      api_path: "/songs/1894691",
      artist_names: "Lindemann",
      full_title: "Golden Shower by Lindemann",
      header_image_thumbnail_url:
        "https://images.genius.com/71c6e3caab7e921e70adc7255657efa2.300x300x1.jpg",
      header_image_url:
        "https://images.genius.com/71c6e3caab7e921e70adc7255657efa2.1000x1000x1.jpg",
      id: 1894691,
      instrumental: false,
      lyrics_owner_id: 292346,
      lyrics_state: "complete",
      lyrics_updated_at: 1645062212,
      path: "/Lindemann-golden-shower-lyrics",
      pyongs_count: 9,
      relationships_index_url:
        "https://genius.com/Lindemann-golden-shower-sample",
      release_date_components: {
        year: 2015,
        month: 5,
        day: 19,
      },
      release_date_for_display: "May 19, 2015",
      song_art_image_thumbnail_url:
        "https://images.genius.com/71c6e3caab7e921e70adc7255657efa2.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/71c6e3caab7e921e70adc7255657efa2.1000x1000x1.jpg",
      stats: {
        unreviewed_annotations: 0,
        hot: false,
        pageviews: 55628,
      },
      title: "Golden Shower",
      title_with_featured: "Golden Shower",
      updated_by_human_at: 1659510782,
      url: "https://genius.com/Lindemann-golden-shower-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/337610",
        header_image_url:
          "https://images.genius.com/e7b3daee439f55b3ff1c5c59f4dab69e.820x461x1.jpg",
        id: 337610,
        image_url:
          "https://images.genius.com/dac8407d830164ab66ff8bb31251144e.499x499x1.jpg",
        index_character: "l",
        is_meme_verified: false,
        is_verified: false,
        name: "Lindemann",
        slug: "Lindemann",
        url: "https://genius.com/artists/Lindemann",
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 2,
      api_path: "/songs/3647840",
      artist_names: "Maggie Lindemann",
      full_title: "Would I by Maggie Lindemann",
      header_image_thumbnail_url:
        "https://images.genius.com/e4ee87ef08c2fd841d9415c8cbf6c22d.300x300x1.jpg",
      header_image_url:
        "https://images.genius.com/e4ee87ef08c2fd841d9415c8cbf6c22d.1000x1000x1.jpg",
      id: 3647840,
      instrumental: false,
      lyrics_owner_id: 6635452,
      lyrics_state: "complete",
      lyrics_updated_at: 1596679388,
      path: "/Maggie-lindemann-would-i-lyrics",
      pyongs_count: 8,
      relationships_index_url:
        "https://genius.com/Maggie-lindemann-would-i-sample",
      release_date_components: {
        year: 2018,
        month: 11,
        day: 16,
      },
      release_date_for_display: "November 16, 2018",
      song_art_image_thumbnail_url:
        "https://images.genius.com/e4ee87ef08c2fd841d9415c8cbf6c22d.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/e4ee87ef08c2fd841d9415c8cbf6c22d.1000x1000x1.jpg",
      stats: {
        unreviewed_annotations: 0,
        hot: false,
        pageviews: 58553,
      },
      title: "Would I",
      title_with_featured: "Would I",
      updated_by_human_at: 1596679631,
      url: "https://genius.com/Maggie-lindemann-would-i-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/557178",
        header_image_url:
          "https://images.genius.com/ec14665f7c6dc007f3122f12820fb907.1000x333x1.jpg",
        id: 557178,
        image_url:
          "https://images.genius.com/2062346d32b411341de0863cb73096ca.734x734x1.jpg",
        index_character: "m",
        is_meme_verified: false,
        is_verified: true,
        name: "Maggie Lindemann",
        slug: "Maggie-lindemann",
        url: "https://genius.com/artists/Maggie-lindemann",
        iq: 473,
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 1,
      api_path: "/songs/6853017",
      artist_names: "Till Lindemann",
      full_title: "Ich hasse Kinder by Till Lindemann",
      header_image_thumbnail_url:
        "https://images.genius.com/0beb5476f266f424030cac007195799b.300x300x1.jpg",
      header_image_url:
        "https://images.genius.com/0beb5476f266f424030cac007195799b.1000x1000x1.jpg",
      id: 6853017,
      instrumental: false,
      lyrics_owner_id: 8032109,
      lyrics_state: "complete",
      lyrics_updated_at: 1627888521,
      path: "/Till-lindemann-ich-hasse-kinder-lyrics",
      pyongs_count: 5,
      relationships_index_url:
        "https://genius.com/Till-lindemann-ich-hasse-kinder-sample",
      release_date_components: {
        year: 2021,
        month: 6,
        day: 1,
      },
      release_date_for_display: "June 1, 2021",
      song_art_image_thumbnail_url:
        "https://images.genius.com/0beb5476f266f424030cac007195799b.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/0beb5476f266f424030cac007195799b.1000x1000x1.jpg",
      stats: {
        unreviewed_annotations: 0,
        hot: false,
        pageviews: 64515,
      },
      title: "Ich hasse Kinder",
      title_with_featured: "Ich hasse Kinder",
      updated_by_human_at: 1646242916,
      url: "https://genius.com/Till-lindemann-ich-hasse-kinder-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/338482",
        header_image_url:
          "https://images.genius.com/c34a00cd9f9c57ac5eef7dbdd2d5fb74.1000x165x1.jpg",
        id: 338482,
        image_url:
          "https://images.genius.com/0903b4bc82c132cf392a2d86f100d0e3.1000x1000x1.jpg",
        index_character: "t",
        is_meme_verified: false,
        is_verified: false,
        name: "Till Lindemann",
        slug: "Till-lindemann",
        url: "https://genius.com/artists/Till-lindemann",
      },
    },
  },
  {
    highlights: [],
    index: "song",
    type: "song",
    result: {
      _type: "song",
      annotation_count: 8,
      api_path: "/songs/2023745",
      artist_names: "Lindemann",
      full_title: "Fish On by Lindemann",
      header_image_thumbnail_url:
        "https://images.genius.com/38ae77ed99eb2a7d96e9d918ddc63aad.300x300x1.jpg",
      header_image_url:
        "https://images.genius.com/38ae77ed99eb2a7d96e9d918ddc63aad.496x496x1.jpg",
      id: 2023745,
      instrumental: false,
      lyrics_owner_id: 292346,
      lyrics_state: "complete",
      lyrics_updated_at: 1638177864,
      path: "/Lindemann-fish-on-lyrics",
      pyongs_count: 8,
      relationships_index_url: "https://genius.com/Lindemann-fish-on-sample",
      release_date_components: {
        year: 2015,
        month: 6,
        day: 16,
      },
      release_date_for_display: "June 16, 2015",
      song_art_image_thumbnail_url:
        "https://images.genius.com/38ae77ed99eb2a7d96e9d918ddc63aad.300x300x1.jpg",
      song_art_image_url:
        "https://images.genius.com/38ae77ed99eb2a7d96e9d918ddc63aad.496x496x1.jpg",
      stats: {
        unreviewed_annotations: 7,
        hot: false,
        pageviews: 52859,
      },
      title: "Fish On",
      title_with_featured: "Fish On",
      updated_by_human_at: 1654711606,
      url: "https://genius.com/Lindemann-fish-on-lyrics",
      featured_artists: [],
      primary_artist: {
        _type: "artist",
        api_path: "/artists/337610",
        header_image_url:
          "https://images.genius.com/e7b3daee439f55b3ff1c5c59f4dab69e.820x461x1.jpg",
        id: 337610,
        image_url:
          "https://images.genius.com/dac8407d830164ab66ff8bb31251144e.499x499x1.jpg",
        index_character: "l",
        is_meme_verified: false,
        is_verified: false,
        name: "Lindemann",
        slug: "Lindemann",
        url: "https://genius.com/artists/Lindemann",
      },
    },
  },
];

app.post("/", (req: Request, res: Response) => {
  // const options = {
  //   params: { q: req.body.query },
  //   headers: {
  //     "X-RapidAPI-Key": process.env.API_KEY,
  //     "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  //   },
  // };
  // axios
  //   .get("https://genius-song-lyrics1.p.rapidapi.com/search", options)
  //   .then(function (response) {
  //     console.log(response.data);
  //     res.send(response.data.response.hits);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  const results = lindemann.map((item) => item.result);
  res.send(results);
});
