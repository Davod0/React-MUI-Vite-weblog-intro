export interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  createdDate: Date;
}

const mockedPosts: Post[] = [
  {
    id: 1,
    title: "The king",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    author: "David Janson",
    createdDate: new Date("2020-01-01"),
  },
  {
    id: 2,
    title: "King Kung",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod",
    author: "Jack Jones",
    createdDate: new Date("2020-01-02"),
  },
  {
    id: 3,
    title: "Bad boys",
    body: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod",
    author: "Sara Larsson",
    createdDate: new Date("2020-01-03"),
  },
];

export default mockedPosts;
