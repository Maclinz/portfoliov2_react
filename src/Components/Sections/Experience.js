import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { SectionLayout } from '../../styles/Layouts';
import Timeline from '../Timeline/Timeline';
import Title from '../Title/Title';

function Experience() {
    const theme= useTheme()
    return (
        <ExperienceStyled id='experience' theme={theme}>
            <Title name={'Experince'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <div className="timeline-con">
                <Timeline />
            </div>
        </ExperienceStyled>
    )
}

const ExperienceStyled = styled(SectionLayout)`
    .timeline-con{
        margin-top: 3.5rem;
    }
`;

export default Experience