
 import BlogContainer from './Blog/BlogContainer.js';


import Home from "./Home/Home.js";
import ProvinciaContextProvider from './context/ProvinciaContext.js';
 import ServiciosContextProvider from './context/ServiciosContext.js';
// import Tarjetero from "./tarjetero/Tarjetero";

function App() {

  return (
    <div >


      {/* <Tarjetero/> */}
      <ProvinciaContextProvider>
      <ServiciosContextProvider>
        <Home/>
      </ServiciosContextProvider>
      </ProvinciaContextProvider>


      {/* <BlogContainer/> */}
      {/* <ServiciosContextProvider>
        <Tarjetero/>
      </ServiciosContextProvider> */}

    </div>
  );
}

export default App;
