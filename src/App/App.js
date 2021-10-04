import "./App.css";
import { Profile } from "../components/ProfileCard/ProfileCard";
import { Statistics } from "../components/Statistics/Statistics";
import { FriendList } from "../components/FriendList/FriendList";
import { TransactionHistory } from "../components/Transactions/TransactionHistory";
import user from "../data/user.json";
import statisticalData from "../data/statisticalData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import { FriendListItem } from "../components/FriendListItem/FriendListItem";

// const { avatar, name, location, tag, stats } = user;
// const { followers, views, likes } = stats;

console.log(statisticalData);

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        avatar={user.avatar}
        location={user.location}
        tag={user.tag}
        stats={ user.stats}
      />
      {statisticalData.title ? (<Statistics title="Upload stats" stats={statisticalData} />
) : (<Statistics stats={statisticalData}/>)}

      
        <FriendList friends={friends}>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory item={transactions} />
    </div>
  );
}

export default App;
