import SensorCard from "./SensorCard";
import thermoIcon from "/Users/miguelgomezcarmona/Desktop/IoT_SmartHouse/src/assets/thermoIcon.png";
import distanceIcon from "/Users/miguelgomezcarmona/Desktop/IoT_SmartHouse/src/assets/DistanceSensor.jpg";

export default function Grid() {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-md-4">
            <SensorCard
            cardTitle="Temperatura"
            descriptionText="Valor"
            value="25°C"
            imageURL={thermoIcon}
            linkButton="/sensor/temperatura"
        />
        </div>
        <div className="col-md-4">
          <SensorCard
            cardTitle="Humedad"
            descriptionText="Valor"
            value="60%"
            imageURL= "..."
            linkButton="/sensor/humedad"
          />
        </div>

        <div className="col-md-4">
          <SensorCard
            cardTitle="Distancia"
            descriptionText="Valor"
            value="153 cm"
            imageURL={distanceIcon}
            linkButton="/sensor/distancia"
          />
        </div>
      </div>
    </div>
  );
}
