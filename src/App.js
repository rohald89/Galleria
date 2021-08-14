import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from "./components/gallery/Gallery";
import Slideshow from "./components/slideshow/Slideshow";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles";


function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header/>
      <Switch>
        <Route path='/' exact>
          <Gallery />
        </Route>
        <Route path='/slideshow'>
          <Slideshow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
