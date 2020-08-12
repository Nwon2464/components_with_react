const faker = require("faker");
const Moment = require("moment");
const database = { videos: [], streams: [] };

for (let i = 0; i < 10; i++) {
  database.videos.push({
    albumId: i,
    id: {
      videoId: faker.random.uuid(),
    },
    snippet: {
      description: faker.lorem.paragraph(),
      publishTime: Moment(new Date()).format("MM-DD-YYYY"),
      channelTitle: faker.lorem.sentence(),
      title: faker.name.title(),
      thumbnails: {
        medium: {
          url: faker.random.image(),
        },
      },
    },
    name: faker.name.findName(),
    email: faker.internet.email(),
    userId: faker.random.uuid(),
  });
}
console.log(JSON.stringify(database));
