import './index.scss';
import axios from 'axios';
import {
    GetData
} from './scripts/import.js';
'use strict';
class SearchPanel {
    constructor(string) {
        this.string = string;
    }
    modifyAllThings(j){
        for (let i=0; i<4; i++){
            let datas = new GetData(i,j);
            datas.dataSet(this.string);
        }
    }
}
class BtnSearcher {
    constructor(){
        this.j=0;
    }
    onClick(str, j){
        let starter = new SearchPanel(str);
        starter.modifyAllThings(j);
    }
    listenForIt(){
        let its = this;
        let button = document.querySelector('.sn001_container1_searchbutton');
        button.addEventListener('click', function(){
            let searchfield = document.querySelector('input').value;
            its.onClick(searchfield, this.j);
            this.j=this.j+1;
            this.j = this.j < 10 ? this.j : 0;
            console.log(this.j)
            document.querySelector('.sn001_container2').classList.add('itsClicked');
        })
    }
}
document.addEventListener('DOMContentLoaded', function(){
    let btn = new BtnSearcher;
    btn.listenForIt();
})

