import React, { Component, MouseEvent } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
// import { number } from 'prop-types';
const cheerio = require('cheerio');

//stateful functional component:
//const [buttonData, updateButtonData] = useState(null);

class SearchButton extends Component {

    handleClick(event: MouseEvent) {
        event.preventDefault();
        axios.get("https://www.autoblog.com/").then(function (response) {

            console.log(response);
            let results: any[] = [];
            const $ = cheerio.load(response.data);

            $("h6.record-heading a span").each((i: any, element: any) => {
                const title = $(element).text();
                results.push({
                    title: title
                })
            })
            console.log("results", results);
        }).catch(err => { throw err })

        axios.get("/api/articles").then( (data) => {
            console.log(data);
        })

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