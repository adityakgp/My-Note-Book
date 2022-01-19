import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start
        h-full bg-gray-200 bg-opacity-75 px-4 pt-6 pb-6 rounded-lg">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">{note.tag}</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{note.title}</h1>
            <p className="leading-relaxed mb-5">{note.description}</p>
            <div className="flex items-center">
            <i className="far fa-trash-alt mx-2"  onClick={()=> {deleteNote(note._id);
            props.showalert('Note Deleted Successfully','success')}}></i>
            <i className="far fa-edit mx-2"       onClick={()=>{updateNote(note);}}></i>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Noteitem

// onClick={()=>{updateNote(note)}}