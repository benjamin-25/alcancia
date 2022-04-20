import React, { Fragment, useState } from 'react';
import '../index.css';
import DataAhorro from './DataAhorro';
import swal from 'sweetalert';



const IngresaMoneda = () => {
  
    const monedas =[50,100,200,500,1000];
    
    const [numeros, setnumeros] = useState(0);
    
    const [ahorrado, setahorrado] = useState(0);
    const [cantidad, setcantidad] = useState(0);
    const [AcumAhorro, setAcumAhorro] = useState(0);
    
    // contadores manejados por estados
    const [cincuenta, setcincuenta] = useState(0);
    const [cien, setcien] = useState(0);
    const [docientos, setdocientos] = useState(0);
    const [quinientos, setquinientos] = useState(0);
    const [mil, setmil] = useState(0);
    
    const CantidaMonedas =[cincuenta,cien,docientos,quinientos,mil];

    const onEventChange=(e)=>{

        e.preventDefault();
        let numero=parseInt(e.target.value);
        
        if(numero===0){
            swal(
                {
                    title:'Error!',
                    text:'Por Favor Seleccione una Moneda',
                    icon:'error',
                    button:'Aceptar'
                    
                }
            );
        }
        
        else{
            // controlar el numero ingresado y manejar las cantidades de este
            setnumeros(numero);
            // captura valor al momento de ser seleccionado
            setahorrado(ahorrado+numero);
            
        }
        
        
    }
    

    const onEnvia=(e)=>{

        e.preventDefault();
        
        // controlamos el envio sin informacion por el usuario
        if(numeros===0){

            swal(
                {
                    title:'Error!',
                    text:'Por Favor Seleccione una Moneda',
                    icon:'error',
                    button:'Aceptar'
                    
                }
            );
            
        }
        
        else{

            // acumulador sumatoria total
            setAcumAhorro(ahorrado);
            setcantidad(cantidad+1);

            swal(
                {
                    title:'Exitoso!',
                    text:`Moneda de ${numeros} Ingresada a la Alcancia.`,
                    icon:'success',
                    button:'Aceptar',
                    timer:'1700'
                    
                }
            );
            
            // validacion de los tipos de monedas para sus contadores 
            if(numeros===50){
                setcincuenta(cincuenta+1);
            }
            else if(numeros===100){
                setcien(cien+1);
            }
            else if(numeros === 200){
                setdocientos(docientos+1);
            }
            else if(numeros === 500){
                setquinientos(quinientos+1);
            }
            else if(numeros===1000){
                setmil(mil+1);
            }

        }
        setnumeros(0);
                               
    }
                       
      
    return (
    <Fragment>
                        
        <form className='formulario' onSubmit={onEnvia}>
            
            <label className='form-label'>Selecciona Moneda para ahorro: </label>
            <div className='row'>
                <div className='col sm'>
                <select value={numeros} className='form-select' onChange={onEventChange}>
                    <option className="defecto" key='0'>Selecciona...</option>
                    {
                        monedas.map(money=>(<option key={money} value={money}>{money}</option>))
                    }
                </select>
                </div>
                <div className='col'>
                    <button type='submit' className='btn btn-success'>Ahorrar</button>
                </div>
            </div>
            
        </form>
        <hr/>
        <DataAhorro cantidad={cantidad} acumulado={AcumAhorro} CMonedas={CantidaMonedas} monedas={monedas}/>
    </Fragment>
  )
};

export default IngresaMoneda;
