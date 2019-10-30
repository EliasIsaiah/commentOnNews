import React, { Component, MouseEvent } from 'react';
// import axios from 'axios';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';

class SearchButton extends Component {

    handleClick(event: MouseEvent) {
        event.preventDefault();
        alert(event.currentTarget.tagName);
    }

    render() {
        return (

            <Button
                variant="contained"
                color="primary"
                className={"scrapeBtn"}
                startIcon={< DescriptionIcon />}
                onClick={this.handleClick}

            > Search
        </Button >
        )
    }
}

export default SearchButton;