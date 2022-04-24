import './App.css';
import Tabs from "./components/Tabs/Tabs";
import { useGetRatesQuery } from './redux/services/currencyRates'
import { useParams,useNavigate } from "react-router-dom";
const App = () => {
  const { data, error, isLoading } = useGetRatesQuery();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="App">
      {isLoading && !error ? <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div> :<Tabs data={data}/>}
    </div>
  );
}

export default App;
