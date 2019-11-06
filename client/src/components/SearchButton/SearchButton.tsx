import React, { Component, MouseEvent } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
// import { number } from 'prop-types';
const cheerio = require('cheerio');

//stateful functional component:
//const [buttonData, updateButtonData] = useState(null);

interface Props {
    scrapeFunc: () => void;
}

export default function SearchButton(props:Props) {

    function handleClick(event: MouseEvent) {
        console.log("this.props", props);
        event.preventDefault();
        props.scrapeFunc();
    }

    return (

        <Button
            variant="contained"
            color="primary"
            className="scrapeBtn"
            startIcon={< DescriptionIcon />}
            onClick={handleClick}

        > Search
        </Button >
    )
}