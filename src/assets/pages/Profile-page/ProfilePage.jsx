import Logo from '../../components/Logo/Logo'
import './ProfilePage.css'

const ProfilePage = () => {
    return (
        <div>
        <Logo />
        <div className="profile-page">

              <div className="img-container">
                <img className='myimg' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt=''></img>
              </div>
              <div className='username'>
              <h4>Enzo</h4>
              <h4>Jackson</h4>
              </div>
              <h5>childrenMichaelJackson@gmail.com</h5>
              <div className='about-me'>
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis explicabo dolor officiis magni voluptatibus voluptatum labore! Dolores nihil consectetur assumenda iusto ipsam corrupti dolor aliquam tempore, nesciunt, quae, labore quos consequatur hic. Quos sunt illum labore soluta tempora architecto eum.</p>
              </div>
              
          </div>
         
          </div>
      )
}

export default ProfilePage