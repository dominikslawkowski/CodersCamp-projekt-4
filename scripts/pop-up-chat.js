let $ = require('jquery');
let hiddenBox = $( ".pop-up-chat" );

let personName1, personName2, personName3, personName4, personName5, personName6,
personName7, personName8, personName9, personName10;

let personList = [personName1, personName2, personName3, personName4, personName5, personName6,
                personName7, personName8, personName9, personName10];

for(let i = 0; i < 10; i++){
    personList[i] = $("#person"+(i+1)).find(".name").html();
}

for(let i = 0; i < 10; i++){
    $("#person"+(i+1)).on( "click", function( event ) {
        $(hiddenBox).find(".pop-up-chat-name").text(personList[i]);
        hiddenBox.show();
      });
}

$(".pop-up-chat-close").on("click", function( event) {
    hiddenBox.hide();
});

