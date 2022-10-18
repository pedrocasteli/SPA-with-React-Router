import React from "react";
import { Route, useParams, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote.js";
import Comments from "../components/comments/Comments.js";

const DUMMY_QUOTES = [
    { id: "q1", author: "Peter", text: "React is fun." },
    { id: "q2", author: "Batman", text: "I'm vengeance." },
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found!</p>;
    }

    return (
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className="centered">
                    <Link
                        className="btn--flat"
                        to={`/quotes/${params.quoteId}/comments`}
                    >
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path="/quotes/:quoteId/comments">
                {/* It would be the same as {`/quotes/${params.quoteId}/comments`} */}
                <Comments />
            </Route>
        </React.Fragment>
    );
};

export default QuoteDetail;
