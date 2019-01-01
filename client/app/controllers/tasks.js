import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        addTaskItem(){
            this.store.push({data : [{id: this.get('model.length'), type: 'task', attributes: {name: "Test 3", done: false}}]});
        },
        deleteItem(id){
            this.store.findRecord('task', id, { backgroundReload: false }).then(
                task => {
                    task.destroyRecord();
                }
            )
        }
    }
});
