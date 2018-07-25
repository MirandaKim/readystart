import $ from 'jquery';

/****************************************************/
/*                                                 */
/*   Check Has Touch                              */
/*                                               */
/************************************************/
/*

  - Watch for touch event by user.
  - When the initial touch event is fired, the "has-no-touch" class will
    be swapped for the "has-touch" class. The detect event is then unbound,
    so it does not continue to wait for a touch event.
  - A "waiting-for-touch" class is also included, and will be removed on touch event.
  - Classes names are applied to the html tag


  *************
  * Contents: *
  *************

  # Constructor
  # Adjust Properties
  # Public
      > Detect Touch
  # Protected
      > Handle Touch
  # Export

*/

class CheckHasTouch {

  /**************************************/
  /*   # Constructor                   */
  /************************************/

  constructor(){
    this._waitingForTouchClass = "waiting-for-touch";
    this._addClassOnTouch = "has-touch";
    this._removeClassOnTouch = "has-no-touch";
  }

  /**************************************/
  /*   # Adjust Properties             */
  /************************************/

  get waitingForTouchClass(){return _waitingForTouchClass;}
  set waitingForTouchClass(classStr){this._waitingForTouchClass = classStr;}

  get addClassOnTouch(){return _addClassOnTouch;}
  set addClassOnTouch(classStr){this._addClassOnTouch = classStr;}

  get removeClassOnTouch(){return _removeClassOnTouch;}
  set removeClassOnTouch(classStr){this._removeClassOnTouch = classStr;}

  /**************************************/
  /*   # Public                        */
  /************************************/

  /********************
  *  > Detect Touch   *
  ********************/

  detect(){
    let target = $('html')
    target.addClass(this._waitingForTouchClass);
    target.addClass(this._removeClassOnTouch);
    $(window).on('touchstart', ()=>{
      this._handleTouch(target);
    });
  }

  /**************************************/
  /*   # Protected                     */
  /************************************/

  /********************
  *  > Handle Touch   *
  ********************/

  _handleTouch(target){
    target.addClass(this._addClassOnTouch);
    target.removeClass(this._removeClassOnTouch);
    $(window).unbind('touchstart');
  }
}

/**************************************/
/*   # Export                        */
/************************************/

export default CheckHasTouch;
