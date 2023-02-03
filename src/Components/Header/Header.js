import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import Button from '../Button/Button';
import {brief} from '../../utils/Icons'
import avatar from '../../img/avatar.png'
import line from '../../img/line.png'
import Particle from '../Particle'

function Header({toggle, setToggle}) {
    const theme= useTheme()
    return (
        <HeaderStyled theme={theme}>
            <div className="particles-con">
                <Particle />
            </div>
            <div className="burger-menu" onClick={() => {setToggle(!toggle)}}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
            <div className="left-header">
                <div className="left-h-content">
                    <h2>Hi,</h2>
                    <h1>I am Oliver<span>.</span></h1>
                    <p className="profession">Software Engineer</p>
                    <p className='description'>
                        I am an aspiring software engineer, web designer 
                        and a web developer. I can provide clean code and pixel 
                        perfect designs.
                    </p>
                    <div className="btn-con">
                        <Button
                            name={'Hire Me'}
                            blob={'blob'}
                            bg={theme.colorPrimary}
                            color={theme.colorWhite}
                            bFw={'600'}
                            bRad={'30px'}
                            bPad={theme.bPad1}
                            icon={brief}
                        />
                    </div>
                </div>
            </div>
            <div className="right-header"></div>
            <div className="image-con">
                <img src={avatar} alt="" />
            </div>
            <div className="image-overlay"></div>
            <img src={line} alt="" className="image-line" />
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    position: relative;
    overflow: hidden;
    height: 100vh;
    padding: 1rem 18rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 1600px){
        padding: 1rem 10rem;
    }
    @media screen and (max-width: 1150px){
        padding: 1rem 6rem;
    }
    @media screen and (max-width: 1060px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .particles-con{
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }
    .burger-menu{
        position: fixed;
        top: 2rem;
        right: 3rem;
        display: flex;
        flex-direction: column;
        z-index: 15;
        cursor: pointer;
        .line{
            width: 35px;
            height: 4px;
            background-color: ${(props) => props.theme.colorPrimary};
            margin-bottom: 5px;
            border-radius: 7px;
            transition: all .3s ease-in-out;
            display: flex;
            box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
            &:last-child{
                margin-bottom: 0;
                width: 20px;
                align-self: flex-end;
            }
        }
        &:hover{
            .line:last-child{
                width: 35px;
            }
        }
    }

    .left-header{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        z-index: 5;
        @media screen and (max-width: 1060px){
            .left-h-content{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            p{
                text-align: center;
            }
            .profession{
                margin-top: 1rem;
            }
        }
        h2{
            font-size: 4.5rem;
            color: ${props => props.theme.colorPurple};
        }
        h1{
            font-size: 6rem;
            span{
                color: ${props => props.theme.colorPrimary};
            }
        }
        .profession{
            font-size: 2rem;
            font-weight: 500;
            color: ${props => props.theme.colorGreen};
        }
        .description{
            margin-top: 1rem;
            color: ${props => props.theme.colorGrey1};
            margin-bottom: 2rem;
            line-height: 2rem;
        }
    }

    .image-con{
        position: absolute;
        right: 0;
        bottom: -7px;
        z-index: 2;
        @media screen and (max-width: 1060px){
            display: none;
        }
        img{
            width: 700px;
            filter: grayscale(100%) drop-shadow(5px -5px 20px rgba(0,0,0, 0.65));
        }
    }

    .image-overlay{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: ${(props) => props.theme.colorBg};
        z-index: 3;
        opacity: 0.3;
        @media screen and (max-width: 1060px){
            display: none;
        }
    }

    .image-line{
        position: absolute;
        right: 0;
        top: -15%;
        width: 105%;
        z-index: 1;
        @media screen and (max-width: 1060px){
            display: none;
        }
    }
`;

export default Header