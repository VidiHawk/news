import React from "react";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import InfoBox from "../components/infobox";
import Controls from "../components/controls";
import Map from "../components/map";

class Homepage extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <SideBar />
        <InfoBox />
        <Controls />
        <Map />
      </div>
    );
  }
}

export default Homepage;
