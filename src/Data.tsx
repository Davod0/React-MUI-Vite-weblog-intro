import { Post } from "./Interfaces";

const mockedPosts: Post[] = [
  {
    id: 1,
    title: "The king",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    author: "David Janson",
    date: new Date("2020-01-01"),
  },
  {
    id: 2,
    title: "King Kung",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod",
    author: "Jack Jones",
    date: new Date("2020-01-02"),
  },
  {
    id: 3,
    title: "Bad boys",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod",
    author: "Sara Larsson",
    date: new Date("2020-01-03"),
  },
];

export default mockedPosts;
