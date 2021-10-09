import React from 'react'
import styled from 'styled-components'

export default function contextMenu(props) {
    return (
        <ContextContainer
        x={props.x+"px"}
        y={props.y+"px"}
        >
           {
               props.contextItem.map(item=>(
                <ContextSingleItem onClick={()=>props.contextClicked(item)}>
                    {item.name}
                </ContextSingleItem>

               ))
           }
            
        </ContextContainer>
    )
}

const ContextContainer=styled.div`
position:absolute;
width:150px;
height: fit-content;
z-index:100;
background-color:#fff;
border:1px solid #e2e2e2;
font-size:16px;
border-radius:8px;
left:${props=>props.x};
top:${props=>props.y}
`

const ContextSingleItem=styled.div`
cursor: pointer;
text-align:left;
padding:10px 20px;
`