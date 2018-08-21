import 'babel-polyfill';
import axios from 'axios';


class Comment {

    constructor(name, surname, photo, content){
        this._name = name;
        this._surname = surname;
        this._photo = photo;
        this._content = content;
        this.createElements();
        this.appendChilds();
        this.addContent();
        this.addStyles();
    }

    createElements(){
        this.section = document.createElement('div');
        this.photoWrapper = document.createElement('div');
        this.articleWrapper = document.createElement('div');
        this.photo = document.createElement('img');
        this.article = document.createElement('div');
        this.p1 = document.createElement('p');
        this.hr = document.createElement('HR');
        this.p2 = document.createElement('p');
    }
    appendChilds(){
        this.container = document.querySelector('.sn2-posts-container');
        this.container.appendChild(this.section);
        this.section.appendChild(this.photoWrapper);
        this.section.appendChild(this.articleWrapper);
        this.photoWrapper.appendChild(this.photo);
        this.articleWrapper.appendChild(this.article);
        this.article.appendChild(this.p1);
        this.article.appendChild(this.hr);
        this.article.appendChild(this.p2);
    }
    addContent(){
        this.p1.innerHTML = this._name + ' ' + this._surname;
        this.p2.innerHTML = this._content;
        this.photo.src = this._photo;
    }
    
    addStyles(){
        this.section.classList.add('sn2-posts-article');
        this.photo.classList.add('sn2-posts-img');
        this.photoWrapper.classList.add('sn2-posts-imgWrapper');
        this.articleWrapper.classList.add('sn2-posts-articleWrapper');
        this.article.classList.add('sn2-posts-articleContent');
    }

}

class CommentControler{

    getData(){

        axios
    .get("https://api.myjson.com/bins/ut7i8")
    .then(function(response) {
        response.data.usersComments.map(n => {
            new Comment(n.name, n.surname, n.photo, n.content);   
        });
    });
       
    }

}

new CommentControler().getData();