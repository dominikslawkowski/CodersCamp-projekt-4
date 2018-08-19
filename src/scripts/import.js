import axios from 'axios';
export class SetPhoto {
    constructor(element, i) {
        this.iter = i,
        this.element = document.querySelectorAll(element)[i]
    }
    setAvatar(url) {
        url = "background-image: url(\'"+url+"\')";
        this.element.setAttribute('style', url);
    }
}
export class SetNameSurname {
    constructor(element, i) {
        this.iter = i,
        this.element = document.querySelectorAll(element)[i];
    }
    setNameSurname(nameSurname) {
        this.element.innerText=nameSurname;
    }
}
export class SetPost {
    constructor(element, i) {
        this.iter = i,
        this.element = document.querySelectorAll(element)[i];
    }
    setPost(post, string) {
        this.element.innerText = post.substr(0, post.length - string.length) + string + post.substr(post.length-string.length, string.length);
    }
}
export class SetDate {
    constructor(element, i) {
        this.iter = i,
        this.element = document.querySelectorAll(element)[i];
    }
    setDate(date) {
        this.element.innerText = date;
    }
}
export class SetTags {
    constructor(element, i) {
        this.iter = i,
        this.element = document.querySelectorAll(element)[i];
    }
    setTags(tags) {
        for (let j=0;j<3;j++){
            this.element.querySelectorAll('div')[j].innerText = '#'+tags[j];
        }
    }
}
export class GetData {
    constructor(i,j){
        this.iter=i,
        this.counter=j;
    }
    consoleData(pictureURL, name, post, tags, date, string) {
        let photoSet = new SetPhoto('.imag', this.iter);
        photoSet.setAvatar(pictureURL);
        let newUser = new SetNameSurname('.sn001_container2_post_intro_head_author', this.iter);
        newUser.setNameSurname(name);
        let newPost = new SetPost('p', this.iter);
        newPost.setPost(post, string);
        let newDate = new SetDate('.sn001_container2_post_intro_head_date', this.iter);
        newDate.setDate(date);
        let newTags = new SetTags('.sn001_container2_post_intro_head_tags', this.iter)
        newTags.setTags(tags);
    }
    dataSet(string) {
        var its = this;
        axios.get('http://www.json-generator.com/api/json/get/cqIeLWkuuW?indent=2')
            .then(function (response) {
                let lotOfData = response.data;
                let pictureURL = lotOfData[its.iter]['picture'];
                let name = lotOfData[its.iter]['name'];
                let post = lotOfData[its.iter]['about'];
                let tags = lotOfData[its.iter]['tags'];
                let date = lotOfData[its.iter]['registered'];
                its.consoleData(pictureURL, name, post, tags, date, string);
            })
            .catch(function (error) {
                return 'something went wrong...';
            });
    }
}