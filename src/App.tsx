import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [number, setNumber] = useState<Number | string | boolean>(10);
    const [anyData, setAnyData] = useState<any>(10);

    const changeNumber = () => {
        setNumber(10);
    }

    const changeName = () => {
        setNumber('Numan');
    }

    const changeBoolean = () => {
        setNumber(true);
    }

    const changeAnyData = () => {
        setAnyData(false);
        setAnyData('Numan');
        setAnyData(100);
    }

    return (
        <div className="App">
            Hii
        </div>
    );
}

export default App;