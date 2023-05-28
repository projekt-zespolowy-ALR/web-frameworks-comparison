import {useState, useEffect} from "react";
import styles from "./Counter.module.css";
export default function Counter() {
	const [counter, setCounter] = useState(0);
	const incrementCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};
	useEffect(() => {
		alert(counter);
	});
	return (
		<div>
			<h1 className={styles.counter}>Licznik: {counter}</h1>
			<button onClick={incrementCounter}>Zwiększ</button>
		</div>
	);
}
