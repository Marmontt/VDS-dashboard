import React from 'react';
import LoginForm from "../components/LoginForm";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(createStyles({
    container: {width: '100%'},
}));

const InitialPage = () => {
    const {container} = useStyles();

    return (
        <div className={container}>
            <LoginForm/>
        </div>
    );
};

export default InitialPage;
