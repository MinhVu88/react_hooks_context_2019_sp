import React, {useState} from 'react';

export default function NewSongForm({addSong}) {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        console.log(title);

        addSong(title);

        setTitle(''); // clear the input field after the 'Add song' button's clicked
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Song: </label>
            <input type='text' value={title} required onChange={e => setTitle(e.target.value)}/>
            <input type='submit' value='Add song'/>
        </form>
    );
};
