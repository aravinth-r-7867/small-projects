import Component from '@ember/component';

export default Component.extend({
    init(){
        this._super(...arguments);
        this.set('prevActiveElement', 'unqiueId00');
    },
    didInsertElement(){
        let firstElem = document.getElementById('unqiueId00');
        let activeElem = document.getElementById('activePaneLink');
        activeElem.style.top = firstElem.offsetTop + 'px';
        activeElem.style.height = firstElem.offsetHeight + 'px';
    },
    actions : {
        changeRoute : function(id){
            if(this.prevActiveElement){
                document.getElementById(this.prevActiveElement).classList.remove('active');
            }
            this.set('prevActiveElement', id);
            let element = document.getElementById(id);
            element.classList += ' active';
            document.getElementById('activePaneLink').style.top = element.offsetTop + 'px';
            document.getElementById('activePaneLink').style.height = element.offsetHeight + 'px';
        }
    }
});
