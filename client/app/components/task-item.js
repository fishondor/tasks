import Component from '@ember/component';

export default Component.extend({

    tagName: "li",
    classNameBindings: ['task.done:done'],
    classNames: ['task-item'],

    isEditing: false,

    willRender(){
        if(!this.get('task')){
            this.set('task', {});
            this.set('isEditing', true);
        }
    },

    actions:{
        toggleDoneProperty(){
            this.set("task.done", !this.get("task.done"));
            this.emitItemUpdated();
        },
        toggleEditProperty(){
            this.toggleEdit();
        },
        deleteItemClicked(id){
            if(this.get('isEditing'))
                this.send('cancelEdit');
            else
                this.onDeleteItem(id);
        },
        onEditEnter(){
            this.toggleEdit();
            this.emitItemUpdated();
        },
        cancelEdit(){
            if(this.get("editCanceled")) this.editCanceled();
            this.toggleEdit();
        }
    },

    toggleEdit(){
        this.set('isEditing', !this.get('isEditing'));
    },

    emitItemUpdated(){
        this.onItemUpdated(this.task);
    }

});
