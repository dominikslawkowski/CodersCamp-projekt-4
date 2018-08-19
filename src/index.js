// const name = document.querySelectorAll(".news-box .news-list .news .name");
// const content = document.querySelectorAll(".news-box .news-list .news .content");
// const activity = document.querySelectorAll(".news-box .news-list .news .activity");
// const arrayNames = Array.from(name);
// const arrayContents = Array.from(content);
// const arrayActivities = Array.from(activity);
// const contents = ['post', 'photo', 'site'];
// const activities = ['likes', 'comments', 'shares'];
// let randomuser;

// function createName(item, randomuser) {
//   item.innerHTML = randomuser.results[0].name.first[0].toUpperCase() + randomuser.results[0].name.first.substr(1) + ' ' 
//   + randomuser.results[0].name.last[0].toUpperCase() + randomuser.results[0].name.last.substr(1);
// }

// function changeText(item) {
//   axios.get('https://randomuser.me/api')
//   .then(function (response) {
//     randomuser = response.data;
//     createName(item, randomuser);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }


// function fillNames() {
//   arrayNames.forEach(changeText);
// }

// function changeContent(item) {
//   let number = Math.floor(Math.random()*3);
//   item.innerHTML = contents[number];
// }

// function fillContents() {
//   arrayContents.forEach(changeContent)
// }

// function changeActivity(item) {
//   let number = Math.floor(Math.random()*3);
//   item.innerHTML = activities[number];
// }

// function fillActivities() {
//   arrayActivities.forEach(changeActivity)
// }



import 'babel-polyfill';
import RandomName from './randomName.js';
import RandomContent from './randomContent.js';
import RandomActivity from './randomActivity.js';


window.addEventListener("pageshow", function() {
  const randomName = new RandomName();
  const randomContent = new RandomContent();
  const randomActivity = new RandomActivity();

  randomName.fillNames();
  randomContent.fillContents();
  randomActivity.fillActivities();
});