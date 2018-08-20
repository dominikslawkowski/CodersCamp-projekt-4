import {
    DisplayData
} from "./DisplayData";

'use strict';
export class HideData {
    constructor() {
        this.btn = document.querySelector('.sn001_container2_controlpanel');
        this.empty = {
            name: '',
            about: '',
            registered: '',
            tags: ['', '', '', '', '', '','','',''],
            picture: '',
        }
    }
    stop() {
        let its = this;
        this.btn.addEventListener('click', function () {
            for (let i = 0; i < 4; i++) {
                let clearTheGaps = new DisplayData(its.empty, i, '');
                clearTheGaps.setTextToItsContainer();
                document.querySelector('.sn001_container2').classList.remove('itsClicked');
            }
        })
    }
}