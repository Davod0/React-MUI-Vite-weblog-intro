import { Stack, Typography } from "@mui/material";
import { Post } from "../Data";

export interface Props {
  post: Post;
}

function PostItem({ post }: Props) {
  // const post = props.post;
  // const {post} = props;

  return (
    <Stack>
      <Typography variant="h5">{post.title}</Typography>
      <Typography variant="subtitle1">{post.author}</Typography>
      <Typography variant="subtitle1">
        {post.createdDate.toDateString()}
      </Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Stack>
  );
}

export default PostItem;
