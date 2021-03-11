class BeesComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.addBees();
    }
    addBees() {
        const bees = this.appManager.dataManager.bees;
        bees.forEach(model => {
            const beeComponent = new BeeComponent(this.container, 'beeComponent', this.appManager, model)
        });
    }

}