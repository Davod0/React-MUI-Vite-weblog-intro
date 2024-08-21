import { useState } from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import mockedPosts from "./Data";
import { Post } from "./Interfaces";

function App() {
  const [posts, setPost] = useState(mockedPosts);
  const handleSavePost = (post: Post) => {
    setPost([post, ...posts]);
  };

  return (
    <div>
      <Header />

      <Body />
    </div>
  );
}

export default App;
