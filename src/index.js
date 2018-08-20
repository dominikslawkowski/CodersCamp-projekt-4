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