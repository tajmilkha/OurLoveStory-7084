import { Route, Switch } from "wouter";
import Index from "./pages/index";
import MemoryPage from "./pages/memory";
import { Provider } from "./components/provider";

function App() {
        return (
                <Provider>
                        <Switch>
                                <Route path="/" component={Index} />
                                <Route path="/memory/:slug" component={MemoryPage} />
                        </Switch>
                </Provider>
        );
}

export default App;
