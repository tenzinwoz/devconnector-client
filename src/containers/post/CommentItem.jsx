import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { deleteComment } from "../../redux/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

export default function CommentItem({
  postId,
  comment: { _id, text, name, avatar, user, date },
}) {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

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
          <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => dispatch(deleteComment(postId, _id))}
            type="button"
            className="btn btn-danger"
          >
            <AiFillDelete />
          </button>
        )}
      </div>
    </div>
  );
}
