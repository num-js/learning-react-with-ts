import React from 'react';

const App = () => {

    let name: string = "Numan";
    let age: number = 22;
    let isDev: boolean = true;
    let langs: string[];

    // Arrays
    let role: [number, string];
    role = [10, 'data']

    let myData: number | string;

    let someData: any; //Not Recommended
    let someMoreData: unknown; //Recommended

    // Objects
    type Dev = {    //Interface
        name: string,
        age?: number
    }
    let devData: Dev = {    //Object with Dev Type/Interface
        name: "Numan Ahmed",
    }

    // Array
    let lotsOfDev: Dev[]; //Array with Dev Type/Interface


    const myDataFun = (name: string) => void {
        console.log(name)
    }

    myDataFun('numan');

    return (
        <>
            <h1>
                {devData.name}
            </h1>
        </>
    );
}

export default App;
