import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Colas = () => {
  const [queue, setQueue] = useState([]);
  const [init, setInit] = useState(queue);
  const [end, setEnd] = useState(queue);

  const handleAdd = () => {
    setQueue([Math.floor(Math.random() * 99), ...queue]);
  };

  const handleRemove = () => {
    setQueue(queue.slice(0, queue.length - 1, ...queue));
  };

  const getFirstElement = () => {
    setInit(queue[0]);
  };

  const getLastElement = () => {
    setEnd(queue.slice(-1)[0]);
  };

  useEffect(() => {
    getFirstElement();
    getLastElement();
  });
  const encabezado = <h1>Estructura de datos Colas</h1>;
  return (
    <div className={styles.grid}>
      {encabezado}
      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href="/" className={styles.card}>
            <h2>Home</h2>
          </Link>
        </div>

        <button className={styles.card} onClick={handleAdd}>
          Agregar elemento
        </button>
        <button className={styles.card} onClick={handleRemove}>
          Retirar elemento
        </button>
      </div>
      <h4>valor de inicio = {init}</h4>
      <h4>valor de final = {end}</h4>
      <ul>
        <div>
          {queue.map((s, i) => (
            <li key={i}>
              indice: {i}, valor: {s}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Colas;
