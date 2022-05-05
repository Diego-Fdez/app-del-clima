import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";

const AppClima = () => {

  const {resultado, cargando, noResultado} = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? <Spinner /> :
        resultado?.city_name ? <Resultado /> :
        noResultado ? <p>{noResultado}</p>
        : <p>Consulta el clima</p>}
      </main>
    </>
  )
};

export default AppClima;