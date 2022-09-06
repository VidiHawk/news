import React from "react";
import "../css/controls.css";

class Controls extends React.Component {
  render() {
    return (
      <div>
        <div id="controls">
          <div id="slider-area-t">
            <div id="slider-t"></div>
          </div>

          <div id="slider-area-b">
            <div id="slider-b"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
