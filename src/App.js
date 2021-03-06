import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from "./components/gallery/Gallery";
import Slideshow from "./components/slideshow/Slideshow";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AnimatePresence } from 'framer-motion';
import { Seo } from './components/Seo';


function App() {
  return (
      <Router>
      <GlobalStyles />
      <Seo title="Galleria"/>
      <Header/>
        <AnimatePresence>
          <Switch>
            <Route path='/' exact>
              <Gallery />
            </Route>
            <Route path='/slideshow'>
              <Slideshow />
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
);
}

export default App;
