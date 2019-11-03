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

        let results: any[] = [];

        axios.get("https://www.autoblog.com/").then((response) => {

            console.log(response);
            const $ = cheerio.load(response.data);

            $("div.record_details").each((i: any, element: any) => {
                const headline = $(element).find("h6.record-heading a span").text().trim();
                const summary = $(element).find("p.subTitle").text().trim();
                const url = $(element).find("h6.record-heading a").attr("href");
                // const photoURL = $(element).find("a.record_image img").attr("src"); //broken
                results.push({
                    headline,
                    summary,
                    url,
                    // photoURL //broken
                })
            })
            console.log("results", results);
        }).then((data) => {

            console.log("data from scrape", data);

            axios.post("/api/articles", results).then((results) => {

                console.log("api post results", results);

            }).catch((error) => {

                console.log(error);
                
                throw error;
            })
        }).catch(err => { throw err })

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