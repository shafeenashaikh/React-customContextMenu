import React, { Component } from 'react';
import List from './data';

class Main extends Component {

    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return (
            <div>
                {
                    List.map(item=>(
                        <div>
                            <div>
                                {item.id}
                            </div>
                            <div>
                                {item.first_name}
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        );
    }
}

export default Main;