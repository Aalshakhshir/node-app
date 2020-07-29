import React from 'react';
import './styles.css';

import { connect } from 'react-redux';
import ComplaintItem from '../components/ComplaintItem';
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
            {complaints && complaints.length > 0 && complaints.map(item => {
                return (
                    <div key={item.id}>
                        <ComplaintItem item={item} isAdmin={user.isAdmin} handleStatusUpdate={handleStatusUpdate} value={value} handleSubmit={handleSubmit} />
                    </div>
                )
            })
            }
            {!user.isAdmin
                && <button onClick={() => setShowComplaintAddForm(true)}>add a New Compliant</button>}
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