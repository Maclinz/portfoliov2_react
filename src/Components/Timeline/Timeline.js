import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { brief, education } from '../../utils/Icons';
import TimelineItem from '../TimelineItem/TimelineItem';

function Timeline() {
    const theme= useTheme()
    return (
        <TimelineStyled theme={theme}>
            <div className="education-timeline timeline">
                <TimelineItem 
                    duration={'2012 - 2014'}
                    title={'Computer Science Diploma'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2014 - 2016'}
                    title={'A Levels'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2016 - 2019'}
                    title={'Univerity of London'}
                    desc={'I completed a Computer Science degree. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={education}
                />
            </div>
            <div className="jobs-timeline timeline">
                <TimelineItem
                    duration={'2015 - 2017'}
                    title={'Junior Developer'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={brief}
                />
                <TimelineItem
                    duration={'2017 - 2019'}
                    title={'Frontend Developer'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={brief}
                />
                <TimelineItem
                    duration={'2019 - Present'}
                    title={'Software Engineer'}
                    desc={'I worked as a Senior Engineer. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={brief}
                />
            </div>
        </TimelineStyled>
    )
}

const TimelineStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
    .timeline{
        background-color: ${(props) => props.theme.colorBg5};
        padding: 2rem;
        border-radius: 10px;
    }

    .jobs-timeline{
        .icon{
            left: -10px;
        }
    }
`;

export default Timeline