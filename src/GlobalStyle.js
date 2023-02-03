import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        background-color: #1E1E1E;;
        font-family: 'Inter', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow-x: hidden;
        &::-webkit-scrollbar{
            width: 6px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #ff4c60;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #222121;
        }
    }

    a, button, input{
        font-family: inherit;
        font-size: inherit;
        text-decoration: none;
    }


    #tsparticles{
        height: 100vh ;
    }

    .center-title{
        text-align: center;
        width: 50%;
        margin: 0 auto;
    }

    .blob{
        position: absolute;
        bottom: -110px;
        right: -70px;
        width: 140px;
        height: 140px;
        background: #fff;
        border-radius: 50%;
        transition: all .3s ease-in-out;
        pointer-events: none;
        opacity: 0.2;
        border: 0 solid rgb(249, 215, 76);
    }
`;