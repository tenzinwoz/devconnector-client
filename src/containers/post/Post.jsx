import React, { Fragment, useEffect } from "react";
import Spinner from "../../components/Spinner";
import { getPost } from "../../redux/actions/post";
import PostItem from "../posts/PostItem";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

export default function Post() {
  const { post, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn ">
        Back to posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
}
