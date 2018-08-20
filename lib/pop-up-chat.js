"use strict";

var hiddenBox = $(".pop-up-chat");
var personName1 = void 0,
    personName2 = void 0,
    personName3 = void 0,
    personName4 = void 0,
    personName5 = void 0,
    personName6 = void 0,
    personName7 = void 0,
    personName8 = void 0,
    personName9 = void 0,
    personName10 = void 0;

var personList = [personName1, personName2, personName3, personName4, personName5, personName6, personName7, personName8, personName9, personName10];

for (var i = 0; i < 10; i++) {
    personList[i] = $("#person" + (i + 1)).find(".name").html();
}

var _loop = function _loop(_i) {
    $("#person" + (_i + 1)).on("click", function (event) {
        $(hiddenBox).find(".pop-up-chat-name").text(personList[_i]);
        hiddenBox.show();
    });
};

for (var _i = 0; _i < 10; _i++) {
    _loop(_i);
}

$(".pop-up-chat-close").on("click", function (event) {
    hiddenBox.hide();
});