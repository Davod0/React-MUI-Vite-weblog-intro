export interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  date: Date;
}

export interface Props {
  post: Post;
}
