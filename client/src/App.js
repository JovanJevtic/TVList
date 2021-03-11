import TVLibrary from './tvlibrary/TVLibrary';
import { MovieProvider } from './MovieContext';

const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        <TVLibrary />
      </div>
    </MovieProvider>
  );
}

export default App;
