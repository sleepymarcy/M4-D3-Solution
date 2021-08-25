import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import fantasyBooks from './fantasyBooks.json'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Watch Out!" />
        <MyBadge color="info" text="I'm a badge" />
        <SingleBook book={fantasyBooks[0]}></SingleBook>
      </header>
    </div>
  );
}

export default App;
