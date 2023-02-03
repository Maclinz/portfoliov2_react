import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';

function Navigation({toggle}) {
    const theme= useTheme()
    return (
        <NavigationStyled toggle={toggle} theme={theme}>
            <ul className="nav-items">
                <li>
                    <a href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                    <a href="#portfolios">Portfolios</a>
                </li>
                <li className="nav-item">
                    <a href="#blogs">Blogs</a>
                </li>
                <li className="nav-item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    position: fixed;
    transition: all .3s ease-in-out;
    left: 50%;
    top: 0;
    background-color: red;
    min-height: 10vh;
    transform: 
        translateX(-50%) 
        translateY(${props => props.toggle ? '-100%' : 0})
        scaleX(${props => props.toggle ? '0' : '1'})
    ;
    filter: blur(${props => props.toggle ? '20px' : '0'});
    opacity: ${props => props.toggle ? '0' : '1'};
    border-radius: ${props => props.toggle ? '10px': '0'};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 850px;
    background-color: ${(props) => props.theme.colorBg2};
    margin: 0 auto;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 12;
    @media screen and (max-width: 850px){
        width: 100%;
        border-radius: 0;
        bottom: 0;
        height: 10vh;
        top: auto;
        left: 0;
        transform: ${(props) => props.toggle ? 'translateY(100%)' : 'translateY(0)'}
    }
    .nav-items{
        display: flex;
        align-items: center;
        justify-content: space-between;
        li{
            margin: 0 1rem;
            a{
                padding: .6rem .3rem;
                position: relative;
                transition: all .4s ease-in-out;
                color: ${(props) => props.theme.colorWhite};
                &::after{
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 2px;
                    background-color: ${(props) => props.theme.colorPrimary};
                    transition: all .4s ease-in-out;
                }
                &:hover:after{
                    width: 100%;
                }
            }
        }
    }
`;

export default Navigation