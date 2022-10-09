import {Routes, Route} from 'react-router-dom';
import {TopPage} from './page/TopPage';
import {Header} from './component/Header';

import './common/css/common.css';

function App() {
  return (
    <div className="App">
      <Header>サンプル</Header>
      <Routes>
        <Route path="/" element={<TopPage />} />
      </Routes>
    </div>
  );
}

export default App;
