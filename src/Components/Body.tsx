import mockedPosts from "../Data";
import { Post } from "../Interfaces";

function Body() {
  const posts: Post[] = mockedPosts;

  return (
    <div>
      <h1>All data ska skrivas ut här i detta komponenet</h1>
    </div>
  );
}

export default Body;
