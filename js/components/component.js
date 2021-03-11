class Component {
    constructor(parent, className, appManager, model) {
        this.parent = parent;
        this.appManager = appManager;
        this.model = model;
        this.container = div({ 'className': className }, this.parent, null);
    }


    hide() {
        this.container.hidden = true;
        this.container.classList.add('hidden');
    }

    show() {
        this.container.hidden = false;
        this.container.classList.remove('hidden');
    }
}