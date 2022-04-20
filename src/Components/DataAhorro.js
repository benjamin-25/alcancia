import React from 'react'

 const DataAhorro = ({cantidad, acumulado,CMonedas,monedas}) => {
  


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
                  {
                    monedas.map((val,i)=>(
                
                      <li key={val}>Cantidad {val}: {CMonedas[i]}</li>
                    ))           
                  }                
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};


export default DataAhorro;