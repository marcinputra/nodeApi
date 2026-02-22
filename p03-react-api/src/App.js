import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [table, setTable] = useState(null);

  useEffect(() => {
    async function getApi() {
      const URL =
        "https://api.nbp.pl/api/exchangerates/tables/a/2026-02-18/?format=json";
      const res = await fetch(URL, { headers: { Accept: "application/json" } });
      if (res.ok) {
        const json = await res.json();
        const tab = Array.isArray(json) ? json[0].rates : json;
        setTable(tab);
        console.log(json[0].rates);
        console.log(tab);
      }
    }
    getApi();
  }, []);

  return (
    <div className="App">
      <h1>API NBP</h1>
      {table ? (
        table.map((item, index) => <div key={index}>{item.code}</div>)
      ) : (
        <p>Ładowanie danych...</p>
      )}
    </div>
  );
}

export default App;
