import React from 'react';
import './styles.css';
import DropDown from './common/DropDown';

const ComplaintItem = ({ item, isAdmin, handleStatusUpdate, handleSubmit, value }) => {
    return (
        <div className="item">
            <p>ID: </p><p>{item.id}</p>
            <p>message: </p><p>{item.message}</p>
            <p>status: </p><p>{item.status} </p>
            {isAdmin && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <DropDown item={item} value={value} handleChange={handleStatusUpdate} />
                    <button style={{alignSelf: 'flex-end' }} onClick={handleSubmit}>Save</button>
                </div>
            )}
        </div>
    )
}

export default ComplaintItem;
