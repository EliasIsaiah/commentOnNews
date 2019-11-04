import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//[All comments]
//Add your own comment
//<button class="hideComments" />

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        textField: {
            margin: "auto",
            width: "100%",
        }
    })
);

export default function MediaCard() {
    const classes = useStyles();

    return (
        <>
        <TextField
            id="standard-basic"
            className={classes.textField}
            label="New Comment"
            margin="normal"
        />
        <Button variant="contained" color="primary">Submit</Button>
        </>
    );
}