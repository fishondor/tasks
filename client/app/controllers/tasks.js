import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        addTaskItem(){
            console.log("addTaskItem", this.get('model.length'));
            this.store.push({data : [{id: this.get('model.length') + 1, type: 'task', attributes: {name: "Test 3", done: false}}]});
        }
    }
});
