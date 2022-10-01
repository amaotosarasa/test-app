import {Routes, Route} from 'react-router-dom';
import {TopPage} from './page/TopPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </div>
  );
}

export default App;
