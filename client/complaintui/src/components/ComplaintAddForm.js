import React from 'react';

const ComplaintAddForm = ({ inputs, handleInputChange, handleCreateComplaint }) => {
    return (
        <form onSubmit={handleCreateComplaint}>
            <textarea value={inputs.message} onChange={handleInputChange} maxLength={500} />
            <button type="submit" />
        </form>

    )
}

export default ComplaintAddForm;
