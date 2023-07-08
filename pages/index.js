import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello, {user.first_name}! </h1>
      <img src={user.profile_image_url} alt="user profile page" />
      <h3>{user.bio}</h3>
      <p>Click the button below to logout!</p>
      <button className="btn btn-danger btn-lg copy-btn" type="button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Home;
