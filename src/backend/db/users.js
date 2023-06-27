import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    name: "Adarsh Balika",
    email: "adarshbalak@gmail.com",
    username: "adarshbalika",
    password: "adarshBalika123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://i.pinimg.com/564x/df/d3/4b/dfd34bf5f68287918740898787c17568.jpg",
    bio: "Adarsh Balika, a highly skilled spy and assassin.",
    link: "https://github.com/vishalsoni7?tab=repositories",
  },
  {
    _id: uuid(),
    name: "Vision",
    email: "vision@gmail.com",
    username: "vision",
    password: "vision123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://e0.pxfuel.com/wallpapers/25/709/desktop-wallpaper-vision-avengers-endgame-iphone-best-movie-poster-vision-avengers-best-movie-posters-marvel-vision-cool-marvel-vision.jpg",
    bio: "An artificial being created from the powerful Mind Stone, Vision possesses both incredible strength and the ability to phase through matter, all while striving to understand the complexities of humanity",
    link: "https://github.com/vishalsoni7?tab=repositories",
  },
  {
    _id: uuid(),
    name: "Tony Stark",
    email: "tonystark@gmail.com",
    username: "tonystark",
    password: "tonystark123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://www.wallpapertip.com/wmimgs/251-2515186_iron-man-5k-digital-artwork.jpg",
    bio: "Genius billionaire Tony Stark uses his advanced armor and intellect to fight for justice as Iron Man.",
    link: "https://github.com/vishalsoni7?tab=repositories",
  },

  {
    _id: uuid(),
    name: "Steve Rogers",
    email: "steverogers@gmail.com",
    username: "steverogers",
    password: "steverogers123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture: "https://wallpaperaccess.com/full/55565.jpg",
    bio: "Super soldier Steve Rogers, known as Captain America, leads the Avengers with unwavering courage, strength, and a shield of justice",
    link: "https://github.com/vishalsoni7?tab=repositories",
  },
  {
    _id: uuid(),
    name: "T'Challa",
    email: "t'challa@gmail.com",
    username: "t'challa",
    password: "t'challa123",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profilePicture:
      "https://c4.wallpaperflare.com/wallpaper/810/82/503/5bd084c53fd86-wallpaper-preview.jpg",
    bio: "T'Challa, the king of Wakanda, embraces his role as the Black Panther, combining his enhanced abilities and advanced technology to protect his nation and fight for equality",
    link: "https://github.com/vishalsoni7?tab=repositories",
  },
];
