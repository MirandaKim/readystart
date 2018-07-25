import $ from 'jquery';
import waypoints from '~/node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {

  /**************************************/
  /*   # Constructor                   */
  /************************************/

  constructor(siteHeaderSelector = 'header', triggerPtSelector = 'h1', stickyClass = 'header--sticky') {
    this.siteHeader = $(siteHeaderSelector);
    this.triggerElement = $(triggerPtSelector);
    this.stickyClass = stickyClass;
  }

  /**************************************/
  /*   # Public                        */
  /************************************/

  /********************
   *   > Set Events   *
   *******************/
  /*ENTRY POINT*/
  setEvents() {
    this._createHeaderWaypoint();
  }

  /**************************************/
  /*   # Protected                     */
  /************************************/

  /********************************
   *   > Create Header Waypoint   *
   *******************************/

  _createHeaderWaypoint() {
    var config = {
      element: this.triggerElement[0],
      handler: (direction) => {
        if (direction == 'down') {
          this.siteHeader.addClass(this.stickyClass);
        } else {
          this.siteHeader.removeClass(this.stickyClass);
        }
      }
    };
    new Waypoint(config);
  }


}

/**************************************/
/*   # Export                        */
/************************************/

export default StickyHeader;
