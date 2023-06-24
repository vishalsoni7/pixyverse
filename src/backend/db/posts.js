import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    postImage: ["https://wallpaperaccess.com/full/55565.jpg"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "hehe.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vision",
    postImage: ["https://wallpaperaccess.com/full/55565.jpg"],
    createdAt: formatDate(),
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
    postImage: ["https://wallpaperaccess.com/full/55565.jpg"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Please be kind to Animals.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vision",
    postImage: ["https://wallpaperaccess.com/full/55565.jpg"],
    createdAt: formatDate(),
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
    postImage: [
      "https://i.pinimg.com/564x/df/d3/4b/dfd34bf5f68287918740898787c17568.jpg",
    ],
    createdAt: formatDate(),
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
    postImage: [
      "https://i.pinimg.com/564x/df/d3/4b/dfd34bf5f68287918740898787c17568.jpg",
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The Black Panther has been a protector of Wakanda for generations. And now, it is time to show the outside world who we are.",
    likes: {
      likeCount: 100,
      likedBy: [],
      dislikedBy: [],
    },
    username: "t'challa",
    postImage: [
      "https://i.pinimg.com/564x/df/d3/4b/dfd34bf5f68287918740898787c17568.jpg",
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "AVENGERS! ASSEMBLE.",
    likes: {
      likeCount: 10000,
      likedBy: [],
      dislikedBy: [],
    },
    username: "steverogers",
    postImage: [
      "https://i.pinimg.com/564x/df/d3/4b/dfd34bf5f68287918740898787c17568.jpg",
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Billionaire Genius Playboy Philanthropist.",
    likes: {
      likeCount: 344,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tonystark",
    postImage: [
      "https://i.pinimg.com/564x/df/d3/4b/dfd34bf5f68287918740898787c17568.jpg",
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum .",
    likes: {
      likeCount: 43,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    postImage: [
      "https://i.pinimg.com/564x/df/d3/4b/dfd34bf5f68287918740898787c17568.jpg",
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
