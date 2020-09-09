import React, { useState, useEffect } from "react";
import Mainhead from "./mainhead";
import Image from "./image";
import Axios from "axios";

const API_BASE = "https://api.nasa.gov/planetary/apod?api_key=";
const API_KEY = "HsmAddG7TKEF1bvDfulZnYhIyEtlsxXZWR9FUl8O";

export default function Main() {
  const [temp, setTemp] = useState("");
  useEffect(() => {
    Axios.get(`${API_BASE}${API_KEY}`)
      .then((incom) => {
        console.log(incom.data);
        setTemp(incom.data);
      })
      .catch((err) => {
        console.log("Failed");
      });
  }, []);
  return (
    <section className="main">
      <Mainhead title={temp.title} />
      <Image imageSrc={temp.url} />
    </section>
  );
}
