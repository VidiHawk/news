import React from "react";
import "../css/sidebar.css";

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <div id="sidebar">
          <div id="legend">
            <div id="legend-content">
              <div class="line">Estimated Population (Census Block):</div>

              <div class="line">
                <div class="av" id="pop_0">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">0&nbsp;-&nbsp;100</div>
              </div>
              <div class="line">
                <div class="av" id="pop_100">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">100&nbsp;-&nbsp;200</div>
              </div>
              <div class="line">
                <div class="av" id="pop_200">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">200&nbsp;-&nbsp;400</div>
              </div>
              <div class="line">
                <div class="av" id="pop_400">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">400&nbsp;-&nbsp;800</div>
              </div>
              <div class="line">
                <div class="av" id="pop_800">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">800&nbsp;-&nbsp;1600</div>
              </div>
              <div class="line">
                <div class="av" id="pop_1600">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">1600&nbsp;-&nbsp;3200</div>
              </div>
              <div class="line">
                <div class="av" id="pop_3200">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">3200&nbsp;-&nbsp;6400</div>
              </div>
              <div class="line">
                <div class="av" id="pop_6400">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">6400&nbsp;-&nbsp;12800</div>
              </div>
              <div class="line">
                <div class="av" id="pop_12800">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">more&nbsp;than&nbsp;12800</div>
              </div>
            </div>
          </div>

          <div id="cbs" class="desktop">
            <div id="cbs-content">
              <div class="line">Visible&nbsp;Districts:</div>

              <div class="line">
                <input type="checkbox" id="cb1" class="cbn" checked />
                <span>&nbsp;Lower Manhattan</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb2" class="cbn" checked />
                <span>&nbsp;West Village</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb3" class="cbn" checked />
                <span>&nbsp;East Village</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb4" class="cbn" checked />
                <span>&nbsp;Midtown West</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb5" class="cbn" checked />
                <span>&nbsp;Midtown</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb6" class="cbn" checked />
                <span>&nbsp;Midtown East</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb7" class="cbn" checked />
                <span>&nbsp;Upper West Side</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb8" class="cbn" checked />
                <span>&nbsp;Upper East Side</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb9" class="cbn" checked />
                <span>&nbsp;West Harlem</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb10" class="cbn" checked />
                <span>&nbsp;Central Harlem</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb11" class="cbn" checked />
                <span>&nbsp;East Harlem</span>
              </div>
              <div class="line">
                <input type="checkbox" id="cb12" class="cbn" checked />
                <span>&nbsp;North Manhattan</span>
              </div>
            </div>
          </div>

          <div id="statslegend">
            <div id="statslegend-content">
              <div class="line">
                Difference from Overnight Population
                <br />
                (Census Tract):
              </div>

              <div class="line">
                <div class="av" id="diff_n4000">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">less&nbsp;than&nbsp;-4000</div>
              </div>
              <div class="line">
                <div class="av" id="diff_n2000">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">-4000&nbsp;to&nbsp;-2000</div>
              </div>
              <div class="line">
                <div class="av" id="diff_n1000">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">-2000&nbsp;to&nbsp;-1000</div>
              </div>
              <div class="line">
                <div class="av" id="diff_n500">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">-1000&nbsp;to&nbsp;-500</div>
              </div>
              <div class="line">
                <div class="av" id="diff_500">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">-500&nbsp;to&nbsp;+500</div>
              </div>
              <div class="line">
                <div class="av" id="diff_2000">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">+500&nbsp;to&nbsp;+2000</div>
              </div>
              <div class="line">
                <div class="av" id="diff_4000">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">+2000&nbsp;to&nbsp;+4000</div>
              </div>
              <div class="line">
                <div class="av" id="diff_12000">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">+4000&nbsp;to&nbsp;+12000</div>
              </div>
              <div class="line">
                <div class="av" id="diff_32000">
                  &#9724;&#xFE0E;
                </div>
                <div class="caption">more&nbsp;than&nbsp;+12000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
