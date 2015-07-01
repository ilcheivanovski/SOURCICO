import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@inject(HttpClient)
export class API {
    heading = 'TestAPI';
    posts = [];
    url = 'http://localhost:62416/api/values';

    constructor(http) {
        this.http = http;
    }
    loadPosts() {
        this.posts = this.http.jsonp(this.url, "jsonp").content;
        return this.posts;
    }
    activate() {
        return this.loadPosts();
    }

    canDeactivate() {
        return confirm('Are you sure you want to leave?');
    }
}

console.log(posts);