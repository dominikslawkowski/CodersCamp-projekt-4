// import 'babel-polyfill';
import DOMLoader from './DOMLoader.js';
import axios from 'axios';

export default class RandomName {
      // createName(item, randomUser) {
      //   item.innerHTML = randomUser.results[0].name.first[0].toUpperCase() + randomUser.results[0].name.first.substr(1) + ' ' 
      //   + randomUser.results[0].name.last[0].toUpperCase() + randomUsser.results[0].name.last.substr(1);
      // }
      changeText(domLoader) {
        axios.get('https://randomuser.me/api/?results=10&inc=name&noinfo')
        .then(function (response) {
            for(let i=0;i<10;i++)
            {
              domLoader.name[i].innerHTML = response.data.results[i].name.first[0].toUpperCase() + response.data.results[i].name.first.substr(1) + ' ' 
              + response.data.results[i].name.last[0].toUpperCase() + response.data.results[i].name.last.substr(1);
            }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
      fillNames() {
        var domLoader = new DOMLoader();
        this.changeText(domLoader);
      }
}