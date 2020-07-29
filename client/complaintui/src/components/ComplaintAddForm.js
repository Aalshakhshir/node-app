import React from 'react';
import { Button,TextareaAutosize } from '@material-ui/core';

const ComplaintAddForm = ({ inputs, handleInputChange, handleCreateComplaint }) => {
    return (
        <form onSubmit={handleCreateComplaint} style={{ marginTop: '10%' }}>
            <TextareaAutosize aria-label="minimum height" value={inputs.message} onChange={handleInputChange} rowsMin={3} placeholder="Minimum 3 rows for comp description" />
            <Button type="submit" variant="secondary">Create New </Button>
        </form>
    )
}

export default ComplaintAddForm;
