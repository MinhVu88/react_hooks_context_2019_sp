import React, {useState, useEffect} from 'react';

// uuid is a package that generates a random key id for each song: https://github.com/uuidjs/uuid#deep-requires-now-deprecated
import { v4 as uuidv4 } from 'uuid'; 
import NewSongForm from './NewSongForm';

export default function SongList() {
    // this hook takes an arg as an initial value for this piece of state (here, an array of 3 objects/songs)
    // it returns an array containing 2 values: #1: the actual data of the state | #2: a function that can be used to edit the data
    const [songs, setSongs] = useState([{id: 1, title: 'Opiate'},
                                        {id: 2, title: 'Sober'},
                                        {id: 3, title: 'Bottom'}
                                       ]);

    const [songLength, setSongLength] = useState(0);

    const addSong = title => setSongs([...songs, {id: uuidv4(), title}]);                                    

    useEffect(() => console.log('useEffect hook ran', songs), [songs]);

    useEffect(() => console.log('useEffect hook ran', songLength), [songLength]);

    return (
        <div className='song-list'>
            <ul>
                {songs.map(song => {return (<li key={song.id}>{song.title}</li>)})}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setSongLength(songLength + 1)}>Click here to add 1 min to a song's length: {songLength}</button>
        </div>
    );
};
