import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import about from '../../img/about.jpg'
import Title from '../Title/Title'
import Button from '../Button/Button'
import { brief, download, flame, medal, mug } from '../../utils/Icons'
import Progressbar from '../Progressbar/Progressbar'
import Stats from '../Stats/Stats'
import shape1 from '../../img/shape1.png'
import shape2 from '../../img/shape2.png'

function About() {
    const theme = useTheme()
    return (
        <AboutStyled id='about' theme={theme}>
            <div className="about-info">
                <div className="about-image">
                    <img src={about} alt="" />
                </div>
                <div className="about-content">
                    <Title name={'About Me'} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsum natus voluptatum quae quidem sapiente repellat exercitationem, 
                        quod delectus dicta neque tenetur illo quasi quia, eaque vero ratione! 
                        Soluta, nesciunt ratione eligendi repellendus ab sit eveniet perferendis 
                        esse aperiam quibusdam possimus.
                    </p>
                    <div className="progress-bars">
                        <Progressbar
                            bg={theme.colorPrimary}
                            service={'Web Development'}
                            progress={'85'}
                        />
                        <Progressbar bg={theme.colorPurple} service="UI/UX Design" progress="93" />
                        <Progressbar bg={theme.colorGreen} service="Game Development" progress="75" />
                        
                    </div>
                    <div className="btn-con">
                        <Button 
                            name="Download CV"
                            blob="blob"
                            icon={download}
                            bg={theme.colorPrimary}
                            color={theme.colorWhite}
                            bFw={'600'}
                            onClick="onClick"
                            bRad={'30px'}
                            bPad={theme.bPad1}
                        />
                    </div>
                </div>
            </div>
            <div className="stats-container">
                <Stats
                    icon={flame}
                    number="100+" 
                    desc="All completed projects" 
                />
                <Stats icon={mug} number="200+" desc="Cup of coffee" />
                <Stats icon={brief} number="5+" desc="Years of experience" />
                <Stats icon={medal} number="50+" desc="Awards won this year" />
            </div>
            <img alt='shape' src={shape1} className="shape1" />
            <img alt='shape' src={shape2} className="shape2" />
        </AboutStyled>
    )
}

const AboutStyled = styled(SectionLayout)`
    background-color: ${props => props.theme.aboutBg};
    position: relative;
    overflow: hidden;
    .stats-container{
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .about-info{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        position: relative;
        z-index: 5;
        @media screen and (max-width: 1150px){
            grid-template-columns: repeat(1, 1fr);
        }
        .about-image{
            padding: 1.5rem;
            background: ${(props) => props.theme.colorBg3};
            border-radius: 5px;
            width: 80%;
            @media screen and (max-width: 1150px){
                width: 100%;
            }
            img{
                width: 100%;
            }
        }

        .about-content{
            .progress-bars{
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-top: 1.5rem;
            }
            .btn-con{
                margin-top: 2rem;
                @media screen and (max-width: 1150px){
                    margin-bottom: 2rem;
                }
            }
        }
    }

    .shape1{
        position: absolute;
        left: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
    .shape2{
        position: absolute;
        right: -7px;
        top: -7px;
        z-index: 1;
        opacity: 0.05;
        pointer-events: none;
    }
`;

export default About