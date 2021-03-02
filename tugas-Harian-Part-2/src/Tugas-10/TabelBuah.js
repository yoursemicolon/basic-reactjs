import React, {Component} from 'react';
import './style.css'
import './ListBuah'
import ListBuah from './ListBuah';

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
            <form>
                <h1>Daftar Harga Buah</h1>
                <table className="table">
                    <tr className="judul">
                        <th className="nama">Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                    {dataHargaBuah.map((el, index) => { // for each
                        return (
                            <tr className="isi">
                                <ListBuah item={el} key={index}/>
                            </tr>
                        )
                    })}
                </table>
            </form>
        )
    }
}

export default TabelBuah;


