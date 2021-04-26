class Component {
    constructor(parent, className, appManager, model) {
        this.parent = parent;
        this.appManager = appManager;
        this.model = model;
<<<<<<< HEAD
        this.container = div({ 'className': className }, this.parent, null);
    }
=======
>>>>>>> parent of f13f391 (Commit)


    hide() {
        this.container.hidden = true;
        this.container.classList.add('hidden');
    }

    show() {
        this.container.hidden = false;
        this.container.classList.remove('hidden');
    }
}