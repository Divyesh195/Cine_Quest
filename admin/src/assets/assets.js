import logo from "./Logo.png";
import user from "./user.png";
import endgame_png from "./endgame_img.png";
import banner from "./banner.png";
import acnG from "./genre/action.png";
import sfG from "./genre/scienceFiction.png";
import shG from "./genre/hero.png";
import cmdG from "./genre/comedy.png";
import avatar from "./avatar.jpg";
import barbie from "./barbie.jpg";
import batman from "./batman.jpg";
import doctorst from "./doctorst.jpg";
import endgame from "./endgame.jpg";
import eternals from "./eternals.jpg";
import infinitywar from "./infinitywar.jpg";
import interstellar from "./interstellar.jpg";
import mona2 from "./mona2.jpg";
import oppenheimer from "./oppenheimer.jpg";
import rednotice from "./rednotice.jpg";
import shangchi from "./shangchi.jpg";
// import spider from './spider.jpg'
import spider3 from "./spider3.jpg";
import thor from "./thor.jpg";
import transformer from "./transformer.jpg";
import aboutIMG from "./about.jpg";
import contactUs from "./contact.png";
import profileIMG from "./profile.png";
import movie_img from "./mov_img.jpg"


export const assets = {
  logo,
  user,
  endgame_png,
  banner,
  aboutIMG,
  contactUs,
  profileIMG,
  movie_img,
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

export const MoviesData = [
  {
    name: "Avatar",
    _id: "1",
    part: "The Way of Water",
    genre: "Action",
    path: "action",
    duration: "3H 12M",
    price: "140",
    img: avatar,
    about:
      "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
    distributor_id: "avatar@gmail.com",
    password: "11111111",
  },
  {
    name: "Doctor Strange",
    _id: "2",
    part: "Multiverse of Madness",
    genre: "Science Fiction",
    path: "scifi",
    duration: "2H 46M",
    price: "180",
    img: doctorst,
    about:
      "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse.",
      email : "doctorst@gmail.com",
      password : "22222222"
  },
  {
    name: "Avengers Endgame",
    _id: "3",
    part: " ",
    genre: "Action",
    path: "action",
    duration: "3H 15M",
    price: "250",
    img: endgame,
    about:
      "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      email : "avengers4@gmail.com",
      password : "33333333"
  },
  {
    name: "Eternals",
    _id: "4",
    part: "",
    genre: "Superhero",
    path: "superhero",
    duration: "2H 35Min",
    price: "190",
    img: eternals,
    about:
      "The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.",
      email : "eternals@gmail.com",
      password : "56565656"
  },
  {
    name: "Avengers Infinity War",
    _id: "5",
    part: "",
    genre: "Action",
    path: "action",
    duration: "2H 39Min",
    price: "210",
    img: infinitywar,
    about:
      "As Thanos sets about his quest for finding the infinity stones and carrying out his twisted scheme, the Avengers join forces with their allies to stop him from causing chaos and destruction.",
  },
  {
    name: "interstellar",
    _id: "6",
    part: "",
    genre: "Science Fiction",
    path: "scifi",
    duration: "2H 50Min",
    price: "290",
    img: interstellar,
    about:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
  },
  {
    name: "Moana 2",
    _id: "7",
    part: "",
    genre: "Comedy",
    path: "comedy",
    duration: "1H 20M",
    price: "120",
    img: mona2,
    about:
      "Moana journeys to the far seas of Oceania after receiving an unexpected call from her wayfinding ancestors.",
  },
  {
    name: "Oppenheimer",
    _id: "8",
    part: "",
    genre: "Science Fiction",
    path: "scifi",
    duration: "3H 00M",
    price: "260",
    img: oppenheimer,
    about:
      "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb.",
  },
  {
    name: "Shang Chi",
    _id: "9",
    part: "Legends of the Ten Rings",
    genre: "Superhero",
    path: "superhero",
    duration: "2H 20M",
    price: "240",
    img: shangchi,
    about:
      "Shang-Chi, a martial artist, lives a quiet life after he leaves his father and the shadowy Ten Rings organisation behind. Years later, he is forced to confront his past when the Ten Rings attack him.",
  },
  {
    name: "Spider Man 3",
    _id: "10",
    part: "",
    genre: "Superhero",
    path: "superhero",
    duration: "2H 32M",
    price: "200",
    img: spider3,
    about:
      "Peter Parker becomes one with a symbiotic alien that bolsters his Spider-Man avatar and affects his psyche. He also has to deal with Sandman and maintain a fragmented relationship with Mary Jane.",
      distributor_id: "spiderm3@gmail.com",
    password: "22222222",
  },
  {
    name: "Batman",
    _id: "11",
    part: "",
    genre: "Superhero",
    path: "superhero",
    duration: "2H 48M",
    price: "195",
    img: batman,
    about:
      "After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he decides to stop a secret society that intends to destroy the city.",
      email: "batman@gmail.com",
      password : "12345678"
  },
  {
    name: "Thor",
    _id: "12",
    part: "Love and Thunder",
    genre: "Comedy",
    path: "comedy",
    duration: "2H 38M",
    price: "230",
    img: thor,
    about:
      "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
  },
  {
    name: "Barbie",
    _id: "13",
    part: "",
    genre: "Comedy",
    path: "comedy",
    duration: "1H 45M",
    price: "180",
    img: barbie,
    about:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
  },
  {
    name: "Transformer",
    _id: "14",
    part: "Rise of the Beast",
    genre: "Action",
    path: "action",
    duration: "2H 10M",
    price: "190",
    img: transformer,
    about:
      "Optimus Prime and the Autobots team up with a down on his luck young man, an aspiring historian and with a powerful faction of Transformers known as the Maximals to combat a sinister force from outer space that threatens the Earth and all of mankind.",
  },
  {
    name: "Red Notice",
    _id: "15",
    part: "",
    genre: "Action",
    path: "action",
    duration: "1H 56M",
    price: "220",
    img: rednotice,
    about:
      "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
  },
];
