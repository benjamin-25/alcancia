import React, { Fragment, useState } from 'react'
import DataAhorro from './Components/DataAhorro';
import IngresaMoneda from './Components/IngresaMoneda';



const AlcanciaApp = () => {

      
    return (
        <Fragment>
            <div className='header'>
                <img alt='logoApp' src='./Icono.png'/>
                
            </div>
            <h4 className='titulo'>
                    Alcancia App
            </h4>
            <hr/>
            
            <IngresaMoneda/>
                        
        </Fragment>
  )
}

export default AlcanciaApp;
