import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Pilas = () => {
  const [stack, setStack] = useState([]);
  const [cima, setCima] = useState(stack);

  const handleAdd = () => {
    setStack([...stack, Math.floor(Math.random() * 99)]);
  };

  const handleRemove = () => {
    setStack(stack.slice(0, stack.length - 1, ...stack));
  };

  const getLastElement = () => {
    setCima(stack.slice(-1)[0]);
    console.log(stack);
  };

  useEffect(() => {
    getLastElement();
  });
  const encabezado = <h1>Estructura de datos Pilas</h1>;
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
      <h4>valor de cima = {cima}</h4>
      <ul>
        <div>
          {stack.map((s, i) => (
            <li key={i}>
              indice: {i}, valor: {s}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Pilas;
