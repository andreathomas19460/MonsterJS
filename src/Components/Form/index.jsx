import React from 'react'

class FormsAndInputs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: ''
        }
        this.inputFullNameRef = React.createRef()
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log(this.inputFullNameRef.current.value)
        console.log("Final data is", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClearClick = (event => {
        this.inputFullNameRef.current.value = ''
        this.setState({
            fullName: ''
        })
    })

    componentDidMount () {
        this.inputFullNameRef.current.focus()
    }

    render () {
        const {fullName} = this.state
        return (
            <div>
                <h1>Forms and Inputs</h1>
                <p>Full name is: {fullName}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><input ref={this.inputFullNameRef} type='text' placeholder='Your Name' value={fullName} name='fullName' onChange = {this.handleInputChange} /></p>
                    <p><button>Send Message</button></p>
                    <p><button onClick={this.handleClearClick}>Clear</button></p>
                </form>
            </div>
        )
    }
}

export default FormsAndInputs