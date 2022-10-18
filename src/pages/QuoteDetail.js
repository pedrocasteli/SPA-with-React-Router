import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote.js";
import Comments from "../components/comments/Comments.js";
import useHttp from "../hooks/use-http.js";
import { getSingleQuote } from "../lib/api.js";
import LoadingSpinner from "../components/UI/LoadingSpinner.js";

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const { quoteId } = params;

    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No quote found!</p>;
    }

    return (
        <React.Fragment>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    );
};

export default QuoteDetail;
