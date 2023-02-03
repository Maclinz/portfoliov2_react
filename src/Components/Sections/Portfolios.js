import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { SectionLayout } from '../../styles/Layouts';
import Title from '../Title/Title';
import {portfolios as myPortfolios} from '../../data/portfolios'
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import { getUnique } from '../../utils/helpers';
import gsap from 'gsap';


function Portfolios() {
    const theme = useTheme()
    //refs
    const portCon = useRef()

    //state
    const [portfolios, setPortfolios] = useState(myPortfolios)
    const [categories] = useState(['All', ...getUnique(portfolios, 'category')])
    const [active, setActive] = useState(0)


    const activeCategory = (index) => {
        setActive(index)
    }

    const filterPortfolios = (category, index) => {
        if(category === 'All'){
            gsap.to(portCon.current, {
                duration: 0.5,
                opacity: 0,
                y: 20,
                ease: 'power4.out',
                onComplete: () => {
                    gsap.fromTo(portCon.current, {
                        y: 20,
                        opacity: 0,
                        scale: 0
                    },
                    {
                        duration: 0.5,
                        y: 20,
                        opacity: 1,
                        scale: 1,
                        ease: 'power4.out',
                    })
                    setPortfolios(myPortfolios)
                }
            })
            activeCategory(index)
            return
        }

        const filtered = myPortfolios.filter((port) => {
            return port.category === category
        })

        activeCategory(index)
        gsap.to(portCon.current, {
                duration: 0.5,
                opacity: 0,
                y: 25,
                ease: 'power4.out',
                onComplete: () => {
                    gsap.to(portCon.current,
                    {
                        duration: 0.5,
                        y: 20,
                        opacity: 1,
                        ease: 'power4.out',
                    })
                    setPortfolios(filtered)
                }
        })
        
    }

    return (
        <PortfoliosStyled id='portfolios' theme={theme}>
            <Title
                name="Portfolios"
                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            />
            <div className="filter-btns">
                {
                    categories.map((categ, index) => {
                        return <button 
                            key={index} 
                            onClick={() => filterPortfolios(categ, index)}
                            className={`filter-btn ${active === index ? 'active': ''}`}
                            >
                                {categ}
                            </button>
                    })
                }
            </div>
            <div className="portfolios-con" ref={portCon}>
                {portfolios.map((port) => {
                    return <PortfolioItem key={port.id} {...port} />
                })}
            </div>
        </PortfoliosStyled>
    )
}
const PortfoliosStyled = styled(SectionLayout)`
    background: linear-gradient(180deg, #222121,#191919);
    .portfolios-con{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
        gap: 2rem;
    }

    .filter-btns{
        margin: 2rem 0;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        .filter-btn{
            display: inline-block;
            font-family: inherit;
            font-size: inherit;
            font-weight: 600;
            color: ${props => props.theme.colorGrey1};
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            position: relative;
            transition: all 0.3s ease-in-out;
        }
    }

    .active{
        color: ${props => props.theme.colorPrimary} !important;
        &::after{
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 2px;
            background: ${props => props.theme.colorPrimary};
        }
    }
`;

export default Portfolios