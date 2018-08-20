import 'babel-polyfill';
import axios from 'axios';

const login = document.querySelector("#login");
const password = document.querySelector("#password");
document.querySelector("#btn").addEventListener("click", loginn);


function loginn() {
  axios
    .get("https://api.myjson.com/bins/6iwyw")
    .then(function(response) {
      validation(response.data);
    })
    .catch(function(error) {
      console.log(error);
    }); 
}

function validation(data){
  data.forEach(element => {
    console.log(element.login);
    if(login.value==element.login && password.value == element.password){
      redirectToDashboard();
    }
  });
}

function redirectToDashboard(){
  window.location.replace("");
}