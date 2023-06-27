export default function PropertyDetailTable({ property }) {
  const {
    tipo,
    nro_habitaciones,
    nro_banos,
    metros_utiles,
    metros_totales,
    estacionamientos,
    bodegas,
    comuna,
  } = property.attributes;
  return (
    <>
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
    </>
  );
}
