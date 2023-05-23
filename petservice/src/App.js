// import FormPerdidosEncontrados from "./FormPerdidosEncontrados/FormPerdidosEncontrados.js";
// import Tarjetero from "./tarjetero/Tarjetero";
 import BlogContainer from './Blog/BlogContainer.js';
import Home from "./Home/Home.js";

import ServiciosContextProvider from './context/ServiciosContext.js';
import Tarjetero from "./tarjetero/Tarjetero";


function App() {

  return (
    <div >

      {/* <Tarjetero/> */}
      {/* <FormPerdidosEncontrados/> */}

      <Home/>

      <BlogContainer/>
      <ServiciosContextProvider>
        <Tarjetero/>
      </ServiciosContextProvider>
      

     {/* <BlogContainer/> */}
      {/* <Tarjetero/> */}
 main
    </div>
  );
}

export default App;
