import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../../redux/actions/post";

export default function PostForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={async (e) => {
          e.preventDefault();
          await dispatch(addPost({ text }));
          dispatch(getPosts());
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Create a post"
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
}
