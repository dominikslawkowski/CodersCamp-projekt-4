'use strict';
export class DisplayData {
    constructor(singularDataSet, numberOfContainer, question){
        this.question =question,
        this.data = singularDataSet,
        this.i = numberOfContainer,
        this.article = document.querySelectorAll('.sn001_container2_postwrapper')[this.i],
        this.author = this.article.querySelector('.sn001_container2_post_intro_head_author'),
        this.date = this.article.querySelector('.sn001_container2_post_intro_head_date'),
        this.photo = this.article.querySelector('.sn001_container2_post_image .sn001_imag'),
        this.post = this.article.querySelector('.sn001_container2_post_intro_body_paragraph'),
        this.tagContainer = this.article.querySelector('.sn001_container2_post_intro_head_tags'),
        this.tags = this.tagContainer.querySelectorAll('.sn001_hashtag')
    }
    setTextToItsContainer() {
        this.author.innerText = this.data['name'];
        this.photo.setAttribute('style', 'background-image: url(' + this.data['picture'] + ')')
        this.date.innerText = this.data['registered'];
        for (let i = 0; i <3; i++) {
            this.tags[i].innerText = '#'+this.data['tags'][i];
        }
        this.setParagraphWithFakeSearchValue();
    }
    setParagraphWithFakeSearchValue(){
        let parag = this.question;
        let fulltxt = this.data['about'];
        let x = Math.floor((Math.random() * fulltxt.length)-10);
        this.post.innerHTML = fulltxt.substring(0, x) + '<span style="background-color: rgba(255,0,0,0.3)">' + parag + '</span>' + fulltxt.substring(x, fulltxt.length);
    }
}
 