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

router.get("/twitch", async (req, res) => {
  try {
    const response = await axios.post(
      `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`
    );
    const token = response.data.access_token;
    if (token) {
      const request = await axios.get(
        "https://api.twitch.tv/helix/clips?broadcaster_id=67955580&first=5",
        {
          headers: {
            Authorization: `Bearer ${response.data.access_token}`,
            "client-id": client_id,
          },
        }
      );
      // console.log(request.data);
      res.json({
        message: "API SUCCEED! - 👋🌎🌍🌏",
        data: request.data,
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
