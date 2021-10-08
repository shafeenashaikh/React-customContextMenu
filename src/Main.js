import React, { Component } from 'react';
import List from './data';
import styled from 'styled-components'
import ContextMenu from './Components/contextMenu';
import ContextList from './Constant/contextMenuOptions'

class Main extends Component {

    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return (
            <AppContainer>
            <ContextMenu
                contextItem={[
                    ContextList.rename,
                    ContextList.delete,
                    ContextList.copy
                ]}
            />
            <div>
                {
                List.map(item=>(
                    <ItemListContainer>
                        <div>
                            <div>
                                {item.id}
                            </div>
                            <div>
                                {item.first_name}
                            </div>
                        </div>
                    </ItemListContainer>
                ))}
            </div>
            </AppContainer>
        );
    }
}

export default Main;

const AppContainer=styled.div`
position:relative;
  display:grid;
  place-items:center;
`

const ItemListContainer=styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
border:1px solid #888;
width:200px;
border-radius:12px;
margin:10px;
`
const ID=styled.div`
margin:10px 20px; 
border-right:1px solid #888;
padding:0 10px;
`
const Name=styled.div`
width:150px;`