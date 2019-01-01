import Component from '@ember/component';

export default Component.extend({

    tagName: "ul",
    classNames: ['tasks-list'],

    actions: {
        deleteItem(id){
            this.onDeleteItem(id);
        },
        updateItem(task){
            this.onUpdateItem(task);
        },
        addItem(task){
            this.onAddItem(task);
        },
        addItemCanceled(){
            this.onAddItemCanceled();
        }
    }

});
