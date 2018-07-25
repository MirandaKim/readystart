require('./Vendors');
import $ from 'jquery';

import CheckHasTouch from './modules/CheckHasTouch.class';
import NavDisplay from './modules/NavDisplay.class';
import SectionChange from './modules/SectionChange.class';
/* import StickyHeader from './modules/StickyHeader.class';*/ // (disabled)

/****************************************************/
/*                                                 */
/*   APP.js                                       */
/*                                               */
/************************************************/
/*

  - Root for all scripts
  - Available features include:
      + Detect touch event on device
      + Modernizr (via ./Vendors.js)
      + Section change on scroll and link click (using class names for active link)
      + Toggle display of menu (using class names)
      + Sticky header created on scroll (using class names)
  - Sticky Header has been disabled because the current design does not require
    the header to change on scroll, but the module should be functional if desired in future design.


  *************
  * Contents: *
  *************

  # Has No JS
  # Common Vars
  # Detect Touch
  # Navigation Display
  # Section Change
  # Sticky Header (disabled)

*/

/**************************************/
/*   # Has No JS                     */
/************************************/

document.body.classList.remove('has-no-js');

/**************************************/
/*   # Common Vars                   */
/************************************/

let mainNav_block = 'main-nav';
let mainNav_selector = `.${mainNav_block}`;

/**************************************/
/*   # Detect Touch                  */
/************************************/

/*Watch for touch event on device.
When touch event is fired, a has-touch class will replace a has-no-touch class.*/
let checkHasTouch = new CheckHasTouch();
checkHasTouch.detect(); // the watch event is unbound once a touch event is fired.

/**************************************/
/*   # Navigation Display            */
/************************************/

let body_visibleMenuClassStr = '--menu-visible';
let mainNav_visibleClassStr = `${mainNav_block}--visible`;
let mainNav_toggleSelectors = [`.site-header__menu-toggle`];
let mainNav_closeSelectors = [`${mainNav_selector}__links`, 'article', '.logo'];
let mainNav_openSelectors = [];

let navDisplay = new NavDisplay(mainNav_selector, mainNav_visibleClassStr, body_visibleMenuClassStr);
navDisplay.setEvents({ // See NavDisplay.class.js for config options.
  toggleSelectors: mainNav_toggleSelectors, // selectors for click to toggle event
  closeSelectors: mainNav_closeSelectors, // selectors for click to close event
  openSelectors: mainNav_openSelectors // selectors for click to open event
});

/**************************************/
/*   # Section Change                */
/************************************/

let section_selector = '.section';
let section_activeLinkClassStr = `active ${mainNav_block}__link--active`;

let sectionChange = new SectionChange(section_selector, section_activeLinkClassStr);
sectionChange.scrollUpOffset = "-5%";
sectionChange.scrollDownOffset="20%";
sectionChange.setEvents();


/**************************************/
/*   # Sticky Header                 */
/************************************/

/*
let header_block = 'site-header';
let header_selector = `.${header_block}`;
let sticky_triggerPtSelector = '.trigger-sticky';
let sticky_classStr = `sticky ${header_block}--sticky`;

let stickyHeader = new StickyHeader(header_selector, sticky_triggerPtSelector, sticky_classStr);
stickyHeader.setEvents();
*/
