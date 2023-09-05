import React,{useState} from 'react';

const AddNotes = ({handleAddNote}) => {
	const [notesText,setNotesText] = useState("")
	const characterLimit = 200;
	const handleChange = (event) =>{
		if(characterLimit - event.target.value.length >=0){
			setNotesText(event.target.value);
		}
		
	}
	const handleSaveClick = () => {
		if(notesText.trim().length > 0){
			handleAddNote(notesText)
			setNotesText("")
		}
		
	}
	return (
			<div className="note-new">
				<textarea cols="10" rows="8" placeholder="Type to add note..." value={notesText} onChange={handleChange}></textarea>
				<div className="note-footer">
					<small>
						{characterLimit - notesText.length} Remaining
					</small>
					<button className="save" onClick={handleSaveClick}>Save</button>
				</div>
			</div>
		)
}

export default AddNotes