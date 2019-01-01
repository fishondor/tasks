import Component from '@ember/component';

export default Component.extend({

    tagName: "li",
    classNameBindings: ['task.done:done'],
    classNames: ['task-item'],

    isEditing: false,

    actions:{
        toggleDoneProperty(){
            this.set("task.done", !this.get("task.done"));
            this.emitItemUpdated();
        },
        toggleEditProperty(){
            this.toggleEdit();
        },
        deleteItemClicked(id){
            this.onDeleteItem(id);
        },
        onEditEnter(){
            this.toggleEdit();
            this.emitItemUpdated();
        }
    },

    toggleEdit(){
        this.set('isEditing', !this.get('isEditing'));
    },

    emitItemUpdated(){
        this.onItemUpdated(this.task);
    }

});
