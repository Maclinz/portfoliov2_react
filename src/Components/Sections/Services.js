import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/Icons'


function Services() {
    const theme = useTheme()
    return (
        <ServicesStyled id='services' theme={theme}>
            <Title name={'Services'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <div className="services-con">
                <ServiceItem 
                    icon={design} 
                    title={'Web Design'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit corrupti voluptates magnam, voluptatem aliquid laborum consectetur.'}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Game Development'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit corrupti voluptates magnam, voluptatem aliquid laborum consectetur.'}
                />
                <ServiceItem 
                    icon={code}
                    title={'Web Development'}
                    shadow={theme.shadowPrimary}
                    bg={theme.colorPrimary}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit corrupti voluptates magnam, voluptatem aliquid laborum consectetur.'}
                />
            </div>
        </ServicesStyled>
    )
}

const ServicesStyled = styled(SectionLayout)`
    background: ${(props) => props.theme.colorBgGrad};
    .services-con{
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 2rem;
    }
`;

export default Services