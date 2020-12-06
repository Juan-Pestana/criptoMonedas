import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Error from './Error'

import useMoneda from './../hooks/useMoneda'
import useCryptoMoneda from './../hooks/useCryptoMoneda'
import axios from 'axios'



const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }


`

const Formulario = ({setMoneda, setCryptoMoneda}) => {

    const [listacrypto, setCryptoMonedas]= useState([])
    const [error, setError] = useState(false)


    const opciones = [
        {codigo: 'USD', nombre: 'Dolar de EEUU'},
        {codigo: 'MXN', nombre: 'Peso MX'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GDP', nombre: 'Libra'},


    ]


    //uso CustomHooks
    const [moneda, Seleccionar] = useMoneda('Elige tu moneda','', opciones)
    const [cryptoMoneda, SelectCrypto] = useCryptoMoneda('Elige tu Cryptomoneda','', listacrypto)
    // Llamada a la API para rellenar las opciones de CryptoMonedas
    useEffect(() => {
        const consultarAPI = async () =>{
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
            const resultado = await axios.get(url)

            setCryptoMonedas(resultado.data.Data)
        }

        consultarAPI()
       
    }, [])

    // Formulario con seleccion de Opciones

    const handleSubmit = e =>{
        e.preventDefault()

        if(moneda === '' || cryptoMoneda === ''){
            console.log('----error')
            setError(true);
            return
            
        }

        setError(false)
        setMoneda(moneda)
        setCryptoMoneda(cryptoMoneda)
    }


    return (
        <form onSubmit={handleSubmit}>
            {error && <Error mensaje='selecciona ambas monedas'/>}
            <Seleccionar/>
            <SelectCrypto/>
            <Boton type='submit' value='Calcular'/>
        </form>
    )
}

Formulario.propTypes = {
    setMoneda: PropTypes.func.isRequired,
    setCryptoMoneda: PropTypes.func.isRequired
}

export default Formulario
