import React from "react";

export default function NavigationHeader({ title, day }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{day}</h3>
    </div>
  );
}
