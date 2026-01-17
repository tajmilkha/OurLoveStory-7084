import { Route, Switch } from "wouter";
import Index from "./pages/index";
import MemoryPage from "./pages/memory";
import HowWeMet from "./pages/how-we-met";
import ChapterTwo from "./pages/chapter-two";
import ChapterThree from "./pages/chapter-three";
import { Provider } from "./components/provider";

function App() {
        return (
                <Provider>
                        <Switch>
                                <Route path="/" component={Index} />
                                <Route path="/how-we-met" component={HowWeMet} />
                                <Route path="/chapter-two" component={ChapterTwo} />
                                <Route path="/chapter-three" component={ChapterThree} />
                                <Route path="/memory/:slug" component={MemoryPage} />
                        </Switch>
                </Provider>
        );
}

export default App;
