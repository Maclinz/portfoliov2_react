import uuid from "react-uuid"
import { eye, git } from "../utils/Icons"
import snippet from '../img/portImages/snippet.png'
import js from '../img/portImages/js.png'
import tabs from '../img/portImages/tabs.png'
import figma from '../img/portImages/figma.png'

export const portfolios = [
    {
        id: uuid(),
        category: "Web Development",
        title: "Figma landing page design",
        image: snippet,
        link1: "https://www.github.com/maclinz",
        link2: "https://www.github.com/maclinz",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Game Development",
        title: "React portfolio website",
        image: tabs,
        link1: "https://www.github.com/maclinz",
        link2: "https://www.github.com/maclinz",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Development",
        title: "React portfolio website",
        image: js,
        link1: "https://www.github.com/maclinz",
        link2: "https://www.github.com/maclinz",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "UI/UX Design",
        title: "React portfolio website",
        image: figma,
        link1: "https://www.github.com/maclinz",
        link2: "https://www.github.com/maclinz",
        icon1: git,
        icon2: eye,
    },
]