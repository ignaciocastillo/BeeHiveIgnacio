class AppManager{
    constructor(){
        console.log('AppManager running!');

        this.netManager = new NetManager(this);
        this.dataManager = new DataManager(this);
        this.uiManager = new UIManager(this);
        this.netManager.downloadData();

        this.loadingComponent = new LoadingComponent(document.body, 'loadingComponent', this);
        this.mainComponent = new MainComponent(document.body, 'mainCOmponent', this);




    }
}