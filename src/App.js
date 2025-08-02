import Landing from "./components/Landing";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import {books} from "./data"


function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/books" render={() => <Books books={books} />}/>

        <Footer />
    </div>
    </Router>
  );
}

export default App;
