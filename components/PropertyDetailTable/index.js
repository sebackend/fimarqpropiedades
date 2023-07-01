export default function PropertyDetailTable({ property }) {
  const { tipo } = property;

  switch (tipo) {
    case "CASA":
      return tableForHouse(property);
    case "DEPARTAMENTO":
      return tableForApartment(property);
    case "PARCELA":
      return tableForParcela(property);
    case "SITIO":
      return tableForParcela(property);
    case "ESTACIONAMIENTO":
      return tableForParcela(property);
    case "BODEGA":
      return tableForParcela(property);
    case "OFICINA":
      return tableForParcela(property);
    case "LOCAL COMERCIAL":
      return tableForParcela(property);
    case "LOTEO":
      return tableForParcela(property);
    case "TERRENO":
      return tableForParcela(property);
    case "AGRÍCOLA":
      return tableForParcela(property);
    default:
      return tableForApartment(property);
  }
}

const tableForHouse = (property) => {
  const {
    tipo,
    nro_habitaciones,
    nro_banos,
    metros_utiles,
    metros_totales,
    estacionamientos,
    bodegas,
    comuna,
  } = property;

  return (
    <table className="table table-bordered table-hover">
      <tbody>
        <tr>
          <th>tipo</th>
          <td>{tipo}</td>
        </tr>
        <tr>
          <th>COMUNA</th>
          <td>{comuna}</td>
        </tr>
        <tr>
          <th>Habitaciones</th>
          <td>{nro_habitaciones}</td>
        </tr>
        <tr>
          <th>Baños</th>
          <td>{nro_banos}</td>
        </tr>
        <tr>
          <th>Metros Útiles</th>
          <td>{metros_utiles}</td>
        </tr>
        <tr>
          <th>Metros Totales</th>
          <td>{metros_totales}</td>
        </tr>
        <tr>
          <th>Estacionamientos</th>
          <td>{estacionamientos}</td>
        </tr>
        <tr>
          <th>Bodegas</th>
          <td>{bodegas}</td>
        </tr>
      </tbody>
    </table>
  );
};

const tableForApartment = (property) => {
  const {
    tipo,
    nro_habitaciones,
    nro_banos,
    metros_utiles,
    metros_totales,
    estacionamientos,
    bodegas,
    comuna,
  } = property;

  return (
    <table className="table table-bordered table-hover">
      <tbody>
        <tr>
          <th>tipo</th>
          <td>{tipo}</td>
        </tr>
        <tr>
          <th>COMUNA</th>
          <td>{comuna}</td>
        </tr>
        <tr>
          <th>Habitaciones</th>
          <td>{nro_habitaciones}</td>
        </tr>
        <tr>
          <th>Baños</th>
          <td>{nro_banos}</td>
        </tr>
        <tr>
          <th>Metros Útiles</th>
          <td>{metros_utiles}</td>
        </tr>
        <tr>
          <th>Metros Totales</th>
          <td>{metros_totales}</td>
        </tr>
        <tr>
          <th>Estacionamientos</th>
          <td>{estacionamientos}</td>
        </tr>
        <tr>
          <th>Bodegas</th>
          <td>{bodegas}</td>
        </tr>
      </tbody>
    </table>
  );
};

const tableForParcela = (property) => {
  const {
    tipo,
    nro_habitaciones,
    nro_banos,
    metros_utiles,
    metros_totales,
    estacionamientos,
    bodegas,
    comuna,
  } = property;

  return null;
};
