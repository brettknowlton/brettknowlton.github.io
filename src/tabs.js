class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab =>{
            tab.addEventListener('click', e=>{
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleContent(e){
        this.container.querySelectorAll('.tab-content').forEach(item =>{
            item.classList.remove('active')
        })
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }

    toggleTabs(e){
        //remove active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active')
    }

}

const tabs_list = new Tabs(document.querySelector('.tabs'));
tabs_list.init()

fillGallery('all');


function fillGallery() {
    //for each item in
}