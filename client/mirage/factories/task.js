import { Factory } from 'ember-cli-mirage';
import {faker}  from 'ember-cli-mirage';

export default Factory.extend({
    name(i){ return `משימה ${String.fromCharCode(65 + i)}`},
    done: faker.random.boolean
});
