import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Comment from '../Comment/Comment';


//[All comments]
//Add your own comment
//<button class="hideComments" />

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },

        textField: {
            margin: "auto",
            width: "100%",
        },

        card: {
            width: "100%",
            maxWidth: "600px",
            margin: "1rem",
            textAlign: "left"
        },
        media: {
            height: 140,
        },
    }),
);

interface Props {
    comments?: string[],
}

export default function MediaCard(props: Props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                {/* <Typography variant="body2" color="textSecondary" component="p"> */}
                {props.comments && props.comments.map((articleComment: any, i: number) => {
                    return <Comment key={i} body={articleComment.body} />
                })}
                {/* </Typography> */}
            </CardContent>
        </Card>
    );
}