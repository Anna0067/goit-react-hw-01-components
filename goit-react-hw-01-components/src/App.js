import './App.css';
import user from '/user.json';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

export default Profile;
// export default function App() {} -- to ma być tutaj zamiast tego wyżej??
