import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../redux/actions/profile";

export default function Experience({ experience }) {
  const dispatch = useDispatch();

  const experiences = experience.map((exp) => (
    <tr key={exp.id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          "Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => dispatch(deleteExperience(exp._id))}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Experience Credientials</h2>
      <table className="table">
        <thead>
          <th>Company</th>
          <th className="hide-sm">Title</th>
          <th className="hide-sm">Years</th>
          <th />
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
}
