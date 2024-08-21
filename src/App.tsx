import { Stack } from "@mui/material";
import { useState } from "react";
import Header from "./Components/Header";
import PostItem from "./Components/PostItem";
import mockedPosts, { Post } from "./Data";

function App() {
  const [posts, setPost] = useState(mockedPosts);

  const handleSavePost = (post: Post) => {
    setPost([post, ...posts]);
  };

  return (
    <div>
      <Header />

      <Stack direction="column" spacing={5} padding={2}>
        {posts.map((post) => (<PostItem post={post} key={post.id} />))}
      </Stack>
    </div>
  );
}

export default App;
