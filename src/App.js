import Landing from "./components/Landing";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import {books} from "./data"
import BookInfo from "./Pages/Booksinfo";


function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
      <Route path="/" exact component={Home}/>
      <Route path="/books" exact render={() => <Books books={books} />}/>
      <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
