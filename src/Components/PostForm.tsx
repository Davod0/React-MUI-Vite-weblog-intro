import { Box, TextField, Typography } from "@mui/material";

function PostForm() {
  return (
    <Box
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
      <TextField label="Tittel"></TextField>
      <TextField label="innehåll"></TextField>
      <TextField label="innehåll"></TextField>
    </Box>
  );
}

export default PostForm;
