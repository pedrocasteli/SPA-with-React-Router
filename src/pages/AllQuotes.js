import React from "react";

import QuoteList from "../components/quotes/QuoteList.js";

const DUMMY_QUOTES = [
    { id: "q1", author: "Peter", text: "React is fun." },
    { id: "q2", author: "Batman", text: "I'm vengeance." },
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
