import React from "react";
import image from "../home-img.jpg";


export default function Home() {
    return (
        <main>
            <div style={{ 
            backgroundImage: `url(${image})` 
            }}>
            <section className="relative flex justify-center min-h-screen pt-5 lg:pt-60 px-8">
                <h1 className="text-7xl text-black font-bold cursive leading-none lg:leading-snug">Bienvenido/a a mi portfolio.</h1>
            </section>
            </div>
        </main>
    )

}