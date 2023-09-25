import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addLike,
  removeLike,
  deletePost,
  getPosts,
} from "../../redux/actions/post";
import { AiFillLike, AiFillDislike, AiFillDelete } from "react-icons/ai";

export default function PostItem({ post, showActions = true }) {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state);

  const { _id, text, name, avatar, user, likes, comments, date } = post;
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img class="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p class="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {showActions && (
          <Fragment>
            <button
              onClick={async (e) => {
                await dispatch(addLike(_id));
                dispatch(getPosts());
              }}
              type="button"
              class="btn btn-light"
            >
              <AiFillLike />
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={async (e) => {
                await dispatch(removeLike(_id));
                dispatch(getPosts());
              }}
              type="button"
              class="btn btn-light"
            >
              <AiFillDislike />
            </button>
            <Link to={`/posts/${_id}`} class="btn btn-primary">
              Discussion{" "}
              {comments.length > 0 && (
                <span class="comment-count">{comments.length}</span>
              )}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                onClick={async (e) => {
                  await dispatch(deletePost(_id));
                  dispatch(getPosts());
                }}
                type="button"
                class="btn btn-danger"
              >
                <AiFillDelete />
              </button>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
}
