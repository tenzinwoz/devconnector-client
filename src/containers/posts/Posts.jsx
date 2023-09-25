import React, { Fragment, useEffect } from "react";
import { getPosts } from "../../redux/actions/post";
import Spinner from "../../components/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { useDispatch, useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";

export default function Posts() {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead">
        <BiUserCircle />
        Welcome to the community
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
}
