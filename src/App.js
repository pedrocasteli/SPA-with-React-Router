import { Route, Switch, Redirect } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes.js";
import NewQuote from "./pages/NewQuote.js";
import QuoteDetail from "./pages/QuoteDetail.js";
import Layout from "./components/layout/Layout.js";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes" />
                </Route>
                <Route path="/quotes" exact>
                    <AllQuotes />
                </Route>
                <Route path="/quotes/:quoteId">
                    <QuoteDetail />
                </Route>
                <Route path="/new-quote">
                    <NewQuote />
                </Route>
            </Switch>
        </Layout>
    );
};

export default App;
