import React, { useEffect } from "react";
import Nav from "./Nav";
import Details from "./Details";
import FeedForm from "./FeedForm";

const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav />
      <Details />
    </div>
  );
};

export default Dashboard;
