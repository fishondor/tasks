import Component from '@ember/component';

export default Component.extend({

    tagName: "ul",
    classNames: ['tasks-list'],

    actions: {
        deleteItem(id){
            this.onDeleteItem(id);
        },
        updateItem(task, name, done){
            this.onUpdateItem(task, name, done);
        },
        addItem(task){
            this.onAddItem(task);
        },
        addItemCanceled(){
            this.onAddItemCanceled();
        }
    }

});
