
import CommentBar from '../Comment-bar/CommentBar'
import './SocialInteraction.css'
import {useState} from 'react'
const SocialInteraction = () => {

  const [like,setLike] = useState('notFavorite')

  const handleBtn = ()=> {
    
    if(like == 'notFavorite'){
      setLike('isFavorite')
    }
    if(like == 'isFavorite'){
      setLike('notFavorite')
    }
  }

  const [comment,setComment] = useState('notComment');
  const [show,setShow] = useState(false);

  const handleComment = ()=> {
    
    if(comment == 'notComment'){
      setComment('isComment')
      setShow(true)
    }
    if(comment == 'isComment'){
      setComment('notComment')
      setShow(false)
    }
  }

  
  const [share,setShare] = useState('notShare')

  const handleShare = ()=> {
    
    if(share == 'notShare'){
      setShare('isShare')
     
    }
    if(share == 'isShare'){
      setShare('notShare')
      
    }
  }

  return (
    <div>
    <div className='socials'>
       <button onClick={handleBtn} className={like}></button>
       <button onClick={handleComment} className={comment}></button>
       <button onClick={handleShare} className={share}></button>
    </div>
    <div className='component-commentbar'>
      {show ?<CommentBar/>:null}
    </div>
    </div>
  )
}

export default SocialInteraction