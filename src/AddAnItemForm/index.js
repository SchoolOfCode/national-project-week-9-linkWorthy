import React from 'react';
import './addAnItemForm.css';

import Inputs from './Inputs';

function AddAnItemForm({ onSubmit }) {
    return(
            <div className="window">
                <Inputs onSubmit={onSubmit} />
            </div>
            
    )
}

export default AddAnItemForm;