import React from 'react'

class FormsAndInputs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fullName: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Final data is", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // componentDidMount () {
    //     this.setState({
    //         fullName: ""
    //     })
    // }

    render () {
        const {fullName} = this.state
        return (
            <div>
                <h1>Forms and Inputs</h1>
                <p>Full name is: {fullName}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='Your Name' value={fullName} name='fullName' onChange = {this.handleInputChange} /></p>
                    <p><button>Send Message</button></p>
                </form>
            </div>
        )
    }
}

export default FormsAndInputs