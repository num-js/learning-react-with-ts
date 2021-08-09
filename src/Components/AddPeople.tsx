import React, { useState } from 'react';

const AddPeople = () => {
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        note: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const saveUserData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <div>
                <form onSubmit={saveUserData}>
                    <input type="text" placeholder="Name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    /> <br /><br />

                    <input type="number" placeholder="Age"
                        name="age"
                        value={userData.age}
                        onChange={handleInputChange}
                    /> <br /><br />

                    <textarea placeholder="Notes"
                        name="note"
                        value={userData.note}
                        onChange={handleInputChange}
                    ></textarea> <br /><br />

                    <button type="submit">
                        Save Data
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddPeople;