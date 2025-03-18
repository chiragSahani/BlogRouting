import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import BlogItemDetails from './components/BlogItemDetails'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <div className="app-body">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/blogs/:id" component={BlogItemDetails} />
      </Switch>
    </div>
  </div>
)

export default App
