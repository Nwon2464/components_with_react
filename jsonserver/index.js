const faker = require("faker");
const Moment = require("moment");
const database = { videos: [], streams: [] };

const images = [
  "https://semantic-ui.com/images/avatar/small/jenny.jpg",
  "https://semantic-ui.com/images/avatar/small/elliot.jpg",
  "https://semantic-ui.com/images/avatar2/small/molly.png",
  "https://semantic-ui.com/images/avatar2/small/elyse.png",
  "https://semantic-ui.com/images/avatar/small/helen.jpg",
  "https://semantic-ui.com/images/avatar/small/joe.jpg",
  "https://semantic-ui.com/images/avatar/small/justen.jpg",
  "https://semantic-ui.com/images/avatar/small/steve.jpg",
  "https://semantic-ui.com/images/avatar/small/laura.jpg",
  "https://semantic-ui.com/images/avatar2/small/mark.png",
  "https://semantic-ui.com/images/avatar/small/daniel.jpg",
  "https://semantic-ui.com/images/avatar/small/matt.jpg",
  "https://semantic-ui.com/images/avatar/small/veronika.jpg",
];

for (let i = 0; i < 13; i++) {
  database.streams.push({
    id: i,
    description: faker.lorem.paragraph(),
    publishTime: Moment(new Date()).format("MM-DD-YYYY"),
    channelTitle: faker.lorem.words(),
    title: faker.name.title(),
    imgUrl: faker.random.image(),
    userId: faker.phone.phoneNumberFormat().split("-").join(""),
    videoId: faker.random.number().toString(),
    imageAvatar: images[Math.floor(Math.random() * images.length)],
  });
}

console.log(JSON.stringify(database));
// console.log(faker.random.number());

// let imageAvatar = images[Math.floor(Math.random() * images.length)];

// {
//   "albumId": 1,
//   "id": 1,
//   "snippet": {
//     "description": "Nam eum officiis. Consequatur dolor enim tenetur nisi autem accusamus ipsam expedita vel. Et sed facilis autem magnam mollitia dicta soluta ut. Iusto dolores voluptatem perspiciatis voluptatem.",
//     "publishTime": "08-12-2020",
//     "channelTitle": "In quibusdam sit culpa.",
//     "title": "Principal Quality Strategist",
//     "thumbnails": {
//       "medium": {
//         "url": "http://lorempixel.com/640/480/nightlife"
//       }
//     }
//   },
//   "name": "Ms. Mike Homenick",
//   "email": "Camila_Hyatt@gmail.com",
//   "userId": "9ed67b12-212f-4609-ad0c-20d5c2b55b2e",
//   "videoId": "faefc819-d00b-4035-bf07-8b9a2e93f989"
// }
