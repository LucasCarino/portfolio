import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
       <main className="bg-blue-100 min-h-screen p-12">
           <section className="container mx-auto">
               <h1 className="text-5xl flex justify-center cursive">Mis proyectos</h1>
               <h2 className="text-lg text-gray-600 flex justify-center mb-12">Bienvenido/a a mis proyectos</h2>
               <section className="grid grid-cols-2 gap-8">
                   {projectData && projectData.map((project,index) => (
                   <article className="relative rounded-lg shadow-xl bg-white p-16">
                       <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                           <a 
                           href={project.link} 
                           alt={project.title}
                           target="_blank" 
                           rel="noopener noreferrer"
                           >{project.title}</a>
                       </h3>
                       <div className="text-gray-500 text-xs space-x-4">
                           <span>
                               <strong className="font-bold">Terminado el</strong>:{" "}
                               {new Date(project.date).toLocaleDateString()}
                           </span>
                           <span>
                               <strong className="font-bold">Compañia</strong>:{" "}
                               {project.place}
                           </span>
                           <span>
                               <strong className="font-bold">Tipo</strong>:{" "}
                               {project.projectType}
                           </span>
                           <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
                           <a href={project.link} rel="noopener noreferrer" target="_black" className="text-red-500 font-bold hover:underline hover: text-blue-400 text-xl">
                                Ingresar al proyecto{" "}                        
                           </a>
                       </div>
                   </article>
                   ))}
               </section>
           </section>
       </main>
    );
}