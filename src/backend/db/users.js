import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalak@gmail.com",
    username: "adarshbalak",
    password: "adarshBalak123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vishal",
    lastName: "Soni",
    email: "vishalsoni@gmail.com",
    username: "vishalsoni",
    password: "vishalsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tony",
    lastName: "Stark",
    email: "tonystark@gmail.com",
    username: "tonystark",
    password: "tonystark123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
