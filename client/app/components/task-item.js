import Component from '@ember/component';

export default Component.extend({

    tagName: "li",
    classNameBindings: ['task.done:done'],
    classNames: ['task-item'],
    actions:{
        toggleDoneProperty(){
            this.set("task.done", !this.get("task.done"));
        },
        deleteItemClicked(id){
            this.onDeleteItem(id);
        }
    }

});
