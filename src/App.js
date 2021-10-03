import './App.css';
import { Profile } from './components/ProfileCard/ProfileCard';
import { Statistics } from './components/Statistics/Statistics';
import { Title } from './components/Title/Title';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/Transactions/TransactionHistory';
import user from './components/ProfileCard/user.json';
import statisticalData from './components/Statistics/statisticalData.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/Transactions/transactions.json'

const { avatar, name, location, tag, stats } = user;
const { followers, views, likes } = stats;

console.log(statisticalData);

function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        avatar={avatar}
        location={location}
        tag={tag}
        followers={followers}
        views={views}
        likes = {likes}
      />

      <Statistics stats={statisticalData} >
        {stats.title && <Title stats = {statisticalData} />}      
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory
        item={ transactions}/>
      </div>
  );
}

export default App;
