import React from "react";
import Header from "../Headers/Home";
import { Outlet } from "react-router";

const HomeLayouts = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <section className="left-sidebar"></section>
        <section className="content">
          <Outlet></Outlet>{" "}
        </section>
        <section className="right-sidebar"></section>
      </main>
    </div>
  );
};

export default HomeLayouts;
