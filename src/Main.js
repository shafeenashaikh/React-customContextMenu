import React from 'react';
import List from './data'
import styled from 'styled-components'

import ContextMenu from './Components/contextMenu';
import ContextList from './Constant/contextMenuOptions'

class Main extends React.Component {
  constructor(){
    super()
    this.state={
      contextCoordinate:{x:0,y:0},
      toggleContextMenu:false,
      contextId:null,
    }
  }

  onRightClick=(event,ID)=>{
    let parentW=document.getElementById("singleItem").offsetWidth;
    event.preventDefault();

    let x=event.clientX,y=event.clientY
    
    let leftMarginOffset=(5/100)*parentW

    if(window.innerWidth-event.clientX<160+leftMarginOffset){
      x=window.innerWidth-(leftMarginOffset+160)
    }
    if(window.innerHeight-event.clientY<60){
      y=window.innerHeight-65
    }

    var coordinate={...this.state.contextCoordinate}
    coordinate.x=x;
    coordinate.y=y

    this.setState({
      contextCoordinate:coordinate,
      toggleContextMenu:true,
      contextId:ID
    })

   
  }

  onClickItemHandle=(Item)=>{
    const {contextId}=this.state

    switch(Item.name){
      case "Delete":
        console.log("Delete",contextId)
        return this.setState({toggleContextMenu:false})
      case "Copy":
        console.log("Copy",contextId)
        return this.setState({toggleContextMenu:false})
      case "Rename":
        console.log("Rename",contextId)
        return this.setState({toggleContextMenu:false})
      default:
        return null;
    }
  }



  render(){
    const {contextCoordinate,toggleContextMenu}=this.state

    return (
      <AppContainer onClick={()=>this.setState({toggleContextMenu:false})}>
        {
          List.map(item=>(
          <ItemListContainer  id="singleItem" onContextMenu={(e)=>this.onRightClick(e,item.id)}>
            <ID>
              {item.id}
            </ID>
            <Name>
              {item.first_name}
            </Name>
          </ItemListContainer>))
        }

      {toggleContextMenu?
        <ContextMenu
        x={contextCoordinate.x}
        y={contextCoordinate.y}
        contextItem={[
          ContextList.rename,
          ContextList.delete,
          ContextList.copy
        ]}
        contextClicked={this.onClickItemHandle}
      
      />:null
      }
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
margin:10px;`

const ID=styled.div`
margin:10px 20px; 
border-right:1px solid #888;
padding:0 10px;
`
const Name=styled.div`
width:150px;
`