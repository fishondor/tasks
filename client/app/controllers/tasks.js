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
