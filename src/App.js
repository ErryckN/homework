//import Music from './components/music';
import Table from './components/Table';
//import list from './data/data.js';

const list = [
  {name: "A Night At The Opera (2011 Remaster)",
      release_date: "1975-11-21",
      release_date_precision: "day",
      total_tracks: 12,
      type: "album",
      uri: "spotify:album:1GbtB4zTqAsyfZEsm1RZfx"}
]

const colNames = ['Name', 'Album', 'Artist']

function App() {
  return (
    <div className='App'>
      <Table list={list} colName={colNames}/>
    </div>
  )
}


export default App;
