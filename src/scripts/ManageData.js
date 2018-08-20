import axios from 'axios';
import {DisplayData} from './DisplayData';
export class ManageData {
    constructor(question, iter) {
        this.question = question,
        this.iter = iter
    }
    handleData(bigData) {
        let allDataSets=[];
        let dataForContainerFirst = bigData[this.iter];
        let dataForContainerSecond = bigData[this.iter + 1];
        let dataForContainerThird = bigData[this.iter + 2];
        let dataForContainerFourth = bigData[this.iter + 3];
        allDataSets.push(dataForContainerFirst, dataForContainerSecond, dataForContainerThird, dataForContainerFourth);
        document.querySelector('.sn001_container2').classList.add('itsClicked');
        for (let i=0;i<4;i++){
            let fillTheGaps = new DisplayData(allDataSets[i], i, this.question);
            fillTheGaps.setTextToItsContainer();
        }
    }
    sendTheRequest() {
        var its = this;
        axios.get('https://api.myjson.com/bins/x62ag')
            .then(function (response) {
                its.handleData(response.data);
            })
            .catch(function (e) {
                alert('something went wrong... ' + e);
            });
    }
}