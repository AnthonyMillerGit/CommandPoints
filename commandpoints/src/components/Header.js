import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    border-bottom: 2px solid black;
    justify-content:center;
    padding: 3%;
    max-width: 100%;
`

const Title = styled.h1`
    font-size: 2rem;
    line-height: 1.5;
    font-weight: bold;
`

const Header = () => {
    return (
        <div>
            <Container>
                <Title>EDH Card Power Level Rankings</Title>
            </Container>
        </div>
    )
}



export default Header;