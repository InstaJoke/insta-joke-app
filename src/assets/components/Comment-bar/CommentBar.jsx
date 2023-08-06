import "./CommentBar.css";
import { useState } from "react";

const CommentBar = () => {
    const {text,setText} = useState("")
  return (
         <form className="input-box">
        <textarea className="input" placeholder="Type your comment here" value={text} onChange={(e)=>setText(e.target.value)} />
        <button className="btn-comment">Submit</button>
        </form>
  )
}

export default CommentBar