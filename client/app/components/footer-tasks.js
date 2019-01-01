import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { filterBy } from '@ember/object/computed';

export default Component.extend({

    tagName: "footer",
    classNames: ['rtl', 'footer-tasks'],

    STRINGS: null,
    constants: service(),

    willRender(){
        this.set('STRINGS', this.get('constants').STRINGS);
    },

    tasksFinished: computed('tasksList.@each.done', function(){
        console.log("tasksList", this.tasksList);
        return this.tasksList.filterBy( 'done', true).length;
    }),
    tasksUnfinished: computed('tasksList.@each.done', function(){
        console.log("tasksList", this.tasksList);
        return this.tasksList.filterBy( 'done', false).length;
    }),

});
