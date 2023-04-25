import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      // Aca va la logica de búsqueda para hacer una búsqueda y mostrar los resultados
    }
  
    return (
      <Form onSubmit={handleSubmit} className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center">
        <Form.Control type="text" placeholder="Buscar..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className="me-2 wider-input" />
        <Button variant="primary" type="submit">Buscar</Button>
      </Form>
    );
  }
  
  export default Search;
  

