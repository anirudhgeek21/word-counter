import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("The button has been clicked by you")
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event)=>{
    console.log(event)
    console.log("On change")
    setText(event.target.value)
  }

  const handleLowerClick = () => {
    console.log("The button has been clicked by you")
    let newText = text.toLowerCase();
    setText(newText)
  }


  const handelClear = () => {
    console.log("cleared")
    setText("")
  }


  // const findInput = (event)=>{
  //   let find_word = (event.target.value);
  //   const b= find_word;
  //   return b;
  //   findWord(b)
  // }
  



  // const findWord = (b)=>{
  //   const findInput = (event)=>{
  //     let find_word = (event.target.value);
  //     b = find_word;
  //     return b;
  //   }
  //   console.log(findInput);
  //   console.log(b);
  //   const x = text.split(" ");
  //   for (let i=0; i<=text.split(" ").length; i++){
  //     if (x[i] == b ){
  //       console.log("Word exists");
  //     }
  //   }
  // }
  
  const [text,setText] = useState("")
  return (
    <>
    <div className='container mb-5'>
        <div className="form-group m-4">
            <div className='m-5'>
              <h1>{props.heading}</h1>
            </div>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        

        <button className="btn btn-primary m-3" onClick={handleUpClick}>Click here for uppercase</button>
        <button className="btn btn-primary m-3" onClick={handleLowerClick}>Click here for lowercase</button>
        <button className="btn btn-primary m-3" onClick={handelClear}>Click to clear</button>

        {/* <textarea name="" id="" cols="10" rows="1" placeholder='type word to find' onChange={findInput}></textarea>
        <button className="btn btn-primary m-3" onClick={findWord}>Find</button> */}
    </div>
    

    <div className="container">
      <h3>{text.split(" ").length - 1} words</h3>
      {/* subtract 1 as due to split so it considers blank space as 1st element */}
  
      <h4>{text.length} characters</h4>
    </div>
   
    <div className="container mt-5">
      <div className='m-4'>
        <h1><u>Preview</u></h1>
      </div>
      <p><strong><em>{text}</em></strong></p>
    </div>


    </>
  )


}


TextForm.propTypes ={
  heading : PropTypes.string
}