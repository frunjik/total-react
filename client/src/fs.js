import { HttpClient } from './http.js';

const server = 'http://192.168.2.12:8000/';

export class FileSystem {

  constructor() {
    //super();  ??
    this.http = new HttpClient();
  }

  search(filter, success, failure) {
    this.http.get(server + 'api/folders?name=' + filter, success, failure);
  }

  load(filename, success, failure) {
    this.http.get(server + 'api/getfile?name=' + filename, success, failure);
  }

  save(filename, contents, success, failure) {
    this.http.post(server + 'api/putfile?name=' + filename, contents, success, failure);
  }
}