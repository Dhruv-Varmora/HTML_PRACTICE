import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    color:red;
    background:grey;
    border:red;
    padding:10px;
    font-size:20px;
    border-radius:20px;
`
const Para=styled.p`
border:1px solid;
background:aqua;
color:blueviolet;
`

function StyledCompo(props) {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Button>click me</Button>
                    <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas quos, mollitia, consectetur ducimus suscipit quisquam pariatur iure nemo similique cupiditate explicabo. Deserunt saepe ipsam aliquid ullam, tenetur iste corrupti!</Para>
                </div>
            </div>
        </div>
        </>
    );
}

export default StyledCompo;