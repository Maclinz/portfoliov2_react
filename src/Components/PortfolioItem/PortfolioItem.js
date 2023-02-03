import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';

function PortfolioItem({title, icon1, icon2, image, link1, link2, itemRef, category}) {
    const theme= useTheme()
    return (
        <PortfolioItemStyled theme={theme}>
            <img src={image} alt="" />
            <div className="hover">
                <div className="hover-items">
                    <span>{category}</span>
                    <h5>{title}</h5>
                    <div className="links">
                        <a href={link1} target="_blank" rel="noreferrer">
                            {icon1}
                        </a>
                        <a href={link2} target="_blank" rel="noreferrer">
                            {icon2}
                        </a>
                    </div>
                </div>
            </div>
        </PortfolioItemStyled>
    )
}

const PortfolioItemStyled = styled.div`
    width: 100%;
    height: 320px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.colorPrimary};
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

    .hover{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(114, 99, 243, 0.74);
        width: 0;
        height: calc(100% - 2rem);
        border-radius: 10px;
        transition: all .4s ease-in-out;
        opacity: 0;
        overflow: hidden;
        .hover-items{
            padding: 2rem;
            span{
                position: absolute;
                top: 0;
                left: 2rem;
                background-color: ${(props) => props.theme.colorPrimary};
                padding: .2rem 1rem;
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;
                font-size: clamp(1rem, 1.5vw, 1.2rem);
            }
            h5{
                font-size: clamp(1.5rem, 2vw, 2rem);
                margin-top: 2rem;
            }
            .links{
                position: absolute;
                display: flex;
                gap: 2rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, 220px) scale(0);
                transition: all .4s ease-in-out;
                opacity: 0;
                a{
                    width: 3.5rem;
                    height: 3.5rem;
                    border-radius: 50%;
                    background-color: ${(props) => props.theme.colorPrimary};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    &:hover{
                        background-color: ${(props) => props.theme.colorPurple};
                    }
                }
                i{
                    font-size: clamp(1rem, 2vw, 1.8rem);
                }
                svg{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
    &:hover {
        .hover{
            width: calc(100% - 2rem);
            opacity: 1;
            .links{
                transition: all .4s ease-in-out;
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }
`;

export default PortfolioItem