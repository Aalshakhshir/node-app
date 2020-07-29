import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        paddingLeft: theme.spacing(4),
        minWidth: 120,
        marginLeft: 80,
        height: 20,
    },
}));

const DropDown = ({ items, handleChange, value, item }) => {
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={(e) => handleChange(e, item.id)}
                >
                    <MenuItem value="pending resolution">Pending Resolution</MenuItem>
                    <MenuItem value="resolved">Resolved</MenuItem>
                    <MenuItem value="dismissed">Dismissed</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
export default DropDown;
