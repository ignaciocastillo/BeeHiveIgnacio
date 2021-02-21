class MainComponent extends Component{
    constructor(parent, className, appManager) {
        super(parent, className, appManager);
        this.navbar = new NavbarComponent(this.container, 'navbarComponent', this.appManager);
        this.content = div({'className' : 'mainComponent_content'}, this.container, null);
        this.beesComponent = null;

    }
        showBees() {
            this.beesComponent =  new BeesComponent(this.content, 'beesComponent', this.appManager);
            this.content.style.Height = (this.container.clientHeight - this.appManager.uiManager.navbarHeight) 
            + 'px';

    }
}