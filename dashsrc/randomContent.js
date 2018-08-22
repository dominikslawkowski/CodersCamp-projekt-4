// import 'babel-polyfill';
import DOMLoader from './DOMLoader.js';

export default class RandomContent {
   
    changeContent(item) {
        var domLoader = new DOMLoader();
        let number = Math.floor(Math.random()*3);
        item.innerHTML = domLoader.contents[number];
    }
  
    fillContents() {
        var domLoader = new DOMLoader();
        domLoader.arrayContents.forEach(this.changeContent)
    }
}