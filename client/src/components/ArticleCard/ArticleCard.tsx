import React, { useState, MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    card: {
        width: "100%",
        maxWidth: "600px",
        margin: "1rem",
        textAlign: "left"
    },
    media: {
        height: 140,
    },
});

interface Props {
    headline: string,
    summary: string,
    comments?: string[],
    id?: string,
    sendComment: (id:string, body:string) => void,
    showComments: (id:string) => any
}

export default function MediaCard(props: Props) {
    const classes = useStyles();

    function showCommentsHandler (event: MouseEvent) {
        console.log("showCommentsHandler clicked");
        event.preventDefault();
        props.comments = props.showComments("5dc31ec93e455f3b0a2a211e");
    }

    return (
        <Card id={props.id} className={classes.card}>
            {/* <CardActionArea> */}
            {/* <CardMedia
                    className={classes.media}       //no image for now
                    image="/test.jpg"
                    title="Contemplative Reptile"
                /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.headline}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.summary}
                </Typography>
                {<Comments comments={props.comments} sendComment={props.sendComment} />}

            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
                <Button 
                size="small" 
                color="primary"
                onClick={showCommentsHandler}
                >
                    Comments
                </Button>
            </CardActions>
        </Card>
    );
}