import {useState, useEffect} from "react";
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
			<h1 className="counter">Licznik: {counter}</h1>
			<button onClick={incrementCounter}>Zwiększ</button>
		</div>
	);
}
