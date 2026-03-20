import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div>
      Home
      <br />
      <NavLink to={"dashboard"}>Link to Dashboard</NavLink>
    </div>
  )
}

export default Home