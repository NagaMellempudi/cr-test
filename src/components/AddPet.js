import React, { useState } from 'react';
import axios from 'axios';
import Axios from 'axios';


const AddPet = () => {
    const [petName, setPetName] = useState('');
    const [petPhotoUrl, setPetPhotoUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("petName:" + petName);
        axios.post('https://petstore.swagger.io/v2/pet/', {
            "id": 0,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": petName,
            "photoUrls": [
                petPhotoUrl
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginTop: "10px" }}>
                <input
                    type="text"
                    placeholder="Enter Pet Name"
                    value={petName}
                    onChange={event => setPetName(event.target.value)}
                    required
                />

            </div>
            <div style={{ marginTop: "10px" }}>
                <input
                    type="text"
                    placeholder="Enter Url For Pet Photo"
                    value={petPhotoUrl}
                    onChange={event => setPetPhotoUrl(event.target.value)}
                    required
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <button>Add Pet</button>
            </div>

        </form>
    );

}

export default AddPet;