import './App.css';
import MarkdInputbox from './Components/MarkInputbox';
import ViewScreen from './Components/ViewScreen';
import { useState } from 'react';



function App() {

  const [data, setData] = useState("");

  const getvalue = e => {
    setData(e);
  }

  return (
    <div className="App">
      <div className='Inside-App'>

        <MarkdInputbox getvalue={getvalue} />
        <ViewScreen data={data} />
      </div>
    </div>
  );
}

export default App;