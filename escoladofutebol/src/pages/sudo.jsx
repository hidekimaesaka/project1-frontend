import { useState } from "react";
import { TextField } from "@mui/material";
import { DropzoneArea } from "material-ui-dropzone";

export default function Sudo() {
  return (
    <div className="main">
      <div
        className="textfields"
        style={{
          display: "flex",
          "flex-direction": "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <h1>Admin screeen</h1>
        <TextField sx={{ width: "1000px" }} label="Title"></TextField>
        <TextField sx={{ width: "1000px" }} label="Subtitle"></TextField>
        <TextField
          label="Main text"
          sx={{ width: "1000px" }}
          multiline="true"
          rows="15"
        ></TextField>
        <div style={{ color: "black", width: "1000px" }}>
          <DropzoneArea
            showPreviewsInDropzone="true"
            dropzoneText="Drag the img file here, or click on this field"
          ></DropzoneArea>
        </div>
      </div>
    </div>
  );
}
