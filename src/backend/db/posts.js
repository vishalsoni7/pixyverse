import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At some point, we all have to choose between what the world wants you to be and who you are.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    postImage: "../postspicture/blackwidow1.jpeg",
    createdAt: new Date("August 30, 2021 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I am sorry. That was... odd.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vision",
    postImage: "../postspicture/vision1.jpeg",
    createdAt: new Date("August 23, 2001 02:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Move, Captain. I won't ask a second time.",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "t'challa",
    postImage: "../postspicture/blackpanther2.jpeg",
    createdAt: new Date("August 03, 2022 02:05:04"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Captain Rogers! I know you believe that what you are doing is right, but for the collective good, you must surrender now.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vision",
    postImage: "../postspicture/vision2.webp",
    createdAt: new Date("July 12, 2021 03:15:30"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "I am Iron man.",
    likes: {
      likeCount: 2999,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tonystark",
    postImage: "../postspicture/ironman2.jpg",
    createdAt: new Date("Jun 20, 2022 07:05:30"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "I can do this all day.",
    likes: {
      likeCount: 1200,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steverogers",
    postImage: "../postspicture/captain2.avif",
    createdAt: new Date("December 28, 2022 01:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The Black Panther has been a protector of Wakanda for generations. And now, it is time to show the outside world who we are.",
    likes: {
      likeCount: 1300,
      likedBy: [],
      dislikedBy: [],
    },
    username: "t'challa",
    postImage: "../postspicture/blackpanther1.jpeg",
    createdAt: new Date("June 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "AVENGERS! ASSEMBLE.",
    likes: {
      likeCount: 9999,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steverogers",
    postImage: "../postspicture/avengers-assemble.jpg",
    createdAt: new Date("November 20, 2022 03:15:30"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Billionaire Genius Playboy Philanthropist.",
    likes: {
      likeCount: 2243,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tonystark",
    postImage: "../postspicture/ironman1.webp",
    createdAt: new Date("February 27, 2023 03:15:30"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "You don’t know everything about me. The Avengers weren’t my first family.",
    likes: {
      likeCount: 2300,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    postImage: "../postspicture/blackwidow2.webp",
    createdAt: new Date("May 30, 2023 03:15:30"),
    updatedAt: formatDate(),
  },
];
