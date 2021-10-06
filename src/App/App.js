import "./App.css";
import { Profile } from "../components/ProfileCard/ProfileCard";
import { Statistics } from "../components/Statistics/Statistics";
import { FriendList } from "../components/FriendList/FriendList";
import { TransactionHistory } from "../components/Transactions/TransactionHistory";
import user from "../data/user.json";
import statisticalData from "../data/statisticalData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";


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
      <Statistics title="Upload stats" stats={statisticalData} />      
      <FriendList friends={friends}/>
      <TransactionHistory item={transactions} />
    </div>
  );
}

export default App;
