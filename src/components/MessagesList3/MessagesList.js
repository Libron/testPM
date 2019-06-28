import React, {Component, Fragment} from 'react';
import './MessagesList.css'

let DATA = [
    {
        title: "One",
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
    }, {
        title: "Two",
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
    },{
        title: "Three",
        content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
    }
];

class MessagesList extends Component {
    click = e => {
        console.log(e)
        console.log(e.target.classList.value += ' active');
    };

    render() {
        return (
            <Fragment>
                <h2>Accordion with symbols</h2>
                <p>In this example we have added a "plus" sign to each button. When the user clicks on the button, the
                    "plus" sign is replaced with a "minus" sign.</p>

                {DATA.map((item, idx) => (
                    <div key={idx}>
                        <button className="accordion" onClick={this.click}>{item.title}</button>
                        <div className="panel" style={{maxHeight: window.body.scrollHeight + 'px'}}>
                            {item.content}
                        </div>
                    </div>
                ))}



                <button className="accordion" onClick={this.click}>Section 2</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p><p>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <button className="accordion" onClick={this.click}>Section 3</button>
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </Fragment>
        );
    }
}

export default MessagesList;