import Controller from '@ember/controller';

export default Controller.extend({

    isAddingItem: false,

    actions: {
        toggleAddingItem(){
            this.set('isAddingItem', !this.get('isAddingItem'));
        },
        addTaskItem(task){
            this.set('isAddingItem', false);
            this.store.push({data : [{id: this.get('model.length'), type: 'task', attributes: {name: task.name, done: task.done}}]});
        },
        addTaskCanceled(){
            this.set('isAddingItem', false);
        },
        deleteItem(id){
            this.store.findRecord('task', id, { backgroundReload: false }).then(
                task => {
                    task.destroyRecord();
                }
            )
        },
        editItem(item){
            this.store.findRecord('task', item.id, { backgroundReload: false }).then(
                task => {
                    console.log("updating", task);
                    /*task.set('done', item.done);
                    task.set('name', task.name);*/
                }
            )
        }
    }
});
