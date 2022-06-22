import { useState, useTransition } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {

  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);

  const handler = (e) => {
    const getValue = e.target.value;
    setValue(getValue);
    startTransition(() => {
      const numberList = [];
      const item = {
        title: "useTransition",
        // imageUrl: "/images/lag.png",
        imageUrl: "/images/no-Lag.jpg",
      };
      for (let i = 0; i <= 10000; i++) {
        numberList.push(item);
      }
      setList(numberList);
    });
  };
  return (
    <div className={styles.container}>
      <input type="number" value={value} onChange={handler} />
      <ul className={styles.list}>
        {!isPending ? list.map((item, index) => (
          <li key={index}>
            <img src={item.imageUrl} />
            <span>{item.title}</span>
          </li>
        )) : <span class="spinner"></span>}
      </ul>
    </div>
  );
}