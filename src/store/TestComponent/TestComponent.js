import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import TestStore from '../testStore'

 class TestComponent extends Component {
    render() {
        console.log(this.props);

        return (
            <div>

            </div>
        );
    }
}

const store = new TestStore();

export default inject(store)(observer(TestComponent));