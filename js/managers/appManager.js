class AppManager{
    constructor(){
        console.log('AppManager running!');

        const netManager = new NetManager(this);
        const dataManager = new DataManager(this);
        const uiManager = new UIManager(this);


    }
}