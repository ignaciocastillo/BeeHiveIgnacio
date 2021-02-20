class Component{
    constructor(parent, className, appManager){
        this.parent = parent;
        this.className =  className;
        this.appManager =  appManager;

        this.container = div({'className': className }, this.parent, null);
    }
}