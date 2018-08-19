export default class DOMLoader {
    constructor() {
        this.name = document.querySelectorAll(".news-box .news-list .news .name");
        this.content = document.querySelectorAll(".news-box .news-list .news .content");
        this.activity = document.querySelectorAll(".news-box .news-list .news .activity");
        this.arrayNames = Array.from(this.name);
        this.arrayContents = Array.from(this.content);
        this.arrayActivities = Array.from(this.activity);
        this.contents = ['post', 'photo', 'site'];
        this.activities = ['likes', 'comments', 'shares'];
    }
}