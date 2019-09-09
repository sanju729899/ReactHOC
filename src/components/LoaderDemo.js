import React, { Component } from 'react';
import LoadIndicator from './LoaderHOC';
import './ContactsApp.css';


class LoaderDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactList: []
        }
    }

    componentDidMount() {
        let init = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };


        fetch('https://demo1443058.mockable.io/users/', init)
            .then((response) => (response.json()))
            .then(
                (data) => {
                    this.setState({ contactList: [...data.contacts] }
                    )
                }
            )
    }


    render() {

        // const ContactListWithLoadIndicator =
        return (<div className="contactApp">

            <div>

                <ul>
                    {this.state.contactList.map(
                        (contact) => <li key={contact.email}>

                            <img src={contact.photo} width="100px" height="100px" alt="presentation" />
                            <div className="contactData">
                                <h4>{contact.name}</h4>
                                <small>{contact.email}</small>  <br /><small> {contact.phone}</small>
                            </div>
                        </li>
                    )}
                </ul>
            </div>			   
        </div>
        )
    }
}

export default LoadIndicator(LoaderDemo)