import { render } from '@testing-library/react'
import React from 'react'

class ListBuah extends React.Component {
    render(){
    return (
        <>
            <td>{this.props.item.nama}</td>
            <td>{this.props.item.harga}</td>
            <td>{this.props.item.berat/1000} kg</td>
        </>
    )}
}

export default ListBuah