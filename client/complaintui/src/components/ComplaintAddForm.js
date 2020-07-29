import React from 'react';

const ComplaintAddForm = ({ inputs, handleInputChange, handleCreateComplaint }) => {
    return (
        <form onSubmit={handleCreateComplaint}>
            <textarea style={{ margin: 10 }} value={inputs.message} onChange={handleInputChange} maxLength={500} />
            <button type="submit">Create New </button>
        </form>
    )
}

export default ComplaintAddForm;
