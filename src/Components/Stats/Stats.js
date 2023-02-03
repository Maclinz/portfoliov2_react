import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';

function Stats({icon, number, desc}) {
    const theme= useTheme()

    const cardColors = [theme.colorPrimary,theme.colorPurple,theme.colorGreen,theme.colorYellow]

    const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)]

    return (
        <StatsStyled theme={theme} style={{
            background: `linear-gradient(180deg, ${randomColor}, rgba(31, 30, 28, .6) 68%)`
        }}>
            <div className="inner-con">
                <div className="icon-con">
                    {icon}
                </div>
                <div className="text-con">
                    <h4>{number}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </StatsStyled>
    )
}

const StatsStyled = styled.div`
    position: relative;
    z-index: 5;
    border-radius: 10px;
    .inner-con{
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-gap: 1rem;
        position: relative;
        background-color: ${(props) => props.theme.colorBg4};
        padding: 1rem;
        border-radius: 10px;
        margin: 3px 3px 0;
        .icon-con{
            i{
                font-size: 2.5rem;
                color: ${(props) => props.theme.colorGrey1};
            }
        }
        .text-con{
            h4{
                font-size: clamp(1.5rem, 2.5vw, 2.5rem);
            }
            p{
                font-size: clamp(1rem, 2vw, 1.2rem);
                margin-top: .5rem;
            }
        }
    }
`;

export default Stats