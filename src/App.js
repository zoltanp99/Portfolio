
import './App.css';
import Bio from './components/Bio/Bio';
import ContentBlock from './components/ContentBlock/ContentBlock';

function App() {
  return (
    <div className="App">
        <Bio />
        <ContentBlock headerTitle = 'Education' content = 'lorem ipsum' />
    </div>
    );
}

export default App;
