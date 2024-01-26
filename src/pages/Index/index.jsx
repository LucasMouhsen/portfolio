import Header from "../../components/Header";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Water from "../../components/Water";
import Home from "../../components/Home";   
import "./index.css"
import { useDark } from "../../hooks/useDark";
import { Projects } from "../../components/Projects";
import { useEffect } from "react";


export default function Index() {
    const { isBackgroundDark } = useDark() /* Trae datos del providerDark */

    useEffect(() => {
        const handleMouseMove = (e) => {
            const backgroundX = e.clientX;
            const backgroundY = e.clientY;

            const circle = document.querySelector(".circle");
            const circleRect = circle.getBoundingClientRect();

            const circleCenterX = circleRect.left
            const circleCenterY = circleRect.top

            const deltaX = backgroundX - circleCenterX;
            const deltaY = backgroundY - circleCenterY;

            circle.style.left = `${backgroundX - circleRect.width / 2}px`;
            circle.style.top = `${backgroundY - circleRect.height / 2}px`;
            circle.style.background = `radial-gradient(circle at ${deltaX}px ${deltaY}px, ${!isBackgroundDark ? '#283452' : '#f0eb9d'}, transparent 50%)`;

        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isBackgroundDark]);

    return (
        <main className="index" data-theme={!isBackgroundDark ? "dark" : "light"}>{/* Tema claro y oscuro */}
            <div className="circle"></div>
            <div className="zindex">
                <Header />
                <Water />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </main>
    )
}