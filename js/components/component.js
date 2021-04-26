class Component {
    constructor(parent, className, appManager, model) {
        this.parent = parent;
        this.appManager = appManager;
        this.model = model;

        this.container = div({
            'className': className
        }, this.parent, null)
    }

    hide() {
        this.container.hidden = true;
        this.container.classList.add('hidden');
    }

    show() {
        this.container.hidden = false;
        this.container.classList.remove('hidden');
        this.moveIn();
    }

    moveIn() {
        gsap.to(this.container, {
            duration: 1,
            x: 0,
        });
    }

    moveOut() {
        gsap.to(this.container, {
            duration: 1,
            x: window.innerWidth,
            onComplete: this.hide.bind(this)
        });
    }
}