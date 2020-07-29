import React from 'react';
import './styles.css';

import { connect } from 'react-redux';
import ComplaintItem from '../components/ComplaintItem';
import { getUserComplaints } from '../actions/ComplaintsActions';

const Complaints = ({ complaints, getUserComplaintsConnect, userId }) => {
    console.log(complaints);
    React.useEffect(() => {
            getUserComplaintsConnect(userId || 1);
    }, [])
    if (complaints && complaints.length > 0) {
        return (
            <div>
                {complaints.map(item => {
                    return (
                        <div key={item.id}>
                            <ComplaintItem item={item} />
                        </div>
                    )
                })}
            </div>
        )
    }
    return <div></div>
}
const mapStateToProps = state => ({
    complaints: state.complaints.complaints || [],
    userId: state.auth.user.id
})

export default connect(mapStateToProps, { getUserComplaintsConnect: getUserComplaints })(Complaints);