import React from 'react'
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <section id='skills'>
                <Skills />
            </section>
            <section id='projects'>
                <Projects />
            </section>
        </>
    )
}

export default App