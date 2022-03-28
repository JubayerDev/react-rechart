import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'

function App() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <div className="App">
      <animated.h1 style={props}>This is React Spring</animated.h1>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
