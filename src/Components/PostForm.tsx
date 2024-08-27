import { Box, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Post } from "../Data";

interface PostFormProps {
  // onSavePost: (post: Post) => void;
  onSavePost(post: Post): void;
}

function PostForm(props: PostFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: Post = {
      id: Math.random(),
      title: title,
      body: content,
      author: author,
      createdDate: new Date()}
      props.onSavePost(newPost);

      setTitle("");
      setContent("");
      setAuthor("");
    }

  return (
    <Box onSubmit={handleSubmit}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 3,
        gap: 1,
        width: "40ch",
      }}
    >
      <Typography variant="h3" fontSize={"large"}>
        Skapa ett nytt inlägg
      </Typography>
      <TextField label="Tittel" value={title}onChange={(e) => setTitle(e.target.value)}/>
      <TextField label="Innehåll" value={content}onChange={(e) => setContent(e.target.value)}/>
      <TextField label="Författare" value={author}onChange={(e) => setAuthor(e.target.value)}/>
        <button type="submit">Spara</button>
    </Box>
  );
}

export default PostForm;
