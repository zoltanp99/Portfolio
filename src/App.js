
import './App.css';
import Bio from './components/Bio/Bio';
import ContentBlock from './components/ContentBlock/ContentBlock';
import * as constants from './constants';

function App() {
  return (
    <div className="App">
        <Bio />
        <ContentBlock headerTitle = 'Education' content = {constants.loremIpsum} />
    </div>
    );
}

export default App;
