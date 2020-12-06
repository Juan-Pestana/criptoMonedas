import React, {useState} from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    font-family: 'Bebas Neue';
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
    margin-top: 1rem

`

const useCryptoMoneda = (label, stateInicial, opciones) => {

    const [moneda, actualizarMoneda] = useState(stateInicial)
   
    const SelectCrypto = () =>(
        <>
            <Label>{label}</Label>
            <Select 
            onChange={e => actualizarMoneda(e.target.value)}
            value={moneda}>
                <option value="">--Seleccione--</option>
                {opciones.map(elm =><option key={elm.CoinInfo.Id} value={elm.CoinInfo.Name}>{elm.CoinInfo.FullName}</option>)}
            </Select>
        </>
    )
    
    return [moneda, SelectCrypto, actualizarMoneda]
}

export default useCryptoMoneda
