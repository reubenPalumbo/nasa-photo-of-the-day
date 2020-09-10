import React, { useState, useEffect } from "react";
import Mainhead from "./mainhead";
import Image from "./image";
import Axios from "axios";

const API_BASE = "https://api.nasa.gov/planetary/apod?api_key=";
const API_KEY = "HsmAddG7TKEF1bvDfulZnYhIyEtlsxXZWR9FUl8O";

export default function Main() {
  const [temp, setTemp] = useState(null);
  const [apiDate, setApiDate] = useState("");

  useEffect(() => {
    Axios.get(`${API_BASE}${API_KEY}${apiDate}`)
      .then((incom) => {
        // console.log(incom.data);
        setTemp(incom.data);
      })
      .catch((err) => {
        console.log("Failed");
      });
  }, [apiDate]);

  function newDate() {
    let newNum1 = Math.round(Math.random() * 20) + 1;
    let newNum2 = Math.round(Math.random() * 12) + 1;
    let newNum3 = Math.round(Math.random() * 28) + 1;

    let newDateArr = [];

    if (newNum1 < 10) {
      newDateArr[0] = `200${newNum1}`;
    } else {
      newDateArr[0] = `20${newNum1}`;
    }

    if (newNum2 < 10) {
      newDateArr[1] = `0${newNum2}`;
    } else {
      newDateArr[1] = `${newNum2}`;
    }

    if (newNum3 < 10) {
      newDateArr[2] = `0${newNum3}`;
    } else {
      newDateArr[2] = `${newNum3}`;
    }

    console.log("Worked");
    return setApiDate(
      `&date=${newDateArr[0]}-${newDateArr[1]}-${newDateArr[2]}`
    );
  }

  function todayDate() {
    setApiDate("");
  }

  if (temp === null) {
    return (
      <section className="main">
        <h3>Loading Data...</h3>
        <h3>Please Wait</h3>
      </section>
    );
  }
  return (
    <section className="main">
      <Mainhead
        title={temp.title}
        descript={temp.explanation}
        date={temp.date}
        newDate={newDate}
        todayDate={todayDate}
      />
      <Image imageSrc={temp.url} />
    </section>
  );
}
