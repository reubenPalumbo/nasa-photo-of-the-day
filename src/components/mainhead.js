import React from "react";
import styles from "styled-components";

const Header = styles.div`
  width: 50%;
  min-height: 7vh;
  background-color: #282c34;
  color: white;
  width: auto;
  margin: 0% auto 2%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 1% 5%; 

  p{
    text-align: left;
  }
  span{
    font-weight: bold;
    font-size: 1.3rem;
  }
  h2 {
    margin: 1% 0;
    font-size: 2rem;
  }
`;

const ButtonDate = styles.button`
  background-color: grey;
  color: black;
  border-radius: 10px;
  padding: 2%; 
  margin: 2% 1%;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 2px;

  &:hover{
    transition: background-color 1s ease-in-out;
    transition: color .5s ease-in-out;
    background-color: black;
    color: white;
  }

`;

export default function Mainhead({
  title,
  descript,
  date,
  newDate,
  todayDate,
}) {
  return (
    <>
      <ButtonDate onClick={newDate}>NEW DATE</ButtonDate>
      <ButtonDate onClick={todayDate}>TODAY'S DATE</ButtonDate>
      <Header className="mainhead">
        <h2>{title}</h2>
        <h2>Date: {date}</h2>
        <p>
          <span>Explanation-</span> {descript}
        </p>
      </Header>
    </>
  );
}
