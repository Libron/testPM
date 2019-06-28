import { configure, observable, decorate, computed, action } from 'mobx';

configure({EnforceActions: true});


class TestStore {
    start = Date.now();
    current = Date.now();

    get elapsedTime() {
        return this.current - this.start + "milliseconds";
    }

    tick() {
        this.current = Date.now();
    }
}

decorate(TestStore, {
    start: observable,
    current: observable,
    elapsedTime: computed,
    tick: action
});

export default TestStore;