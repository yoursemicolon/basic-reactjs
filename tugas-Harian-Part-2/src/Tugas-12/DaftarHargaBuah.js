import React, {Component} from 'react'
import './DaftarBuah.css'

class DaftarHargaBuah extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataHargaBuah: [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            inputNama: "",
            inputHarga: "",
            inputBerat: 0,
            currentIndex: -1 // array tidak punya index -1
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let index = this.state.currentIndex
        let newData = this.state.dataHargaBuah

        let nama = this.state.inputNama
        let harga = this.state.inputHarga.toString() // string
        let berat = this.state.inputBerat // integer

        if(index === -1) {
            // create data baru
            newData = [...newData, {nama, harga, berat}]
        } else {
            // update data yang sudah ada (tau dari indexnya)
            newData[index] = {nama, harga, berat} // enhanced object literal
        }

        this.setState({
            dataHargaBuah: newData,
            inputNama: "",
            inputHarga: "",
            inputBerat: 0,
            currentIndex: -1
        })
    }

    handleChange = (e) => {
        let typeOfInput = e.target.name
        let inputValue = e.target.value

        switch(typeOfInput) {
            case "inputNama":
                this.setState({inputNama: inputValue})
                break
            case "inputHarga":
                this.setState({inputHarga: inputValue})
                break
            case "inputBerat":
                this.setState({inputBerat: inputValue})
                break
            default:
                break
        }
    }

    handleEdit = (e) => {
        let index = e.target.value
        let editData = this.state.dataHargaBuah[index]
        this.setState({
            inputNama: editData.nama,
            inputHarga: editData.harga,
            inputBerat: editData.berat,
            currentIndex: index
        })
    }

    handleDelete = (e) => {
        let index = e.target.value
        let newDataBuah = this.state.dataHargaBuah
        let editDataBuah = newDataBuah[this.state.currentIndex] // agar indexnya tidak hilang ketika di edit
        newDataBuah.splice(index, 1) // pada index ke-i, hapus 1 item

        if(editDataBuah !== undefined) {
            // array findIndex baru ada di ES6
            let newIndex = newDataBuah.findIndex((el) => el === editDataBuah)
            this.setState({dataHargaBuah: newDataBuah, currentIndex: newIndex})
        } else {
            this.setState({dataHargaBuah: newDataBuah})
        }
    }

    render() {
        return (
            <div>
                <h1>Daftar Harga Buah</h1>
                <table className="daftar-harga">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                            <th style={{width: "200px"}}>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataHargaBuah.map((el, index) => { 
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{el.nama}</td>
                                    <td>{el.harga}</td>
                                    <td>{el.berat/1000} kg</td>
                                    <td>
                                        <button onClick={this.handleEdit} value={index}>Edit</button>
                                        <button onClick={this.handleDelete} value={index}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <form onSubmit={this.handleSubmit}>
                    <h1>Form Daftar Harga Buah</h1>
                    <table className="form-table">
                        {/* name menjadi identifier,
                            required karena wajib diisi semua */}
                        <tr>
                            <th><label for="nama">Nama: </label></th>
                            <td><input onChange={this.handleChange} id="nama" type="text" name="inputNama" value={this.state.inputNama} required/></td> 
                        </tr>
                        <tr>
                            <th><label for="harga">Harga: </label></th>
                            <td><input onChange={this.handleChange} id="harga" type="text" name="inputHarga" value={this.state.inputHarga} required/></td>
                        </tr>
                        <tr>
                            <th><label for="berat">Berat (dalam gram): </label></th>
                            <td><input onChange={this.handleChange} id="berat" type="text" name="inputBerat" value={this.state.inputBerat} required/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button>Submit</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default DaftarHargaBuah