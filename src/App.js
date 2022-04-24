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
      {error && <h1>Error,please reload page</h1>}
    </div>
  );
}

export default App;
