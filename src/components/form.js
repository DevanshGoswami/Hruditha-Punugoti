import React from 'react';
import axios from 'axios';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {

            name: '',
            email: '',
            message: '', 
            sent: false, 
            response:'', 
            sending: false

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
         this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        this.setState({sending: true})
        const response = await axios.post(process.env.REACT_APP_URL + "sendEmail", {
            email: this.state.email,
            name: this.state.name,
            message: this.state.message
        });
        this.setState({sent: true, response: response.data.message, sending: false});
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <div class="fields">
                    <div class="field half">
                        <input type="text" required onChange={this.handleChange} name="name" id="name" placeholder="Name" />
                    </div>
                    <div class="field half">
                        <input type="email" required onChange={this.handleChange} name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="field">
                        <textarea name="message" required onChange={this.handleChange} id="message" placeholder="Message"></textarea>
                    </div>
                </div>
                <ul class="actions">
                    {this.state.sent ? 
                    <li><span class="button disabled">{this.state.response}</span></li>
                     : 
                    <li><input type="submit" value={this.sending ? <span className="fa fa-spinner"></span> : "Send"} class="primary" /></li> 
                    }
                </ul>
            </form>
            </>
        );
    }
}

export default Form ; 