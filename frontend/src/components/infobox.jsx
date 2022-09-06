import React from "react";
import "../css/infobox.css";

class InfoBox extends React.Component {
  render() {
    return (
      <div className="info">
        <div className="desktop">
          <div id="info-header"></div>

          <div id="info-content">
            <div id="info-popgraph"></div>

            <div id="info-ntatype" className="param">
              <div id="info-ntatype-value" className="param-value"></div>
              <div id="info-ntatype-caption" className="param-caption">
                Import/Export Type:
              </div>
            </div>

            <div id="info-ntaflux" className="param">
              <div id="info-ntaflux-value" className="param-value"></div>
              <div id="info-ntaflux-caption" className="param-caption">
                Daytime Change:
              </div>
            </div>

            <div id="info-ntapopcurr" className="param">
              <div id="info-ntapopcurr-value" className="param-value"></div>
              <div id="info-ntapopcurr-caption" className="param-caption">
                Estimated Population:
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoBox;
