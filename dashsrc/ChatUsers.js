import axios from "axios";

export default class ChatUsers {
  constructor() {
    this.name = [...document.querySelectorAll(".name")];
    this.status = [...document.querySelectorAll(".status")];
    this.icon = [...document.querySelectorAll(".status-dot")];
    this.setStatus();
    this.setName();
  }

  showUser = () => {
    console.log(this.name);
    console.log(this.status);
    console.log(this.icon);
  };

  setStatus = () => {
    for (let i = 0; i < this.name.length; i++) {
      let isOnline = Math.random();
      if (isOnline < 0.5) {
        this.status[i].innerText = "Online";
        this.status[i].style.color = "rgb(39, 219, 15)";
        this.icon[i].style.backgroundColor = "rgb(39, 219, 15)";
      } else {
        this.status[i].innerText = "Offline";
        this.status[i].style.color = "red";
        this.icon[i].style.backgroundColor = "red";
      }
    }
  };

  setName = () => {
    axios.get("https://randomuser.me/api/?results=10").then(res => {
      for (let i = 0; i < this.name.length; i++) {
        this.name[i].innerHTML =
          res.data.results[i].name.first.charAt(0).toUpperCase() + res.data.results[i].name.first.slice(1) + " " +
          res.data.results[i].name.last.charAt(0).toUpperCase() + res.data.results[i].name.last.slice(1);
      }
    });
  };
}
