import React, { Fragment, useState } from 'react';
import '../index.css';
import DataAhorro from './DataAhorro';



const IngresaMoneda = () => {
  
    const monedas =[50,100,200,500,1000];
    
    const [numeros, setnumeros] = useState(0);
    const [value, setvalue] =useState(0);
    const [ahorrado, setahorrado] = useState(0);
    const [cantidad, setcantidad] = useState(0);
    const [AcumAhorro, setAcumAhorro] = useState(0);
    
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
            alert('Seleccione una moneda');
        }
        
        else{
            // controlar el numero ingresado y manejar las cantidades de este
            setnumeros(numero);
            // acumulador sumatoria total
            setahorrado(ahorrado+numero);
            
        }
        
        
    }
    

    const onEnvia=(e)=>{

        e.preventDefault();
        console.log(numeros);
        
        if(numeros===0){
            alert('Seleccione una moneda');
        }
        
        else{

            setAcumAhorro(ahorrado);
            setcantidad(cantidad+1);

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
                    <option key='0'>selecciona</option>
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
