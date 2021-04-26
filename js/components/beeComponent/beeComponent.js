class BeeComponent extends Component {
    constructor(parent, className, appManager, model) {
        super(parent, className, appManager, model);
        this.addUI();
        this.name = null;
        this.username = null;
        this.email = null;
        this.phone = null;

    }

    addUI() {
        this.name = p({ 'innerHTML': this.model.name, 'className': 'beeName' }, this.container, null);
        this.username = p({ 'innerHTML': `${'Username: '} ${this.model.username}`, 'className': 'beeUsername' }, this.container, null);
        this.email = p({ 'innerHTML': `${'Email: '} ${this.model.email}`, 'className': 'beeEmail' }, this.container, null);
        this.phone = p({ 'innerHTML': `${'Phone: '} ${this.model.phone}`, 'className': 'beePhone' }, this.container, null);
    }
}