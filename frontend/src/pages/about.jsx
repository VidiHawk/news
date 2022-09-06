import React from "react";
import Header from "../components/header";
import "../css/about.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div id="about-close"></div>
        <div id="about-content">
          <div id="about-header">
            Manhattan: A Tale of Two Population Extremes
          </div>
          <div id="about-text">
            <p>
              Measuring just 13 miles long by 2 miles wide, New York City's
              most-famous borough has a well-earned reputation for shoebox-sized
              apartments, shoulder-to-shoulder subway commutes, and cubicle-farm
              high-rises. Though the US Census provides a cozy estimate of 1.6
              million people calling Manhattan 'home', the island's true
              population swells considerably, like clock-work, every Monday
              through Friday. Obtaining upper bounds on the workday population
              of Manhattan is no easy task, and the NYU Wagner School has{" "}
              <a href="https://wagner.nyu.edu/files/rudincenter/dynamic_pop_manhattan.pdf">
                ballparked a peak estimate
              </a>{" "}
              of about 4 million people, representing an influx of roughly the
              population of Houston every workday. To put this in perspective,
              if Manhattan were a state, it would sit just above Oregon at{" "}
              <em>27th</em> on a list of U.S. states ranked by population every
              afternoon.
            </p>
            <p>
              Though the upper and lower bound for Manhattan's dynamic
              population provides an interesting point of conversation, the
              question of how Manhattan's population is distributed
              hour-by-hour, neighborhood-by-neighborhood is of importance to
              urban planners, public safety managers, and armchair geographers
              alike. By no means does Manhattan's population spread out evenly
              across the length of island- one can imagine the Empire State
              Building being filled to the brim with inter-state workers by late
              morning, while at the same time much of the working-age population
              of Inwood has migrated away from its sleepy uptown hamlet. Finding
              appropriate sources for estimating the dynamic population was part
              of a research project undertaken by Justin Fung while studying at
              Columbia University under the direction of former NYC
              Transportation Commissioner Lucius J. Riccio, and ultimately, a
              transit-based solution was found right under their feet.
              Considering the 'vehicle-of-choice' for most Manhattanites is one
              of the MTA's 6,500 stainless-steel subway cars, and that the
              nearly 150 stations serving Manhattan provide reasonably-uniform
              coverage across the island, it stood to reason that subway
              entrance and exit data would be a pretty good proxy for population
              distribution across the city.
            </p>

            <p>
              Using the Metropolitan Transportation Authority's freely-available{" "}
              <a href="http://web.mta.info/developers/turnstile.html">
                turnstile database
              </a>{" "}
              and{" "}
              <a href="https://spatialityblog.com/2010/07/08/mta-gis-data-update/">
                Steven Romalewski's MTA subway data in GIS format
              </a>
              , estimates for the net flows of people in and out of Manhattan
              neighborhoods were made on an hour-by-hour basis both historically
              and for future dates. A time-series analysis of this data confirms
              that usage patterns are heavily dependent on time, day, and
              location. The visualization contained herein is the realization of
              a model of these flows for a hypothetical week in late Spring. As
              you click around Manhattan, you may uncover both obvious and
              not-so-obvious patterns, and perhaps even find a good time to take
              a stress-free bike ride around the block.
            </p>

            <div id="about-credits">
              <p>
                <br />
                Design, Development, Data & Modelling -{" "}
                <a
                  href="https://www.linkedin.com/in/citrusvanilla"
                  target="_blank"
                >
                  Justin Fung
                </a>
                <br />
                Design, Layout inspiration -{" "}
                <a href="https://landscan.ornl.gov/" target="_blank">
                  Oak Ridge National Laboratory
                </a>
                ,{" "}
                <a href="https://urbica.co" target="_blank">
                  Urbica Design
                </a>
                <br />
                Map engine -{" "}
                <a href="https://www.mapbox.com/mapbox-gl-js/" target="_blank">
                  Mapbox GL JS
                </a>
                <br />
                Graphing engine - 
                <a href="https://d3js.org" target="_blank">
                  D3.js
                </a>
                <br />
                Github -{" "}
                <a
                  href="https://github.com/citrusvanilla/manhattanpopulationexplorer"
                  target="_blank"
                >
                  @citrusvanilla
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
