import Table from "react-bootstrap/Table";
import React, {useState} from "react";
import axios from "axios";
import * as constants from "./constants";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GetAllCard() {
    const [allCards, setAllCards] = useState([]);
    const handleGetAllCards = () => {
        axios.get(constants.URL + "/list_cards").then(response => {
            setAllCards(response.data);
        })
    }
    return (
        <div>
            <button type="button" style={stylingObject.button} onClick={handleGetAllCards}>List Cards</button>
            <h3 style={stylingObject.heading}>Existing card</h3>
            <div style={stylingObject.table}>
                <Table hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Card Number</th>
                        <th>Limit</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {allCards.map(card => {
                        return (
                            <tr>
                                <td>{card.name}</td>
                                <td>{card.creditCardNumber}</td>
                                <td>{card.limit}</td>
                                <td>{card.balance}</td>
                            </tr>

                        )
                    })}
                    </tbody>
                </Table>
            </div>
        </div>

    );
}

const stylingObject = {
    heading: {
        marginTop:20,
        marginBottom: 30,
        align:"center",
    },
    table:{
        marginTop:20,
    },
    button:{
        marginTop:50,
    }
}
