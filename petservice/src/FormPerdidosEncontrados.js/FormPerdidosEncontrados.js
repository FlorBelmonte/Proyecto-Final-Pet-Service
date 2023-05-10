import React, {useState} from "react";


function FormPerdidosEncontrados() {
    const [nombre, setNombre]=useState("");
    const [raza,setRaza]= useState("");
    const [descripcion, setDescripcion]= useState("");
    const [imagen, setImagen]=useState(null);


    function handleNombreChange(e){
        setNombre(e.target.value);
    }

    function handleRazaChange(e) {
        setRaza(e.target.value);
    }

    function hendleDescripcionChange(e){
        setDescripcion(e.target.value);
    }

    function handleImagenChange (e){
        setImagen(e.target.value);
    }

    function handleSumit(e){
        e.preventDefault();

        const formData= new FormData();

        formData.append("nombre", nombre);
        formData.append("raza", raza);
        formData.append("descripcion", descripcion);
        formData.append("imagen", imagen);

    }

    return (
        <div>
            <h2>Perdidos, Encontrados</h2>
            <p>"Bienvenido al portal de mascotas perdidas y encontradas. Nuestro objetivo es ayudarte a encontrar a tu compañero peludo o a reunir a una mascota perdida con su dueño. Por favor, ayúdanos a brindar la información necesaria para que podamos difundir su búsqueda. ¡Juntos podemos encontrar a nuestras mascotas desaparecidas!"</p>
            <form onSubmit={handleSumit}>
            <label htmlFor="nombre">Nombre de la Mascota:</label>
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange}/>
    
            <label htmlFor="raza">Raza:</label>
            <input type="text" id="raza" name="raza" value={raza} onChange={handleRazaChange}/>
    
            <label htmlFor="descripcion">Desccripcion:</label>
            <input type="text " id="descripcion" value={descripcion} onChange={hendleDescripcionChange}/>
    
            <label htmlFor="imagen">Adjuntar imagen</label>
            <input type="file" id="imagen" accept="image/*" onChange={handleImagenChange}/>
    
            <input type="submit" value="Enviar" />
    
        </form>
        
        </div>
    )
}



export default FormPerdidosEncontrados