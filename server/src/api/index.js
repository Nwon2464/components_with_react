const express = require("express");
const axios = require("axios");
const emojis = require("./emojis");
const _ = require("lodash");
const Twitch = require("../schemas/twitch");
const router = express.Router();

// router.get('/', (req, res) => {
//   res.json({
//     message: 'API - 👋🌎🌍🌏'
//   });
// });
//secret = 9dlqnz21f080c13zbajb908m8n4mb4

const client_id = "3v5apurywz4f102mixl63eb53q7z4h";
const client_secret = "9dlqnz21f080c13zbajb908m8n4mb4";
// let token = [];

router.get("/twitch", async (req, res) => {
  try {
    const response = await axios.post(
      `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`
    );
    const token = response.data.access_token;
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        "client-id": client_id,
      },
    };

    if (token) {
      const getStreamsRequest = await axios.get(
        "https://api.twitch.tv/helix/streams?first=5",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "client-id": client_id,
          },
        }
      );

      const newStreamsData = getStreamsRequest.data.data.slice();
      // console.log(newStreamsData);

      let URL1 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[0].user_id}`;
      let URL2 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[1].user_id}`;
      let URL3 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[2].user_id}`;
      let URL4 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[3].user_id}`;
      let URL5 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[4].user_id}`;

      const promise1 = axios.get(URL1, options);
      const promise2 = axios.get(URL2, options);
      const promise3 = axios.get(URL3, options);
      const promise4 = axios.get(URL4, options);
      const promise5 = axios.get(URL5, options);
      let game_name = [];

      Promise.all([promise1, promise2, promise3, promise4, promise5]).then(
        (values) => {
          return values.map((el) => {
            let game_name1 = _.map(
              el.data.data,
              _.partialRight(_.pick, "game_name")
            );

            _.union(game_name, game_name1);
          });
        }
      );
      console.log(game_name);
      // console.log(newStreamsData);
      // const getUsersRequest1 = await axios.get(
      //   `https://api.twitch.tv/helix/users?id=${user_id[0]}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       "client-id": client_id,
      //     },
      //   }
      // );
      // console.log(getUsersRequest1.data.data);

      // const channelrequest = await axios.get(
      //   // "https://api.twitch.tv/helix/channels?broadcaster_id=555293079",
      //   "https://api.twitch.tv/helix/streams/tags?broadcaster_id=555293079",
      //   // `https://api.twitch.tv/helix/users?id=555293079`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       "client-id": client_id,
      //     },
      //   }
      // );
      // console.log(channelrequest.data.data[0].localization_names);

      // console.log(channelrequest.data.data[0].localization_names["en-us"]);

      // console.log(channelrequest.data.data[1].localization_names);
      // const newTwitch = new Twitch({ twitch: request.data });
      // const createdTwitch = await newTwitch.save();

      res.json({
        message: "API SUCCEED! - 👋🌎🌍🌏",
        data: getStreamsRequest.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
// router.post("/twitch", async (req, res) => {
//   try {
//     console.log(req.body);
//     const response = await axios.get(
//       "https://api.twitch.tv/helix/users?id=44322889",
//       {
//         headers: {
//           Authorization: "Bearer " + req.body.data,
//           client_id,
//         },
//       }
//     );
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// });
router.use("/emojis", emojis);

module.exports = router;
