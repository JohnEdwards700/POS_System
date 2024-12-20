// import ProductList from "./apifetch";
// export default function App() {
//   return (
//     <div>
//       <ProductList />
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBackendData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Full Stack App</h1>
      {backendData && (
        <div>
          <p>Message from Backend: {backendData.message}</p>
          <p>Timestamp: {backendData.timestamp}</p>
        </div>
      )}
    </div>
  );
}

export default App;
