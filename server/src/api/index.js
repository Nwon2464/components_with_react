const express = require("express");
const axios = require("axios");
const emojis = require("./emojis");

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

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${client_id}&redirect_uri=http://localhost:5000/api/v1&scope=clips:edit`
    );

    // const response = await axios.post(
    //   `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials&scope=clips:edit`
    // );
    // token = response.data.access_token;
    // console.log(response);
    // const token = response.data.access_token;
    // res.json({
    //   token,
    // });
    console.log(response.data);
    res.json({ response });
    // if (token) {
    //   const request = await axios.get(
    //     "https://api.twitch.tv/helix/users?id=44322889",
    //     {
    //       headers: {
    //         Authorization: "Bearer " + token,
    //         client_id,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   console.log(request);
    // }
  } catch (error) {
    console.log(error);
  }
});
router.post("/twitch", async (req, res) => {
  try {
    console.log(req.body);
    const response = await axios.get(
      "https://api.twitch.tv/helix/users?id=44322889",
      {
        headers: {
          Authorization: "Bearer " + req.body.data,
          client_id,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
router.use("/emojis", emojis);

module.exports = router;
