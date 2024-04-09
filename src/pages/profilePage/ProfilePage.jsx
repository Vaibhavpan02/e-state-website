import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'
import './profilePage.scss'
export default function ProfilePage(){
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Avatar:
                            <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="" />
                        </span>
                        <span>Username: <b>Vaibhav Pandey</b></span>
                        <span>E-mail: <b>vaibhavpan02@gmail.com</b></span>
                    </div>
                    <div className="title">
                        <h1>MyList</h1>
                        <button>Create New Post</button>
                    </div>
                    <List/>
                    <div className="title">
                        <h1>Saved List</h1>
                        
                    </div>
                    <List/>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}
