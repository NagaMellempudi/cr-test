import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddPet from './AddPet';

import Pet from './Pet';

const filterPetData = (pet) => {
    return pet.name !== "${pMame}" && pet.photoUrls[0] && pet.photoUrls[0].includes("http");
}

const PetHome = props => {

    const [petDataList, setpetDataList] = useState([]);

    useEffect(() => {

        console.log('Use Effect Hook');
        if (props.reloadPetList) {
            async function fetchPetData() {
                const petResponse = axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available',);
                setpetDataList((await petResponse).data.filter(filterPetData));
            }
            fetchPetData();
        }
    }, []);

    return (
        <div>
            <div>Pet Home</div>
            <div><AddPet reloadPetList={props.reloadPetList} /></div>
            <div style={{ height: '40px' }}></div>
            <div>
                {petDataList.map((pet) => <Pet key={pet.id} {...pet} />)}
            </div>
        </div >);
}

export default PetHome;

