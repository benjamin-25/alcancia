import React from 'react'

 const DataAhorro = ({cantidad, acumulado,CMonedas,monedas}) => {
  


  return (
    <div>
      <div className='card'>
          <div className='card-body'>
            <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#Targetcollapse" aria-expanded="false" aria-controls="Targetcollapse">
              Detalle Ahorro
            </button>
          
            <div className="collapse" id="Targetcollapse">
              <div className="contenedor">
                <ul>
                  <li><strong>Ahorro Total:</strong> ${acumulado} pesos</li>
                  <li><strong>Cantidad Monedas:</strong> {cantidad}</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
          <div className='card-body'>
            <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#Monedacollapse" aria-expanded="false" aria-controls="Monedacollapse">
              Detalle Monedas
            </button>
          
            <div className="collapse" id="Monedacollapse">
              <div className="contenedor">
                <ul>
                  {
                    monedas.map((val,i)=>(
                
                      <li key={val}><strong>Monedas de {val}:</strong> {CMonedas[i]} monedas.</li>
                    ))           
                  }                
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='card'>
          <div className='card-body'>
            <button className="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#Cantidadcollapse" aria-expanded="false" aria-controls="Cantidadcollapse">
              Detalle Cantidad por Monedas
            </button>
          
            <div className="collapse" id="Cantidadcollapse">
              <div className="contenedor">
                <ul>
                  {
                    monedas.map((val,i)=>(
                
                      <li key={val}><strong>Dinero en Monedas de {val}:</strong> ${val*CMonedas[i]} pesos.</li>
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