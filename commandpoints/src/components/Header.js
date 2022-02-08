import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    border-bottom: 2px solid black;
    justify-content:center;
    padding: 3%;

`

const Title = styled.h1`
    font-size: 2rem;
`

const Header = () => {
    return (
        <div>
            <Container>
                <Title>EDH Card Power Rankings</Title>
            </Container>
        </div>
    )
}



export default Header;