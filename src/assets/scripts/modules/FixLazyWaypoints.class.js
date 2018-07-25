import $ from 'jquery';
import waypoints from '~/node_modules/waypoints/lib/noframework.waypoints';

class FixLazyWaypoints{

    constructor(){
        this.lazyImg = $('.lazyload');
        this._refreshWaypoints();
    }

    _refreshWaypoints(){
        this.lazyImg.on('load', () => {
            Waypoint.refreshAll();
        });
    }

}

export default FixLazyWaypoints;
