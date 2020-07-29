import React from 'react';
import './styles.css';
import DropDown from './common/DropDown';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    paper: {
        padding: 20
    }
});


const ComplaintsTable = ({ rows, item, isAdmin, handleStatusUpdate, handleSubmit, value }) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">message</TableCell>
                        <TableCell align="right">status</TableCell>
                        {isAdmin && <TableCell align="right">Update Status</TableCell>}
                        {isAdmin && <TableCell align="right">Save Updates</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.message}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            {isAdmin && <DropDown item={row} value={value} handleChange={handleStatusUpdate} />}
                            {isAdmin && <Button style={{ alignSelf: 'flex-end', marginLeft: '120%' }} onClick={handleSubmit}>Save</Button>}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ComplaintsTable;
