import React from 'react';
import Input from "./Input";
import {createStyles, makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(createStyles({
    container: {
        width: '100%',
    },
    button: {}
}));

const LoginForm = () => {
    const {container, button} = useStyles();

    return (
        <div className={container}>
            <Input/>
            <Input/>
            <Button variant="contained" className={button}>
                Login
            </Button>
        </div>
    );
};

export default LoginForm;
