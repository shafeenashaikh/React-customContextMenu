import React from 'react';
import styled from 'styled-components';

function ContextMenu(props){

    console.log(props)
    return(
       <ContextContainer>
         {
             props.contextItem.map(item=>(
                 <ContextSingleItem>
                     {item.name}
                 </ContextSingleItem>
             ))
         }
       </ContextContainer>
    )
}
export default ContextMenu;

const ContextContainer=styled.div`
border:1px solid gray;
width:200px;
height: fit-content;
z-index:100;
background-color:#fff;
border:1px solid #e2e2e2;
`
const ContextSingleItem=styled.div`
cursor: pointer;
text-align:left;
padding:10px 20px;
`