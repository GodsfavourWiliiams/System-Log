import './App.css';
import SearchBar from './component/layout/SearchBar';
import Logs from './component/logs/Logs';
import AddBtn from './component/layout/addBtn';

function App() {
  return (
    <div className="">
      <SearchBar/>
      <AddBtn/>
      <Logs/>
    </div>
  );
}

export default App;
