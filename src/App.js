import React from 'react';
import {useState} from "react";
import axios from "axios";
import GetAllCard from "./getAllCard";
import * as constants from "./constants";

function App() {
    const [name, setName] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [limit, setLimit] = useState(0);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {
                name: name,
                card_number: creditCardNumber,
                limit: limit,
            }
            await axios.post(constants.URL + "/add_card", body)
                .then(response => {
                    if (response.status === 200) {
                        setMessage(response.data.msg);
                    }
                }).catch(error => {
                    console.log(error.response.data.errors[0].msg);
                    setMessage(error.response.data.errors[0].msg);
                })

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h3 style={stylingObject.heading}>Card Processing System</h3>
            <form style={stylingObject.form} onSubmit={handleSubmit}>
                <label style={stylingObject.label}>Name:
                    <input type="text"
                           placeholder="name"
                           value={name}
                           onChange={(event) => setName(event.target.value)}/>
                </label>
                <label style={stylingObject.label}>Credit Card Number:
                    <input type="text"
                           placeholder="credit card number"
                           value={creditCardNumber}
                           onChange={(event) => setCreditCardNumber(event.target.value)}/>
                </label>
                <label style={stylingObject.label}>Limit:
                    <input type="number"
                           placeholder="limit"
                           value={limit}
                           onChange={(event) => setLimit(event.target.value)}/>
                </label>
                <button style={stylingObject.button} type="submit">submit</button>
            </form>
            <div style={stylingObject.message}>{message ? <p>{message}</p> : null}</div>
            <GetAllCard/>
        </div>
    );
}

const stylingObject = {
    heading: {
        align: "centre",
        fontSize: 50,
    },
    form: {
        width: 10,
    },
    label: {
        margin: 10,
    },
    button: {
        margin: 10,
    },
    message: {
        width: '100%',
    }


}

export default App;
