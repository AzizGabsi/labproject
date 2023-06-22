import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useDispatch } from 'react-redux';


function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch()

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("description", description);
    data.set("image", image[0]);
    data.set("owner", owner);
    data.set("createdAt", createdAt);

    ev.preventDefault()
    const response = await fetch("http://localhost:5000/api/post/newpost", {
      method: "POST",
      body: data,
    })
  }
  return (
    <div>
      <form onSubmit={createNewPost} style={{ display: "flex", flexDirection: "column" }}>
        <input style={{ marginBottom: "2vh", marginTop: "2vh" }} className="form-control" type="title" placeholder={"Title"} value={title} onChange={e => setTitle(e.target.value)} />
        <input style={{ marginBottom: "2vh", marginTop: "2vh" }} className="form-control" type="file" onChange={e => setImage(e.target.files)} />
        <ReactQuill value={description} onChange={e => setDescription(e)} />
        <button className="btn btn-primary" style={{ marginTop: "2vh" }}>Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
