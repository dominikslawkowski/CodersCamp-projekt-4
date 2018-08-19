import 'babel-polyfill';
import DOMLoader from './DOMLoader.js';

export default class RandomActivity {
    changeActivity(item) {
        var domLoader = new DOMLoader();
        let number = Math.floor(Math.random()*3);
        item.innerHTML = domLoader.activities[number];
    }
      
    fillActivities() {
        var domLoader = new DOMLoader();
        domLoader.arrayActivities.forEach(this.changeActivity)
    }
}