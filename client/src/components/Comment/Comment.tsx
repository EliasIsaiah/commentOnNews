import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

interface Props {
    body: string,
}

export default function Comment(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body2" gutterBottom>
        {props.body}
      </Typography>
    </div>
  );
}