import './App.css';
import Tabs from "./components/Tabs/Tabs";
import { useGetRatesQuery } from './redux/services/currencyRates'
const App = () => {
  const { data, error, isLoading } = useGetRatesQuery();


  return (
    <div className="App">
      {isLoading && !error ? <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div> :<Tabs data={data}/>}
    </div>
  );
}

export default App;
