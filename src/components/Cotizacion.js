import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'


const Resultadodiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif
`

const Info = styled.p`
    font-size: 18px;

    span{
        font-weight:bold;
    }
`

const Precio = styled.p`

    font-size: 30px;

    span{
        font-weight:bold;
    }

`

const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado)

    return (
        <Resultadodiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación 24h: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </Resultadodiv>
    )
}

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Cotizacion
