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
      const newStreamsData = getStreamsRequest.data.data;
      // --------------------
      let b = newStreamsData.slice();
      // console.log(b)

      // --------------------
      let URL1 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[0].user_id}`;
      let URL2 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[1].user_id}`;
      let URL3 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[2].user_id}`;
      let URL4 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[3].user_id}`;
      let URL5 = `https://api.twitch.tv/helix/channels?broadcaster_id=${newStreamsData[4].user_id}`;
      let UserURL1 = `https://api.twitch.tv/helix/users?id=${newStreamsData[0].user_id}`;
      let UserURL2 = `https://api.twitch.tv/helix/users?id=${newStreamsData[1].user_id}`;
      let UserURL3 = `https://api.twitch.tv/helix/users?id=${newStreamsData[2].user_id}`;
      let UserURL4 = `https://api.twitch.tv/helix/users?id=${newStreamsData[3].user_id}`;
      let UserURL5 = `https://api.twitch.tv/helix/users?id=${newStreamsData[4].user_id}`;

      let UserTags1 = `https://api.twitch.tv/helix/streams/tags?broadcaster_id=${newStreamsData[0].user_id}`;
      let UserTags2 = `https://api.twitch.tv/helix/streams/tags?broadcaster_id=${newStreamsData[1].user_id}`;
      let UserTags3 = `https://api.twitch.tv/helix/streams/tags?broadcaster_id=${newStreamsData[2].user_id}`;
      let UserTags4 = `https://api.twitch.tv/helix/streams/tags?broadcaster_id=${newStreamsData[3].user_id}`;
      let UserTags5 = `https://api.twitch.tv/helix/streams/tags?broadcaster_id=${newStreamsData[4].user_id}`;

      const promise1 = axios.get(URL1, options);
      const promise2 = axios.get(URL2, options);
      const promise3 = axios.get(URL3, options);
      const promise4 = axios.get(URL4, options);
      const promise5 = axios.get(URL5, options);
      const promiseUser1 = axios.get(UserURL1, options);
      const promiseUser2 = axios.get(UserURL2, options);
      const promiseUser3 = axios.get(UserURL3, options);
      const promiseUser4 = axios.get(UserURL4, options);
      const promiseUser5 = axios.get(UserURL5, options);

      const promiseTag1 = axios.get(UserTags1, options);
      const promiseTag2 = axios.get(UserTags2, options);
      const promiseTag3 = axios.get(UserTags3, options);
      const promiseTag4 = axios.get(UserTags4, options);
      const promiseTag5 = axios.get(UserTags5, options);
      // await axios
      //   .all([promiseTag1, promiseTag2, promiseTag3, promiseTag4, promiseTag5])
      //   .then(
      //     axios.spread((...response) => {
      //       let a = [];
      //       response.map((data) =>
      //         a.push({
      //           tag: data.data.data.map((e) => e.tag_id),
      //           localization_names: data.data.data.map(
      //             (e) => e.localization_names["en-us"]
      //           ),
      //         })
      //       );

      //       console.log(a);
      //     })
      //   );

      // console.log(ll.data.data[0].localization_names["en-us"]);

      await axios
        .all([
          promise1,
          promise2,
          promise3,
          promise4,
          promise5,
          promiseUser1,
          promiseUser2,
          promiseUser3,
          promiseUser4,
          promiseUser5,
          promiseTag1,
          promiseTag2,
          promiseTag3,
          promiseTag4,
          promiseTag5,
        ])
        .then(
          axios.spread(async (...response) => {
            let gameName = [];
            let imageUrl = [];
            let tags = [];
            response.map((data, i) => {
              tags.push({
                tag: data.data.data.map((e) => e.tag_id),
                localization_names: data.data.data.map(
                  (e) => e.localization_names
                ),
              });
              data.data.data.map((res) => {
                if (res.hasOwnProperty("profile_image_url")) {
                  imageUrl.push({
                    profile_image_url: res["profile_image_url"],
                  });
                }
              });
              data.data.data.map((res) => {
                if (res.hasOwnProperty("game_id")) {
                  gameName.push({ game_id: res.game_name });
                }
              });
            });
            // console.log(all);
            // for (let i = 0; i < response.length; i++) {
            // gameName[i] = response[i].data.data;
            // let objects = response[i].data.data;
            // }
            // console.log(gameName);
            // console.log(tags);
            const filterTags = tags.filter((e, i) => e.tag[0] !== undefined);
            // console.log(filterTags);
            res.json({
              message: "API SUCCEED! - 👋🌎🌍🌏",
              getStreams: getStreamsRequest.data.data,
              getGameName: gameName,
              getUsers: imageUrl,
              getTags: filterTags,
            });
          })
        );
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
