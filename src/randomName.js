import 'babel-polyfill';
import DOMLoader from './DOMLoader.js';
import axios from 'axios';

export default class RandomName {
      // createName(item, randomUser) {
      //   item.innerHTML = randomUser.results[0].name.first[0].toUpperCase() + randomUser.results[0].name.first.substr(1) + ' ' 
      //   + randomUser.results[0].name.last[0].toUpperCase() + randomUsser.results[0].name.last.substr(1);
      // }
      changeText(item) {
        var thiss = this;
        axios.get('https://randomuser.me/api')
        .then(function (response) {
          // thiss.createName(item, response.data)
            item.innerHTML = response.data.results[0].name.first[0].toUpperCase() + response.data.results[0].name.first.substr(1) + ' ' 
            + response.data.results[0].name.last[0].toUpperCase() + response.data.results[0].name.last.substr(1);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
      fillNames() {
        var domLoader = new DOMLoader();
        domLoader.arrayNames.forEach(this.changeText);
      }
}