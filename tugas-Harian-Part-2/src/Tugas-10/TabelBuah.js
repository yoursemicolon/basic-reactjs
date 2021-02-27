import React, {Component} from 'react';
import './style.css'

function NamaBuah(props) {
    return (
        <td scope="row">{props.nama}</td>
    )
}

class TabelBuah extends Component {
    render() {
        let dataHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
        ]
        return (
            <>
            <form style={{fontFamily: "serif"}}>
                <h1>Tabel Harga Buah</h1>
                <table className="table">
                    <tr className="judul">
                        <th className="nama">Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                    {dataHargaBuah.map(item => { // for each
                        return (
                            <tr className="isi">
                                <NamaBuah nama={item.nama}/>
                                <td>{item.harga}</td>
                                <td>{item.berat/1000} kg</td>
                            </tr>
                        )
                    })}
                </table>
            </form>
            </>
        )
    }
}

export default TabelBuah;