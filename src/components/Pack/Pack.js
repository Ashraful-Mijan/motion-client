import React from 'react';
import { useHistory } from 'react-router-dom';

const Pack = ({pack}) => {
    const {packName, price} = pack

    let history = useHistory()

    const handleOrder = (id)=> {
        history.push(`/packs/${id}`)
    }

    return (
        <div className="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-center primary-bg text-uppercase py-3 text-white">{packName}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={()=>handleOrder(`${packName}`)} class="btn btn-primary primary-bg card-link">Continue With ${price}</button>
                </div>
            </div>
        </div>
    );
};

export default Pack;