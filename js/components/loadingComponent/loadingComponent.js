class LoadingComponent extends Component {
    constructor(parent, className, appManager) {
        super(parent, className, appManager);

        const text = p({ 'className': 'loadingComponent_text', 'innerHTML': 'Loading...' }, this.container, null);


    }

    hide() {
        gsap.to(this.container, { delay: 0.5, duration: 0.8, opacity: 0, onComplete: this.onCompleteHide.bind(this) });
    }

    onCompleteHide() {
        super.hide();
    }
}