import React from "react";

export default function NavigationHeader({ title, day }) {
  return (
    <div>
      <button>Icon</button>
      <div>
        <h2>{title}</h2>
        <h3>{day}</h3>
      </div>
      <button>Icon</button>
    </div>
  );
}
