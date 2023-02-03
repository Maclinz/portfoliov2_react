import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { arrow } from '../../utils/Icons'
import Button from '../Button/Button'

function Subscribe() {
    const theme = useTheme()
    return (
        <SubscribeStyled theme={theme}>
            <h1>Subscribe to my newsletter and get 10% off your first project.</h1>
            <div className="btn-con">
                <Button 
                    name="Subscribe"
                    blob="blob"
                    bg={theme.colorBlack}
                    color={theme.colorWhite}
                    bFw={'600'}
                    onClick="onClick"
                    bRad={'10px'}
                    bPad={theme.bPad1}
                    icon={arrow}
                />
            </div>
        </SubscribeStyled>
    )
}

const SubscribeStyled = styled.div`
    background-color: ${(props) => props.theme.colorPurple};
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 18rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 2rem;
    @media screen and (max-width: 1600px){
        padding:4rem 10rem;
    }
    @media screen and (max-width: 1150px){
        padding:2rem 6rem;
    }
    @media screen and (max-width: 650px){
        padding:2rem 3rem;
    }
    h1{
        font-size: clamp(1.5rem, 3vw, 3rem);
    }

    .btn-con{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export default Subscribe