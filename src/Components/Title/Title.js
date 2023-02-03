import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';

function Title({name, desc}) {
    const theme= useTheme()
    return (
        <TitleStyled theme={theme}>
            <h2>{name}</h2>
            <p>{desc}</p>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        font-size: clamp(2rem, 8vw, 3.5rem);
        font-weight: 700;
    }
`;

export default Title