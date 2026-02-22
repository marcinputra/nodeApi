import { useEffect, useState } from "react";

const Api = () => {
  const [table, setTable] = useState(null);

  useEffect(() => {
    async function getApi() {
      const URL = "http://localhost:3000/selectdb";
      const res = await fetch(URL, { headers: { Accept: "application/json" } });
      if (res.ok) {
        const json = await res.json();
        const tab = Array.isArray(json) ? json : json;
        setTable(tab);
        console.log(json[0]);
        console.log(tab);
      }
    }
    getApi();
  }, []);

  return (
    <div>
      {table ? (
        table.map((item, index) => (
          <div key={index}>
            {item.model} - {item.marka}
          </div>
        ))
      ) : (
        <p>Ladowanie danych ...</p>
      )}
    </div>
  );
};

export default Api;
