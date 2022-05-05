import useClima from "../hooks/useClima";

const Resultado = () => {

  const {resultado} = useClima();

  return (
    <div className="contenedor clima">
      <h2>El Clima de {resultado.city_name} es: </h2>
      <p>
        {resultado.temp}<span>&#x2103;</span>
      </p>
      <p>{resultado.weather.descriptions}</p>
      <div className="temp_min_max">
        <p>
          Sensación Térmica: {resultado.app_temp}<small>°</small>
        </p>
        <p>
          Viento: {(parseInt(resultado.wind_spd * 3.6))}<small>km/h</small>
        </p>
        <p>
          Humedad: {parseInt(resultado.rh)}<small>%</small>
        </p>
        <p>
          Visibilidad: {resultado.vis}<small>km</small>
        </p>
        <p>
          Presión: {resultado.pres}<small>mbar</small>
        </p>
      </div>
    </div>
  )
}

export default Resultado;