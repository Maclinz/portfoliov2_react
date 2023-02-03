import { useState } from 'react';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/Sections/About';
import Blogs from './Components/Sections/Blogs';
import Contact from './Components/Sections/Contact';
import Experience from './Components/Sections/Experience';
import Portfolios from './Components/Sections/Portfolios';
import Services from './Components/Sections/Services';
import {useTheme} from './context/themeContext'

function App() {
  const theme = useTheme()

  //state
  const [toggle, setToggle] = useState(true)

  return (
    <AppStyled theme={theme}>
      <Navigation toggle={toggle} />
      <Header toggle={toggle} setToggle={setToggle} />
      <main>
        <About />
        <Services />
        <Experience />
        <Portfolios />
        <Blogs />
        <Contact />
      </main>
      <footer>
        <p>
          Copywright &copy; 2023 <a href="/">The Code Dealer</a>. All rights reserved.
        </p>
      </footer>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colorBg};
  color: ${props => props.theme.colorWhite};
  position: relative;
  p, a, li{
    color: ${(props) => props.theme.colorGrey1};
  }

  p{
    line-height: 1.9rem;
  }

  footer{
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colorBg2};
    p{
      a{
        color: ${(props) => props.theme.colorPrimary};
        transition: all .3s ease-in-out;
        &:hover{
          color: ${(props) => props.theme.colorGreen};
        }
      }
    }
  }
`;

export default App;
