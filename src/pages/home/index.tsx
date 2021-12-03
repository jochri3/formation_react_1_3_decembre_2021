import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = (): JSX.Element => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <h1>Welcome</h1>
      <p>
        Pour voir la liste de contacts, veuillez ouvrir{" "}
        <Link to="/contacts">cet url</Link>
      </p>
    </>
  );
};

export default Home;
