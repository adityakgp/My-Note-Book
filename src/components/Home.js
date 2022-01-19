import React from 'react';
import AddNote from './AddNote';
import Notes from './Notes';

export const Home = (props) => {
const {showalert}=props
    return (
        <div> 
            <AddNote showalert={showalert}/>
            <Notes showalert={showalert}/>
        </div>
    )
}
