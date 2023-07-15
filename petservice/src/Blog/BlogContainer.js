import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Blog from "./Blog.js";
import "./blog.css"

const BlogContainer=() => {
/****************** funcionamiento del blog **************************** */


const [posts, setPosts] = useState([]);
const handleAddPost = (event) => {
  event.preventDefault();

// Obtener los valores del formulario
const { image, text } = event.target.elements;

// Agregar el nuevo post al arreglo de posts
setPosts([

{
  id: posts.length + 1,
  image: image.value,
  text: text.value,
},
...posts,
]);

// Limpiar los inputs del formulario
image.value = '';
text.value = '';
};
/******************* fin funcionamiento del blog ************************** */

return(
    <div className='contenedorBlog'>
        <form className='formularioBlog' onSubmit={handleAddPost}>
        <textarea className='inputTexto' type="text" name="text" placeholder="Escribe aquí tu post" />
        <input className='inputArchivo' type="file" name="image" accept="image/*" />
        <Button variant="primary" type="submit" style={{ padding: "1px 8px",margin: "2px", fontSize: "13px" }}>Publicar</Button>
        </form>
        <Blog posts={posts} />
    </div>
    );

};

    export default BlogContainer;