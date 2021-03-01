import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 100,
            clock: new Date(),
            visibleTime: true
        }
        this.hideTimer.bind(this) // agar ga ke-loop terus
    }

    componentDidMount() {
        if(this.props.start != undefined) {
            this.setState({time: this.props.start} )
        }
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
        this.update = setInterval(() => {
            this.setState({clock: new Date()})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.update)
        clearInterval(this.timerID)
    }

    componentDidUpdate() {
        if(this.state.time === 0 && this.state.visibleTime) {
            this.componentWillUnmount()
            this.hideTimer()
        }
    }

    tick() {
        this.setState({
            time: this.state.time - 1
        })
    }

    hideTimer() {
        this.setState({visibleTime: !this.state.visibleTime})
    }

    render() {
        const {clock} = this.state
        return(
            <>
               { // conditional rendering
                    this.state.visibleTime && (
                        <div>
                            <ul style={{
                                listStyle: "none",
                                display: "flex",
                                justifyContent: "space-between",
                                fontWeight: "bold",
                                fontSize: "25px",
                                margin: "20px 100px"
                            }}>
                                <li>
                                    Sekarang jam - {clock.toLocaleTimeString()}.
                                </li>
                                <li>
                                    hitung mundur: {this.state.time}
                                </li>
                            </ul>
                        </div>
                    )
                }
            </>
        )
    }



}

export default Timer;