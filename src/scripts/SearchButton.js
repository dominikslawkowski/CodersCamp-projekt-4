import {ManageData} from './ManageData';
'use strict';
export class SearchButton {
    constructor(){
        this.btn = document.querySelector('.sn001_container1_searchbutton'),
        this.question = document.querySelector('.sn001_container1_searchfield'),
        this.counter = 0;
        this.dataSet=null
    }
    sendRequestForData(string){
        let sendRequest = new ManageData(string, this.counter);
        let its = this;
        sendRequest.sendTheRequest();
        this.counter = this.counter < 2 ? this.counter+1 : 0;
    }
    validate(string){
        if (string.trim()) {
            this.sendRequestForData(string.trim());
        }else{
            alert('Fill the field');
        }
    }
    start(){
        let context = this;
        this.btn.addEventListener('click', function(){
            context.validate(context.question.value);
        });
    }
}