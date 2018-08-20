import ChatUser from './ChatUser';
let $ = require('jquery');
let hiddenBox = $( ".pop-up-chat" );

let chatUser1 = new ChatUser(1);
let chatUser2 = new ChatUser(2);
let chatUser3 = new ChatUser(3);
let chatUser4 = new ChatUser(4);
let chatUser5 = new ChatUser(5);
let chatUser6 = new ChatUser(6);
let chatUser7 = new ChatUser(7);
let chatUser8 = new ChatUser(8);
let chatUser9 = new ChatUser(9);
let chatUser10 = new ChatUser(10);

let personListName = [chatUser1.name.innerHTML, chatUser2.name.innerHTML, chatUser3.name.innerHTML, chatUser4.name.innerHTML,
     chatUser5.name.innerHTML, chatUser6.name.innerHTML, chatUser7.name.innerHTML, chatUser8.name.innerHTML,
     chatUser9.name.innerHTML, chatUser10.name.innerHTML];

for(let i = 0; i < 10; i++){
    $("#person"+(i+1)).on( "click", function( event ) {
        $(hiddenBox).find(".pop-up-chat-name").text(personListName[i]);
        hiddenBox.show();
      });
}

$(".pop-up-chat-close").on("click", function( event) {
    hiddenBox.hide();
});

