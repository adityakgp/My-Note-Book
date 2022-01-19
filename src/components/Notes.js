import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
// import AddNote from './AddNote';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes()
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showalert('Updated Successfully','success')
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            {/* <AddNote /> */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-danger">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>



        <div className="flex flex-col justify-center items-center">
        <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900 text-center py-25">
        Your Notes
        </h1>
        {/* <div className="flex flex-row grid grid-cols-4"> */}
        <div className="text-gray-600 body-font   container px-5 py-18 mx-auto   flex flex-wrap -mx-4 -my-8 ">
        {notes.map((note) => {
            return <Noteitem key={note._id} updateNote={updateNote} showalert={props.showalert} note={note}/>
        })}
        </div>
        </div>
        
        </>
    )
}

export default Notes
// return <Noteitem key={note._id} updateNote={updateNote} note={note} />