import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Alert = () => {
  const { alerts } = useSelector((state) => state);

  if (!!alerts.length) {
    return alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ));
  }
  return null;
};
