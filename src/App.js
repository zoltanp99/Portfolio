
import './App.css';
import Bio from './components/Bio/Bio';
import ContentBlock from './components/ContentBlock/ContentBlock';
import * as constants from './constants';

function App() {

  return (
    <div className="App">
        <Bio paragraphs={constants.bioArray}/>
        <ContentBlock headerTitle = 'Skillset' content = {constants.loremIpsum} />
        <ContentBlock headerTitle = 'Education' content = {constants.loremIpsum} />
        <ContentBlock headerTitle = 'Work History' content = {constants.loremIpsum} />
    </div>
    );
}

export default App;
