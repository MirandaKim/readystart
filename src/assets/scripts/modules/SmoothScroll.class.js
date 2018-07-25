import $ from 'jquery';

/****************************************************/
/*                                                 */
/*   Smooth Scroll (SmoothScroll.class.js)        */
/*                                               */
/************************************************/
/*

  - When an anchor link is triggered, the page scrolls to the selected content.
  - Applies to all links beginning with a hash (#)
  - URL updates and the element focus is maintained
  - originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

  - Entry point: static function SmoothScroll.setEvents()
  - See # Config for set and get options

  ***********
  * Content *
  ***********

    # Constructor

    # Config
      > Scroll Time

    # Public
      > Set Events

    # Protected
      > Enable Smooth Scroll
      > Set Link Click Event
      > Handle Link Click
      > Change Focus To Target
      > Utilities

    # Export

*/

class SmoothScroll {

  /**************************************/
  /*   # Constructor                   */
  /************************************/

  constructor(scrollTime) {
    this._scrollTime = 1000; // default animation time to scroll to target content (milliseconds)
  }

  /**************************************/
  /*   # Config                        */
  /************************************/
  /*
  Adjust Smooth Scroll configurations before running entry point setEvents()
  */

  /*********************
   *   > Scroll Time   *
   ********************/
   /*default animation time to scroll to target content (milliseconds)*/

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
   /*ENTRY POINT*/
  setEvents() {
    this._enableSmoothScroll();
  }

  /**************************************/
  /*   # Protected                     */
  /************************************/

  _enableSmoothScroll() {
    // URL updates and the element focus is maintained
    // originally found via in Update 3 on http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links

    var locationPath = this._filterPath(location.pathname);
    for (let link of $('a[href*="#"]')) { // all local anchor links: links starting with '#'
      let validLink = this._isValidLink(link, locationPath);
      if (validLink) {
        this._setLinkClickEvent(link);
      }
    }
  }

  _isValidLink(link, locationPath) {
    let linkPath = this._filterPath(link.pathname) || locationPath;
    let hash = link.hash;
    return $(hash).length &&
      locationPath == linkPath &&
      (location.hostname == link.hostname || !link.hostname) &&
      link.hash.replace(/#/, '');
  }

  /******************************
   *   > Set Link Click Event   *
   *****************************/
  _setLinkClickEvent(link) {
    let targetId = link.hash;
    $(link).click((event) => {
      this._handleLinkClick(targetId);
    });
  }

  /***************************
   *   > Handle Link Click   *
   **************************/
  _handleLinkClick(targetId) {
    event.preventDefault(); // stop the link from doing what links do
    /*
    Animate the body to the target location,
    then manually change the focus to the target content.
    */
    $('html, body').animate({
      scrollTop: $(targetId).offset().top
    }, this._scrollTime, () => {
      this._changeFocusToTarget(targetId);
    });
  }

  /********************************
   *   > Change Focus To Target   *
   *******************************/

  _changeFocusToTarget(targetId) {
    let targetNode = $(targetId);
    location.hash = targetId;
    targetNode.focus();
    if (targetNode.is(":focus")) { //checking if the target content was focused
      return false;
    } else {
      targetNode.attr('tabindex', '-1'); //Adding tabindex for elements not focusable
      targetNode.focus(); //Setting focus
    };
  }

  /*******************
   *   > Utilities   *
   ******************/
  // filter handling for a /dir/ OR /indexordefault.page
  _filterPath(pathString) {
    return pathString
      .replace(/^\//, '')
      .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
      .replace(/\/$/, '');
  }

}

/**************************************/
/*   # Export                        */
/************************************/

export default SmoothScroll;
