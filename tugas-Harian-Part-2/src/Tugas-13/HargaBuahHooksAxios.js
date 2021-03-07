import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './DaftarBuah.css'

const DaftarHargaBuah = () => {

    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [input, setInput] = useState({name: "", price: "", weight: 0, id: null}) // id = null -> create

    useEffect(() => {
        if(dataHargaBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => { // respons
                let data = res.data
                setDataHargaBuah(data.map(el => {return {id: el.id, name: el.name, price: el.price, weight: el.weight}}))
            })
        }
    }, [dataHargaBuah])

    const handleSubmit = (e) => {

        e.preventDefault() // menahan submit

        // menerima inputan
        let name = input.name
        let price = input.price
        let weight = input.weight

        if(input.id === null){ // create data baru
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
                .then(res => {
                // lakukan handle ketika sukses
                    let data = res.data
                    setDataHargaBuah([...dataHargaBuah, 
                    {   id: data.id, 
                        name,
                        price, 
                        weight
                    }])
                })
        } else { // edit data
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, {name, price, weight})
                .then(() => {
                // lakukan handle ketika sukses
                    let dataBuah = dataHargaBuah.find(el => el.id === input.id)
                    dataBuah.name = name
                    dataBuah.price = price
                    dataBuah.weight = weight
                    setDataHargaBuah([...dataHargaBuah])
                })
            }

            // reset input form to default
            setInput({name: "", price: "", weight: 0, id: null}) 
    }

    const handleChange = (e) => {
        let typeOfInput = e.target.name
        let inputValue = e.target.value

        switch(typeOfInput) {
            case "name":
                setInput({...input, name: inputValue})
                break
            case "price":
                setInput({...input, price: inputValue})
                break
            case "weight":
                setInput({...input, weight: inputValue})
                break
            default:
                {break}
        }
    }

    const handleEdit = (e) => {
        let idDataBuah = parseInt(e.target.value)

        axios.get(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}`)
        .then(res => { // respons
            let dataBuah = res.data
            setInput({name: dataBuah.name, price: dataBuah.price, weight: dataBuah.weight, id: dataBuah.id})
        })
    }

    const handleDelete = (e) => {
        let idDataBuah =  parseInt(e.target.value)

        if(idDataBuah === input.id) {
            setInput({...input, id: null})
        }

        let newDataBuah = dataHargaBuah.filter(el => el.id !== idDataBuah)
        setDataHargaBuah([...newDataBuah]) // spread

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idDataBuah}}`)
        .then(res => { // respons
            console.log(res)
        })
    }

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
                    {   // handling, render kalau datanya sudah ada
                        dataHargaBuah !== null && dataHargaBuah.map((el, index) => { 
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el.name}</td>
                                <td>{el.price}</td>
                                <td>{el.weight/1000} kg</td>
                                <td>
                                    <button onClick={handleEdit} value={el.id}>Edit</button>
                                    <button onClick={handleDelete} value={el.id}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <h1>Form Daftar Harga Buah</h1>
                <table className="form-table">
                    {/* name menjadi identifier,
                        required karena wajib diisi semua */}
                    <tr>
                        <th><label for="nama">Nama: </label></th>
                        <td><input onChange={handleChange} id="nama" type="text" name="name" value={input.name} required/></td> 
                    </tr>
                    <tr>
                        <th><label for="harga">Harga: </label></th>
                        <td><input onChange={handleChange} id="harga" type="text" name="price" value={input.price} required/></td>
                    </tr>
                    <tr>
                        <th><label for="berat">Berat (dalam gram): </label></th>
                        <td><input onChange={handleChange} id="berat" type="number" name="weight" value={input.weight} required/></td>
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

export default DaftarHargaBuah