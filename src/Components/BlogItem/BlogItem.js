import React, { useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { arrow } from '../../utils/Icons';

function BlogItem({title, title2, desc, desc2,date, image1, writer, userIcon, image2}) {
    const theme= useTheme()

    //state
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <BlogItemStyled theme={theme}>
            <img src={image1} alt="" className="blog-image" />
            <p className="date">{date}</p>
            <h4>{title}</h4>
            <button onClick={openModal}>
                {arrow} post details
            </button>
            {
                showModal && <div onClick={closeModal}className="click-overlay"></div>
            }
            {
                showModal && <div className="show-modal">
                    <div className="modal-content">
                        <img src={image2} alt="" />
                        <div className="user-info">
                            <p>{userIcon}{writer}</p>
                            <p className="date">{date}</p>
                        </div>
                        <h2>{title2}</h2>
                        <p>
                            {desc}
                        </p>
                        <img src={image1} alt="" />
                        <p>
                            {desc2}
                        </p>
                        <div className="share-content">
                            <p>Share: </p>
                            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
                            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="#" target="_blank" rel="noreferrer">Twitter</a>
                            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            }
        </BlogItemStyled>
    )
}

const BlogItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .blog-image{
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .date{
        padding:  .1rem .6rem;
        background: ${(props) => props.theme.colorGrey};
        align-self: flex-start;
        margin: 1rem 0;
    }
    h4{
        font-size: clamp(1.2rem, 1.5vw, 1.5rem);
    }
    button{
        text-transform: uppercase;
        margin-top: 1.8rem;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        background-color: transparent;
        display: flex;
        align-items: center;
        outline: none;
        border: none;
        color: inherit;
        cursor: pointer;
        gap: 1rem;
        i{
            transition: transform .2s ease-in-out;
        }
        &:hover{
            color: ${(props) => props.theme.colorYellow};
            i{
                transform: translateX(3px);
            }
        }
    }

    .show-modal{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 50%;
        max-height: 94%;
        background-color: ${(props) => props.theme.colorBg6};
        transform: translate(-50%, -50%);
        z-index: 12;
        overflow-y: auto;
        border-radius: 10px;
        &::-webkit-scrollbar{
            width: 0;
        }
        .modal-content{
            padding: 2rem 1.5rem;
            position: relative;
            img{
                width: 100%;
                object-fit: cover;
                height: 400px;
                &:first-child{
                    width: 100%;
                    height: 550px;
                    object-fit: cover;
                }
            }
            .user-info{
                display: flex;
                align-items: center;
                background: transparent;
                gap: 1.5rem;
                margin-top: 2rem;
                p{
                    margin-bottom: 0;
                    margin-top: 0;
                    i{
                        color: ${(props) => props.theme.colorGreen};
                    }
                    &:first-child{
                        display: flex;
                        align-items: center;
                        gap: .5rem;
                    }
                }
                .date{
                    background: transparent;
                    padding-left: 1.5rem;
                    position: relative;
                    &::before{
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translateY(-50%);
                        width: .5rem;
                        height: .5rem;
                        background-color: ${(props) => props.theme.colorYellow};
                        border-radius: 50%;
                    }
                }
            }
            h2{
                font-size: clamp(1.5rem, 2vw, 3rem);
                margin: 2rem 0;
            }
            p{
                margin-bottom: 2rem;
            }
            .share-content{
                display: flex;
                align-items: center;
                gap: 1rem;
                a{
                    text-decoration: underline;
                    font-weight: 500;
                }
                p{
                    margin-bottom: 0;
                }
            }
        }
    }

    .click-overlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 11;
    }
`;

export default BlogItem