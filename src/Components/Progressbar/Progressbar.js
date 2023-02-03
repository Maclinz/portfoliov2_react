import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';

function Progressbar({service, progress, bg}) {
    const theme= useTheme()
    return (
        <ProgressbarStyled theme={theme}>
            <div className="text">
                <h5>{service}</h5>
                <p>{progress}%</p>
            </div>
            <div className="progress-con">
                <div className="progress" style={{width: progress + '%', background: bg}}></div>
            </div>
        </ProgressbarStyled>
    )
}

const ProgressbarStyled = styled.div`
    .text{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .progress-con{
        height: 0.5rem;
        width: 100%;
        border-radius: 15px;
        background-color: ${(props) => props.theme.colorGrey2};
        .progress{
            height: 100%;
            border-radius: 15px;
        }
    }
`;

export default Progressbar