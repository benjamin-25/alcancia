import React, { Fragment } from 'react'
import IngresaMoneda from './Components/IngresaMoneda';



const AlcanciaApp = () => {

      
    return (
        <Fragment>
            <div className='header'>
                <img alt='logoApp' src='./Icono.png'/>
                <h4 className='titulo'>
                    Alcancia App
                </h4>
            </div>
                                    
            <IngresaMoneda/>
                        
        </Fragment>
  )
}

export default AlcanciaApp;
