import React from "react";
import styles from "styled-components";

const HeaderStyle = styles.header`
  h1{
    font-size: 3rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyle className="App-header">
      <h1>Astronomy Photo of the Day</h1>
    </HeaderStyle>
  );
}
