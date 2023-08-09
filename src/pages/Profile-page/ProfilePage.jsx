import { useContext } from 'react'
import Logo from '../../components/Logo/Logo'
import './ProfilePage.css'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'
import NavBar from '../../components/nav-bar/NavBar'

const ProfilePage = () => {
  const {user} = useContext(UserContext)
    return (
        <div>
        <Logo />
        <div className="profile-page">

              <div className="img-container">
                <img className='myimg' src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' alt=''></img>
              </div>
              <div className='username'>
              <h4>{user.firstName}</h4>
              <h4>{user.lastName}</h4>
              </div>
              <h5 className='email'>{user.email}</h5>
              <div className='about-me'>
                <h3>About me</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis explicabo dolor officiis magni voluptatibus voluptatum labore! Dolores nihil consectetur assumenda iusto ipsam corrupti dolor aliquam tempore, nesciunt, quae, labore quos consequatur hic. Quos sunt illum labore soluta tempora architecto eum.</p>
              </div>
              
          </div>
          <Link to="/"><button className="btn-signIn">Logout</button></Link>
          <footer className='footer'>Copyright &copy; InstaJoke 2023</footer>
          <NavBar/>
          </div>
      )
}

export default ProfilePage