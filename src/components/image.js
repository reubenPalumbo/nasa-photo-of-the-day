import React from "react";

export default function Image({ imageSrc }) {
  return (
    <header className="image">
      <img src={imageSrc} alt="APOD" />
    </header>
  );
}
