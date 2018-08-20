import axios from 'axios';

export default class ChatUser {
  constructor(id) {
    this.name = document.querySelector("#person" + id + " .name");
    this.status = document.querySelector("#person" + id + " .status");
    this.icon = document.querySelector("#person" + id + " .status-dot");
    this.setStatus();
    this.setName();
  }

  showUser = () => {
    console.log(this.name);
    console.log(this.status);
    console.log(this.icon);
  };

  setStatus = () => {
    let isOnline = Math.random();
    if (isOnline < 0.5) {
        this.status.innerText = "Online";
        this.status.style.color = "rgb(39, 219, 15)";
        this.icon.style.backgroundColor = "rgb(39, 219, 15)"
    } else {
        this.status.innerText = "Offline";
        this.status.style.color = "red";
        this.icon.style.backgroundColor = "red"
    }
  };

  setName = () => {
    axios.get("https://randomuser.me/api/").then(res => {
        this.name.innerHTML=res.data.results[0].name.first +' '+ res.data.results[0].name.last;
    });
  };
}
