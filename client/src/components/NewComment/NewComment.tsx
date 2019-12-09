import React, { FunctionComponent, useState, MouseEvent, ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//[All comments]
//Add your own comment
//<button class="hideComments" />

interface Props {
    sendComment: (id: string, body: string) => void,
    comment?: string,
    _id?: string;
}



const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        textField: {
            margin: "0 1rem 0 1rem",
            width: "100%",
        }
    })
);

const MediaCard: FunctionComponent<Props> = (props: Props) => {
    const [comment, setComment] = useState<string>("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        console.log("changeHandler triggered!", event.target.value);
        setComment(event.target.value)
    }

    const classes = useStyles();

    function handleClick(event: MouseEvent) {
        console.log("this.props", props);
        event.preventDefault();
        props._id && props.sendComment(props._id, comment);
    };

    return (
        <>
            <TextField
                id="standard-basic"
                className={classes.textField}
                label="New Comment"
                margin="normal"
                onChange={handleChange}
            />
            <Button
                variant="contained"
                color="primary"
                className="sendBtn"
                onClick={handleClick}
            >Submit
                </Button>
        </>
    );
}

export default MediaCard;