import React from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import ComplaintsTable from '../components/ComplaintsTable';
import { getUserComplaints, addNewUserComplaint, updateComplaintStatusByAdmin } from '../actions/ComplaintsActions';
import ComplaintAddForm from '../components/ComplaintAddForm';

const Complaints = ({ complaints, getUserComplaintsConnect, user, history, updateUserComplaintConnect, createNewComplaintConnect }) => {
    const [value, setValue] = React.useState("");
    const [showComplaintAddForm, setShowComplaintAddForm] = React.useState(false);
    const [inputs, setInputs] = React.useState({
        message: '',
    })
    const [complaintId, setId] = React.useState("");

    const handleInputChange = React.useCallback((e) => {
        e.persist();
        setInputs(state => ({
            ...state,
            message: e.target.value
        }))
    }, [])

    React.useEffect(() => {
        if (user && user.id)
            getUserComplaintsConnect(user.id);
        else {
            history.push('/login');
        }
    }, [user, getUserComplaintsConnect, history])

    const handleCreateComplaint = () => {
        const { id } = user;
        setShowComplaintAddForm(false);
        if (inputs.message) {
            createNewComplaintConnect({ message: inputs.message, id })
        }
    }

    const handleStatusUpdate = React.useCallback((e, id) => {
        e.persist();
        setValue(e.target.value)
        setId(id);
    }, [])


    const handleSubmit = () => {
        updateUserComplaintConnect({ id: complaintId, newStatus: value })
    }
    return (
        <div>
            {complaints && complaints.length > 0 && (
                <ComplaintsTable value={value} isAdmin={user.isAdmin} rows={complaints} handleStatusUpdate={handleStatusUpdate} handleSubmit={handleSubmit} />)
            }
            {!user.isAdmin
                && <Button onClick={() => setShowComplaintAddForm(true)}>add a New Compliant</Button>}
            {showComplaintAddForm && (
                <ComplaintAddForm inputs={inputs} handleInputChange={handleInputChange} handleCreateComplaint={handleCreateComplaint} />
            )}
        </div>
    )
}
const mapStateToProps = state => ({
    complaints: state.complaints.complaints || [],
    user: state.auth.user
})

export default connect(mapStateToProps, { getUserComplaintsConnect: getUserComplaints, updateUserComplaintConnect: updateComplaintStatusByAdmin, createNewComplaintConnect: addNewUserComplaint })(Complaints);