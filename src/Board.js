import React, { Component } from 'react'
import Note from './Note'


class Board extends Component {

     constructor(props){
      super(props)
       this.state = {
       	notes: [
                {
                	id:33,
                	note:"say hi"
                },{
                	id:34,
                	note:"order printer ink"

                },{
                	id:35,
                	note:"who is this"
                }
       	]
       }
       this.eachNote= this.eachNote.bind(this)
     }



  eachNote(note,i){

  	return(
            < Note Key={i}
                  index={i}>
                  {note.note}
                  </Note>

  		)
  }

   render(){

      return(   

      	<div className='board'>

             {this.state.notes.map(this.eachNote) } 
        </div>

            )

   }


}

export default Board