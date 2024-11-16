import { FormHelperText, Textarea } from "@mui/joy";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function NewPost({
  createFunc,
}: {
  createFunc: (title: string, content: string) => Promise<boolean>;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitNewPost() {
    if (await createFunc(title, content)) {
      setTitle("");
      setContent("");
    }
  }

  return (
    <form
      className="w-96 rounded-xl p-4 bg-sky-300"
      onSubmit={(e) => {
        e.preventDefault();
        submitNewPost();
      }}
    >
      <TextField
        variant="filled"
        sx={{ backgroundColor: "white", width: "100%" }}
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        sx={{
          padding: "0.5rem",
          height: "100px",
          width: "100%",
          borderRadius: 0,
        }}
        variant="soft"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <FormHelperText>What&apos;s on your mind?</FormHelperText>
      <div className="w-full flex justify-center">
        <Button
          sx={{ width: "80px" }}
          variant="contained"
          type="submit"
          disabled={title.length === 0 || content.length === 0}
        >
          Create
        </Button>
      </div>
    </form>
  );
}
