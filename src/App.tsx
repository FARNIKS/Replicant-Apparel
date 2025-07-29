import "./App.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "./firebase/db"; // Asegúrate de que la ruta sea correcta

function App() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Productos en Firebase</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li> // Asegúrate que cada documento tenga un campo 'name'
        ))}
      </ul>
    </div>
  );
}

export default App;
