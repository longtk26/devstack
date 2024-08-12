import { UserButton } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <>
      <UserButton />
      <h1 className="h1-bold">Home</h1>
    </>
  );
};

export default Home;
