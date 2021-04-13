import React, {useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../home-img.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);   
}

export default function About() {
   const [author, setAuthor] = useState(null);

   useEffect(() => {
       sanityClient.fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
        }`).then((data)=> setAuthor(data[0]))
    .catch(console.error);
}, []);

if (!author) return <div>Cargando...</div>;

return (
    <main>
        <div style={{ 
            backgroundImage: `url(${image})` 
        }}>
            <div className="p-10 lg:pt-20 container mx-auto">
                <section className="bg-blue-600 rounded-lg shadow-2xl lg:flex p-20 items-center">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8 border-2 border-blue-200" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-300 mb-4 text-center">
                        Hola! soy {" "}
                        <span className="text-blue-100>">{author.name}</span>  
                        </h1>
                        <div className="prose lg:prose-xl text-white text-justify">
                            <BlockContent blocks={author.bio} projectId="iyky48rx" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
)
}