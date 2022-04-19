import React from 'react'

 const DataAhorro = ({cantidad, acumulado,CMonedas}) => {
  
  const [cincuenta,cien,dociento,quiniento,mil] = CMonedas;

  return (
    <div>
      <div className='card'>
          <div className='card-body'>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#Targetcollapse" aria-expanded="false" aria-controls="Targetcollapse">
              Detalle Ahorro
            </button>
          
            <div className="collapse" id="Targetcollapse">
              <div className="contenedor">
                <ul>
                  <li>Cantidad Ahorrada: ${acumulado} pesos</li>
                  <li>Cantidad Monedas: {cantidad}</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
          <div className='card-body'>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#Monedacollapse" aria-expanded="false" aria-controls="Monedacollapse">
              Detalle Monedas
            </button>
          
            <div className="collapse" id="Monedacollapse">
              <div className="contenedor">
                <ul>
                  <li>Cantidad 50: {cincuenta}</li>
                  <li>Cantidad 100: {cien}</li>
                  <li>Cantidad 200: {dociento}</li>
                  <li>Cantidad 500: {quiniento}</li>
                  <li>Cantidad 1000: {mil}</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};


export default DataAhorro;