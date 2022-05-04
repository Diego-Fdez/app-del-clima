import useClima from "../hooks/useClima";

const Resultado = () => {

  const {resultado} = useClima();

  return (
    <div className="contenedor clima">
      <h2>El Clima de {resultado.location.name} es: </h2>
      <p>
        <img src={resultado.current.weather_icons} alt={`Imagen ${resultado.current.weather_descriptions}`} />
        <span>    </span>{resultado.current.temperature}<span>&#x2103;</span>
      </p>
      <p>{resultado.current.weather_descriptions}</p>
      <div className="temp_min_max">
        <p>
          Sensación Térmica: {resultado.current.feelslike}<small>°</small>
        </p>
        <p>
          Viento: {resultado.current.wind_speed}<small>km/h</small>
        </p>
        <p>
          Humedad: {resultado.current.humidity}<small>%</small>
        </p>
        <p>
          Visibilidad: {resultado.current.visibility}<small>km</small>
        </p>
        <p>
          Presión: {resultado.current.pressure}<small>mbar</small>
        </p>
      </div>
    </div>
  )
}

export default Resultado;