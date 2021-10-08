import React from 'react';
import styled from 'styled-components';

function ContextMenu(props){

    console.log(props)
    return(
       <ContextContainer>
           List
       </ContextContainer>
    )
}
export default ContextMenu;

const ContextContainer=styled.div`
border:1px solid gray;
width:200px
`