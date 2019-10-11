import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(createStyles({
    textField: {width: 200},
}));

const Input: React.FC = () => {
    const {textField} = useStyles();

    return (
        <>
            <TextField
                id="standard-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                className={textField}
                margin="normal"
            />
        </>
    );
};

export default Input;
