
 import BlogContainer from './Blog/BlogContainer.js';


import Home from "./Home/Home.js";

 import ServiciosContextProvider from './context/ServiciosContext.js';
// import Tarjetero from "./tarjetero/Tarjetero";

function App() {

  return (
    <div >


      {/* <Tarjetero/> */}
      <ServiciosContextProvider>
        <Home/>
      </ServiciosContextProvider>
      


      <BlogContainer/>
      {/* <ServiciosContextProvider>
        <Tarjetero/>
      </ServiciosContextProvider> */}

    </div>
  );
}

export default App;
