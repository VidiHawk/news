import React from "react";
import "../css/header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="header">
          <div id="about-link">
            <span className="desktop">About</span>
          </div>
          <div id="legend-mobile"></div>
          <div id="modes">
            <div className="mode-selected" id="mode-story">
              <span className="desktop">Story</span>
              <span className="mobile">Story</span>
            </div>
            <div className="mode" id="mode-viz">
              <span className="desktop">Visualization</span>
              <span className="mobile">Viz</span>
            </div>
            <div className="mode" id="mode-stats">
              <span className="desktop">Statistics</span>
              <span className="mobile">Stats</span>
            </div>
          </div>
          <div id="title">
            <span className="desktop">Propaganda&nbsp;Informant</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
