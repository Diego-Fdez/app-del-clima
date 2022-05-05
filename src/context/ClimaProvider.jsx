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

  const url = `https://api.weatherbit.io/v2.0/current?city=${ciudad}&country=${pais}&key=${appId}`;

  const  data  = await axios(url);
  const { lat, lon } = data.data.data[0];

  const urlClima = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&lang=es&key=${appId}`;

  const { data: clima} = await axios(urlClima);

  setResultado(clima.data[0]);
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