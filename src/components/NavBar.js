import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-blue-500 border-b-2 border-blue-600">
            <div className="container mx-auto flex justify-between items-center h-20 p-0">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest">
                        Lucas Carino
                    </NavLink>
                    <p className="inflex-flex items-center py-6 mr-4 text-blue-100 text-4xl font-bold cursive">|</p>
                    <NavLink to="/about" 
                    activeClassName="text-black bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 uppercase font-bold">
                        Sobre mi
                    </NavLink>
                    <NavLink to="/project"
                    activeClassName="text-black bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 uppercase font-bold">
                        Proyectos
                    </NavLink>
                    <NavLink to="/contact"
                    activeClassName="text-black bg-blue-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800 uppercase font-bold">
                        Contacto
                    </NavLink>
                    
                </nav>
                <div className="inline-flex py-7 px-3 my">
                    <a href="https://drive.google.com/file/d/1rUk9863Vftxgd0hDzruzW1CAMPjZ5A7D/view?usp=sharing" target="_blank"
                    className="inline-flex bg-blue-800 items-center py-3 px-3 mr-4 rounded text-blue-200 hover:text-blue-800 uppercase font-bold">
                        Mi CV
                    </a>
                    <SocialIcon url="https://www.linkedin.com/in/lucascarino/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 50, width: 50}}/>
                    <SocialIcon url="https://github.com/LucasCarino/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 50, width: 50}}/>
                </div>
            </div>
        </header>
    )
}