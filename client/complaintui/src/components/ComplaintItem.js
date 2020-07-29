import React from 'react';
import './styles.css';

const ComplaintItem = ({ item }) => {
    return (
        <div className="item">
            <p>ID: </p><p>{item.id}</p>
            <p>message: </p><p>{item.message}</p>
            <p>status: </p><p>{item.status} </p>
        </div>
    )
}

export default ComplaintItem;
