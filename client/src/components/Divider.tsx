import React from 'react';
import { Divider } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
  }),
);

export default function ListDividers() {
    const classes = useStyles();
  
    return (
        <Divider />
    );
  }