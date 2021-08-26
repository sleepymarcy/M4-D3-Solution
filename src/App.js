import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import fantasyBooks from './fantasyBooks.json'
import BookList from './components/BookList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Watch Out!" />
        <MyBadge color="info" text="I'm a badge" />
        <SingleBook book={fantasyBooks[0]}></SingleBook>
        <BookList books={fantasyBooks} />
      </header>
    </div>
  );
}

export default App;
