import React from "react";
import image from "../home-img.jpg";

export default function Post() {
    return (
        <main className="bg-blue-100 min-h-screen p-12">
        <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center cursive">Contacto</h1>
            <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                <article className="relative rounded-lg shadow-xl bg-white p-16">
                    <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                        Correo: lucascarino2@gmail.com
                    </h3>
                    <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                        Tel: +5491173629943
                    </h3>
                </article>
            </section>
        </section>
    </main>
    )
}