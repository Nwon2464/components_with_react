const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const twitchSchema = new Schema(
  {
    twitch: {},
  },
  {
    timestamps: true,
  }
);
const Twitch = mongoose.model("twitch", twitchSchema);

module.exports = Twitch;
