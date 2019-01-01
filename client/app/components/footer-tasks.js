import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    tagName: "footer",
    classNames: ['rtl', 'footer-tasks'],

    STRINGS: null,
    constants: service(),

    willRender(){
        this.set('STRINGS', this.get('constants').STRINGS);
    },
});
