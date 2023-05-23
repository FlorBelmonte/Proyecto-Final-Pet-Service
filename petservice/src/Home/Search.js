import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      // Aca va la logica de búsqueda para hacer una búsqueda y mostrar los resultados
    }
  
    return (
      <Form onSubmit={handleSubmit} className="position-relative top-30 start-30 translate-middle d-flex justify-content-center align-items-center">
        <Form.Control type="text" placeholder="Buscar..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className="me-2 wider-input" />
        <Button variant="btn btn-outline-primary me-2" type="submit"> <FontAwesomeIcon icon={faSearch}/></Button>
      </Form>
    );
  }
  
  export default Search;
  

