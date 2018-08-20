import ChatUsers from './ChatUsers';
let $ = require('jquery');
let hiddenBox = $( ".pop-up-chat" );

let chatUsers = new ChatUsers();

for(let i = 0; i < 10; i++){
    $("#person"+(i+1)).on( "click", function( event ) {
        $(hiddenBox).find(".pop-up-chat-name").text(chatUsers.name[i].innerHTML);
        hiddenBox.show();
      });
}

$(".pop-up-chat-close").on("click", function( event) {
    hiddenBox.hide();
});

