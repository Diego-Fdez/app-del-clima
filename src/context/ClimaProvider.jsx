import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  const [noResultado, setNoResultado] = useState(false);

  const datosBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  };

  const consultarClima = async datos => {
    setCargando(true);
    setNoResultado(false)
try {
  const { ciudad, pais } = datos;
  const appId = import.meta.env.VITE_API_KEY

  const urlClima = `http://api.weatherstack.com/current?access_key=${appId}&query=${ciudad}%${pais}`;

  const { data: clima} = await axios(urlClima);

  //console.log(clima)
  setResultado(clima);
} catch (error) {
  setNoResultado('No hay resultados');
} finally {
  setCargando(false);
}
};

  return (
    <ClimaContext.Provider 
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        noResultado
      }}
    >
      {children}
    </ClimaContext.Provider>
  )
};

export {
  ClimaProvider
};

export default ClimaContext;