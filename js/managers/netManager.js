class NetManager {
  constructor(appManager) {
    this.appManager = appManager;
    this.urlBase = "https://beehiveignacio-default-rtdb.firebaseio.com/data/";
  }

  downloadData(endPoint, callback) {
    console.log("Downloading: ", endPoint);
    var request = new XMLHttpRequest();
    var url = this.urlBase + endPoint;
    request.onreadystatechange = this.onRequest.bind(this, callback);
    request.open('GET', url);
    request.send();
  }

  onRequest(callback, e) {
    var request = e.target;
    if (request.readyState == 4) {
      if (request.status == 200) {
        var data = JSON.parse(request.response);
        callback(data);
      } else {
        console.error('Error on request', request.status);
      }

    }
  }


  fetchBees(callback) {
    this.downloadData('users.json', this.parseBees.bind(this));
  }

  fetchPosts() {
    this.downloadData('posts.json', this.parsePosts.bind(this));
  }

  fetchComments() {
    this.downloadData('comments.json', this.parseComments.bind(this));
  }

  fetchTodos() {
    this.downloadData('todos.json', this.parseTodos.bind(this));
  }

  fetchAlbums() {
    this.downloadData('albums.json', this.parseAlbums.bind(this));
  }

  fetchPhotos() {
    this.downloadData('photos.json', this.parsePhotos.bind(this));
  }

  parseBees(data) {
    data.forEach(user => {

      var geo = new Geo(user.address.geo.lat, user.address.geo.lng);
      var address = new Address(user.address.city, geo, user.address.street, user.address.suite, user.address.zipcode);
      var company = new Company(user.company.bs, user.company.catchPhrase, user.company.name);
      var bee = new Bee(user.id, user.name, user.username, user.email, address, user.isOwner, user.phone, user.website, user.company);
      this.appManager.dataManager.bees.push(bee);
    });
    this.fetchComments();

  }

  parseComments(data) {
    data.forEach(comment => {
      //console.log(comment);
    });

    this.fetchPosts();


  }

  parsePosts(data) {
    data.forEach(post => {
      //console.log(post);
    });
    this.fetchTodos();

  }

  parseComments(data) {
    data.forEach(comment => {
      //console.log(comment);
    });
    this.fetchTodos();

  }

  parseTodos(data) {
    data.forEach(todo => {
      //console.log(todo);
    });
    this.fetchAlbums();
  }

  parseAlbums(data) {
    data.forEach(album => {
      //console.log(album);
    });
    this.fetchPhotos();

  }

  parsePhotos(data) {
    data.forEach(photo => {
      //console.log(photo);
    });
    this.appManager.uiManager.showUI();
  }

}