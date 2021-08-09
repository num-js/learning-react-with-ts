import React from 'react';


interface IProps {
    peoples: {
        name: string,
        age: number,
        note?: string
    }[]
}

const People: React.FC<IProps> = ({ peoples }) => {

    return (
        <>
            <ul>
                {
                    peoples.map(person => {
                        return (
                            <li>
                                <div>
                                    <h1>Name: {person.name}</h1>
                                    <h4>Age: {person.age}</h4>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default People;