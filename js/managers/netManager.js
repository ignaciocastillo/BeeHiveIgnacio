class NetManager {
    constructor(appManager) {
        this.appManager = appManager;
        this.urlBase = 'https://beehiveignacio-default-rtdb.firebaseio.com/data/';

    }

    downloadData() {
        console.log("Downloading data...");
        var request = new XMLHttpRequest();
        var url = this.urlBase + 'users.json';
        request.onreadystatechange = this.onUsersRequest.bind(this);
        request.open('GET', url);
        request.send();

    }

    onUsersRequest(e) {
        var request = e.target;
        if (request.status == 200) {
            if (request.readyState == 4) {
                var data = JSON.parse(request.response);
               console.log(data);
                //1. Parsed to user objects
                data.forEach(user => {
                    //create address object
                    var geo = new Geo(user.address.geo.lat,user.address.geo.lng );
                    var address = new Address(user.address.city, geo, user.address.street, user.address. suite, user.address.zipcode);

                    var company = new Company(user.company.bs, user.company.catchPhrase, user.company.name)


                    var bee = new Bee(user.id, user.name, user.username, user.email, address, user.isOwner, user.phone, user.website, user.company);
                    //console.log(bee);
                    this.appManager.dataManager.bees.push(bee);
                });
                console.log(this,this.appManager.dataManager.bees);
                this.appManager.uiManager.showBees();

            }

        } else {
            console.error('Error on request', request);
        }
    }
}