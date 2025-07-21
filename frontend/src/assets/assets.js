
const logo = "/Logo.png";
const user = "/user.png";
const endgame_png = "/endgame_img.png";
const banner = "/banner.png";
const acnG = "/genre/action.png";
const sfG = "/genre/scienceFiction.png";
const shG = "/genre/hero.png";
const cmdG = "/genre/comedy.png";
// const avatar = "/avatar.jpg";
// const barbie = "/barbie.jpg";
// const batman = "/batman.jpg";
// const doctorst = "/doctorst.jpg";
// const endgame = "/endgame.jpg";
// const eternals = "/eternals.jpg";
// const infinitywar = "/infinitywar.jpg";
// const interstellar = "/interstellar.jpg";
// const mona2 = "/mona2.jpg";
// const oppenheimer = "/oppenheimer.jpg";
// const rednotice = "/rednotice.jpg";
// const shangchi = "/shangchi.jpg";
// const spider = '/spider.jpg'
// const spider3 = "/spider3.jpg";
// const thor = "/thor.jpg";
// const transformer = "/transformer.jpg";
const aboutIMG = "/about.jpg";
const contactUs = "/contact.png";
const default_user = "/default_user.jpg"

export const assets = {
  logo,
  user,
  endgame_png,
  banner,
  aboutIMG,
  contactUs,
  default_user
};

export const genreData = [
  {
    genre: "Action",
    img: acnG,
    path: "action",
  },
  {
    genre: "Science Fiction",
    img: sfG,
    path: "scifi",
  },
  {
    genre: "Superhero",
    img: shG,
    path: "superhero",
  },
  {
    genre: "Comedy",
    img: cmdG,
    path: "comedy",
  },
];

// export const MoviesData = [
//   {
//     name: "Avatar",
//     _id: "1",
//     part: "The Way of Water",
//     genre: "Action",
//     path: "action",
//     duration: "3H 12Min",
//     // dimention : "yes",
//     price: "140",
//     img: avatar,
//     about:
//       "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
//     distributor_id: "avatar@gmail.com",
//     password: "123",
//   },
//   {
//     name: "Doctor Strange",
//     _id: "2",
//     part: "Multiverse of Madness",
//     genre: "Science Fiction",
//     path: "scifi",
//     duration: "2H 46Min",
//     price: "180",
//     img: doctorst,
//     about:
//       "Doctor Strange teams up with a mysterious teenage girl = his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
//   },
//   {
//     name: "Avengers Endgame",
//     _id: "3",
//     part: " ",
//     genre: "Action",
//     path: "action",
//     duration: "3H 15Min",
//     price: "250",
//     img: endgame,
//     about:
//       "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
//   },
//   {
//     name: "Eternals",
//     _id: "4",
//     part: "",
//     genre: "Superhero",
//     path: "superhero",
//     duration: "2H 35Min",
//     price: "190",
//     img: eternals,
//     about:
//       "The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.",
//   },
//   {
//     name: "Avengers Infinity War",
//     _id: "5",
//     part: "",
//     genre: "Action",
//     path: "action",
//     duration: "2H 39Min",
//     price: "210",
//     img: infinitywar,
//     about:
//       "As Thanos sets about his quest for finding the infinity stones and carrying out his twisted scheme, the Avengers join forces with their allies to stop him = causing chaos and destruction.",
//   },
//   {
//     name: "interstellar",
//     _id: "6",
//     part: "",
//     genre: "Science Fiction",
//     path: "scifi",
//     duration: "2H 50Min",
//     price: "290",
//     img: interstellar,
//     about:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
//   },
//   {
//     name: "Moana 2",
//     _id: "7",
//     part: "",
//     genre: "Comedy",
//     path: "comedy",
//     duration: "1H 20M",
//     price: "120",
//     img: mona2,
//     about:
//       "Moana journeys to the far seas of Oceania after receiving an unexpected call = her wayfinding ancestors.",
//   },
//   {
//     name: "Oppenheimer",
//     _id: "8",
//     part: "",
//     genre: "Science Fiction",
//     path: "scifi",
//     duration: "3H 00M",
//     price: "260",
//     img: oppenheimer,
//     about:
//       "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.",
//   },
//   {
//     name: "Shang Chi",
//     _id: "9",
//     part: "Legends of the Ten Rings",
//     genre: "Superhero",
//     path: "superhero",
//     duration: "2H 20M",
//     price: "240",
//     img: shangchi,
//     about:
//       "Shang-Chi, a martial artist, lives a quiet life after he leaves his father and the shadowy Ten Rings organisation behind. Years later, he is forced to confront his past when the Ten Rings attack him.",
//   },
//   {
//     name: "Spider Man 3",
//     _id: "10",
//     part: "",
//     genre: "Superhero",
//     path: "superhero",
//     duration: "2H 32M",
//     price: "200",
//     img: spider3,
//     about:
//       "Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.",
//   },
//   {
//     name: "Batman",
//     _id: "11",
//     part: "",
//     genre: "Superhero",
//     path: "superhero",
//     duration: "2H 48M",
//     price: "195",
//     img: batman,
//     about:
//       "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he decides to stop a secret society that intends to destroy the city.",
//   },
//   {
//     name: "Thor",
//     _id: "12",
//     part: "Love and Thunder",
//     genre: "Comedy",
//     path: "comedy",
//     duration: "2H 38M",
//     price: "230",
//     img: thor,
//     about:
//       "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
//   },
//   {
//     name: "Barbie",
//     _id: "13",
//     part: "",
//     genre: "Comedy",
//     path: "comedy",
//     duration: "1H 45M",
//     price: "180",
//     img: barbie,
//     about:
//       "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
//   },
//   {
//     name: "Transformer",
//     _id: "14",
//     part: "Rise of the Beast",
//     genre: "Action",
//     path: "action",
//     duration: "2H 10M",
//     price: "190",
//     img: transformer,
//     about:
//       "Optimus Prime and the Autobots team up with a down on his luck young man, an aspiring historian and with a powerful faction of Transformers known as the Maximals to combat a sinister force = outer space that threatens the Earth and all of mankind.",
//   },
//   {
//     name: "Red Notice",
//     _id: "15",
//     part: "",
//     genre: "Action",
//     path: "action",
//     duration: "1H 56M",
//     price: "220",
//     img: rednotice,
//     about:
//       "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
//   },
// ];

