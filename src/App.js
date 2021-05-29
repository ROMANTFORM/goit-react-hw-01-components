import React from "react";
import Profile from "./components/Profile";
import user from "./user.json";
import StatisticsList from "./components/StatisticsList";
import statisticalData from "./statistical-data.json";


const App = () => {
  return (
    <div>
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
     
  <section class="statistics">
    <h2 class="title">Upload stats</h2>
          
    <StatisticsList items={ statisticalData }/>
  </section>
     
    </div>
  )
}
export default App;
