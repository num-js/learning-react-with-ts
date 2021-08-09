import { useState } from 'react';
import People from './Components/People';
import AddPeople from './Components/AddPeople';
import './App.css';


interface IStates {
    peoples: {
        name: string,
        age: number,
        note?: string
    }[]
}

function App() {
    const [peoples, setPeoples] = useState<IStates["peoples"]>([
        {
            name: "Numan",
            age: 22,
            note: "Hey, This is Numan"
        }
    ]);

    return (
        <div className="App">
            <People peoples={peoples} />
            <AddPeople />
        </div>
    );
}

export default App;