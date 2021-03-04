import React, {Component} from 'react'

class FormHargaBuah extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: "",
            currentIndex: -1
        }
    }


    handleSubmit = (e) => {
        let currentIndex = this.state.currentIndex
        let daftarBuah = this.state.daftarBuah
        let input = this.state.input
        if(currentIndex === -1) {
            this.setState({
                input: "",
                daftarBuah: [...daftarBuah, input]
            })
        } else {
            daftarBuah[currentIndex] = input
            this.setState({
                daftarBuah: [...daftarBuah],
                input: "",
                currentIndex: -1
            })
        }
    }

    render() {
        return (
            
        )
    }

}

export default FormHargaBuah