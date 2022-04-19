import React, { Fragment, useEffect, useState } from 'react';
import '../index.css';
import DataAhorro from './DataAhorro';



const IngresaMoneda = () => {
  
    const monedas =[50,100,200,500,1000];
    
    const [numeros, setnumeros] = useState();
    
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

        if(e.target.value==='...'){
            alert('Seleccione una moneda');
        }
        
        else{
            
            setnumeros(numero);
            setahorrado(ahorrado+numero);
            console.log(numero)
        }
        
        
    }
    

    const onEnvia=(e)=>{

        e.preventDefault();
        let numero=parseInt(e.target.value);
        
        if(e.target.value==='...'){
            alert('Seleccione una moneda');
        }
        else{
            setAcumAhorro(ahorrado)
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
        
                                     
    }
                       
        

  
    return (
    <Fragment>
        
        <form className='formulario' >
            <label className='form-label'>Selecciona Moneda para ahorro: </label>
            <div className='row'>
                <div className='col sm'>
                <select className='form-select' onChange={onEventChange}>
                    <option key='0' value='...'></option>
                    {
                        monedas.map(money=>(<option key={money} value={money}>{money}</option>))
                    }
                </select>
                </div>
                <div className='col'>
                    <button className='btn btn-success' onClick={onEnvia}>Ahorrar</button>
                </div>
            </div>
            
        </form>
        <hr/>
        <DataAhorro cantidad={cantidad} acumulado={AcumAhorro} CMonedas={CantidaMonedas}/>
    </Fragment>
  )
};

export default IngresaMoneda;
