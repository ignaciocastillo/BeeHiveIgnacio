class UIManager{
    constructor(appManager){
        this.appManager = AppManager;
              
        this.mainComponent = new MainComponent(document.body, 'mainComponent', this.appManager);
        this.loadingComponent = new LoadingComponent(document.body, 'loadingComponent', this.AppManager);
        
    }

    showBees(){
        this.loadingComponent.hide();
    }
}