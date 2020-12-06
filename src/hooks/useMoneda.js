import React, {useState} from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

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

const useMoneda = (label, stateInicial, opciones) => {

    const [moneda, actualizarMoneda] = useState(stateInicial)
   
    const Seleccionar = () =>(
        <>
            <Label>{label}</Label>
            <Select 
            onChange={e => actualizarMoneda(e.target.value)}
            value={moneda}>
                <option value="">--Seleccione--</option>
                {opciones.map(elm =><option key={elm.codigo} value={elm.codigo}>{elm.nombre}</option>)}
            </Select>
        </>
    )
    
    return [moneda, Seleccionar, actualizarMoneda]
}

useMoneda.propTypes = {
    label: PropTypes.string.isRequired,
    stateInicial: PropTypes.string.isRequired,
    opciones: PropTypes.array.isRequired,

}

export default useMoneda
