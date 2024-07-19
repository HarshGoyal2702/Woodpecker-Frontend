import React from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card"
const Carousel = () => (
  <div className=" my-[30px] py-9 bg-slate-800">
  <Marquee pauseOnHover={false} speed={100}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Marquee></div>
);
export default Carousel ;