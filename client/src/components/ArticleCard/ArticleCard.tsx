import React, { FunctionComponent, useState, MouseEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comments from '../Comments/Comments';
import NewComment from '../NewComment/NewComment';
import axios from 'axios';

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
    _id?: string,

    sendComment: (_id: string, body: string) => void,
}


const ArticleCard: FunctionComponent<Props> = (props: Props) => {

    const [comments, setComments] = useState([]);
    const [commentsVisible, setCommentsVisible] = useState(false);

    const classes = useStyles();

    const showComments = (_id: string) => {

        axios.get(`/api/articles/${_id}`, {

        }).then((response: any) => {

            console.log("showComment response", response);
            console.log("comments", response.data.comments);

            setComments(response.data.comments);

        }).catch((err) => {

            console.log("error", err);
            // throw err;
            return err.message;
        })
    }
    function showCommentsHandler(event: MouseEvent) {
        event.preventDefault();
        props._id && showComments(props._id);
        setCommentsVisible(!commentsVisible);
    }

    return (
        <Card id={props._id} className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.headline}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.summary}
                </Typography>
                {comments.length && commentsVisible ?
                    <Comments comments={comments} /> : <></>}

            </CardContent>

            <NewComment sendComment={props.sendComment} _id={props._id} />
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={showCommentsHandler}
                >
                    {commentsVisible ? "Hide Comments" : "Show Comments"}
                </Button>
            </CardActions>
        </Card>
    );
}

export default ArticleCard;