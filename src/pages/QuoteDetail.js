import React from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments.js";

const QuoteDetail = () => {
    const params = useParams();

    return (
        <React.Fragment>
            <h2>QuoteDetail</h2>
            <p>{params.quoteId}</p>
            <Route path="/quotes/:quoteId/comments">
                {/* It would be the same as {`/quotes/${params.quoteId}/comments`} */}
                <Comments />
            </Route>
        </React.Fragment>
    );
};

export default QuoteDetail;
