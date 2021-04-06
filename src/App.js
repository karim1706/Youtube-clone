import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import SearchPage from './components/search/SearchPage';
import RecommandedVideos from './components/main-section/RecommendedVideos';
import VideoPlayer from './components/main-section/Video';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Media from 'react-media';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/video/:videoId'>
            <div className="app__page">
                <VideoPlayer />
            </div>
          </Route>
          <Route path="/search/:searchTerm">     
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommandedVideos />
            </div>
          </Route>
        </Switch> 
        <Media query="(max-width: 790px)">
          <Footer />
        </Media>
        
      </Router>
    </div>
  );
}

export default App;
