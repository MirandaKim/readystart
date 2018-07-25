import $ from 'jquery';
import waypoints from '~/node_modules/waypoints/lib/noframework.waypoints';
import SmoothScroll from './SmoothScroll.class';

/****************************************************/
/*                                                 */
/*   Section Change (SectionChange.class.js)      */
/*                                               */
/************************************************/
/*

  - Logic surrounding section/page changes
  - This classes uses the waypoints module for directional scroll triggers
  - Current Features:
      * Add/Remove active class from links based on scroll direction and position.

  ***********
  * Content *
  ***********

    # Constructor

    # Config
      > Scroll Offsets

    # Public
      > Set Events
      > Change Config

    # Protected
      > Set Top Waypoint
      > Set Section Waypoints

    # Export

*/

class SectionChange {

  /**************************************/
  /*   # Constructor                   */
  /************************************/

  constructor(sectionSelector = "section", activeLinkClass = "active") {
    this._atTopClass = "view--at-top";
    this._scrollDownOffset = "18%";
    this._scrollUpOffset = "-60%";
    this._sections = $(sectionSelector);
    this._activeLinkClass = activeLinkClass;
    this._scrollTime = 1000;
    this._atTopOffset = "-10%";
  }

  /**************************************/
  /*   # Config                        */
  /************************************/


  /************************
   *   > Scroll Offsets   *
   ***********************/

   get scrollDownOffset() {
     return this._scrollDownOffset;
   }
   set scrollDownOffset(offsetString){
     this._scrollDownOffset = offsetString;
   }

   get scrollUpOffset(){
     return this._scrollUpOffset;
   }
   set scrollUpOffset(offsetString){
     this._scrollUpOffset = offsetString;
   }

   get atTopClass(){
     return this._atTopClass;
   }
   set atTopClass(classStr){
    this._atTopClass = classStr;
   }

   get atTopOffset(){
     return this._atTopOffset;
   }
   set atTopOffset(offset){
     this._atTopOffset = offset;
   }

   /*******************************
    *   > Scroll Animation Time   *
    ******************************/

    get scrollTime() {
      return this._scrollTime;
    }
    set scrollTime(milliseconds) {
      this._scrollTime = milliseconds;
    }


   /**************************************/
   /*   # Public                        */
   /************************************/


  /********************
   *   > Set Events   *
   *******************/
  setEvents() {
    this._setTopWaypoint();
    // Set waypoint events
    this._setSectionWaypoints();
    // Set animate scroll
    this._setSmoothScroll();
  }

  /**************************************/
  /*   # Protected                     */
  /************************************/

  /**************************
   *   > Set Top Waypoint   *
   *************************/

   _setTopWaypoint() {
     let downConfig = {
       element: $('body')[0],
       handler: (direction) => {
         this._atTopHandler(direction);
       },
       offset: this._atTopOffset
     };
     new Waypoint(downConfig);
   }

   _atTopHandler(direction){
     let body = $('body');
     if(direction == "down"){
       body.removeClass(this._atTopClass);
     }else{
       body.addClass(this._atTopClass);
     }
   }

  /*******************************
   *   > Set Section Waypoints   *
   ******************************/

  _setSectionWaypoints() {
    for (let i = 0; i < this._sections.length; i++) {
      let downConfig = {
        element: this._sections[i],
        handler: (direction) => {
          if (direction == "down") {
            this._scrollDownHandler(i);
          }
        },
        offset: this._scrollDownOffset
      };
      new Waypoint(downConfig);
      let upConfig = {
        element: this._sections[i],
        handler: (direction) => {
          if (direction == "up") {
            this._scrollUpHandler(i);
          }
        },
        offset: this._scrollUpOffset
      }
      new Waypoint(upConfig);
    }
  }

  /****************************
   *   > Scroll Down Handler   *
   ****************************/

  _scrollDownHandler(sectionIndex) {
    this._changeActiveLink(sectionIndex);
    this._changeSectionIndicator(sectionIndex);
  }

  /**************************
   *   > Scroll Up Handler   *
   **************************/

  _scrollUpHandler(sectionIndex) {
    this._changeActiveLink(sectionIndex);
    this._changeSectionIndicator(sectionIndex);
  }

  /***************************
   *   > Change Active Link   *
   ***************************/

  _changeActiveLink(sectionIndex) {
    let sectionId = $(this._sections[sectionIndex]).attr('id');
    $('a').removeClass(this._activeLinkClass);
    $(`a[href="#${sectionId}"]`).addClass(this._activeLinkClass);
  }

  /**********************************
   *   > Change Section Indicator   *
   *********************************/

   _changeSectionIndicator(sectionIndex){
     $('body').attr('data-section', sectionIndex);
   }

  /***************************
   *   > Set Animate Scroll   *
   ***************************/

  _setSmoothScroll() {
    let smoothScroll = new SmoothScroll();
    smoothScroll.scrollTime = this._scrollTime;
    smoothScroll.setEvents();
  }

}


/**************************************/
/*   # Export                        */
/************************************/

export default SectionChange;
