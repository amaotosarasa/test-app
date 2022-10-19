import {Routes, Route} from 'react-router-dom';
import {TopPage} from './page/TopPage';
import {ModalPage} from './page/ModalPage';
import {Header} from './component/Header';

import './common/css/common.css';

function App() {
  return (
    <div className="App">
      <Header>サンプル</Header>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </div>
  );
}

export default App;
