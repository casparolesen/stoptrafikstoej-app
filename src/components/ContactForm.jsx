import React from 'react';
import Input from '../components/Input';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            values: {}
        }
    }

    onChange(field, value) {
        const values = {
            ...this.state.values,
            [field]: value
        };

        this.setState({
            values
        });
    }

    submit() {
        console.log("Submit");
    }



    render() {
        return (
            <form action="mailto:caspar.olesen@ft.dk" method="post" encType="text/plain">
                <Input className="input" key={1} label="Navn" placeholder="Navn (påkrævet)" onChange={this.onChange} />
                <Input className="input" key={2} label="Email" placeholder="Email (påkrævet)" onChange={this.onChange} />
                <input type="submit" value="Send underskrift" />
                <input type="reset" value="Nulstil formular" />
            </form>
        );
    }
}

export default ContactForm;