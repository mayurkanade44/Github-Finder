import { Navbar, Info, User, Search, Repo, Loading } from "../components";
import { useGithubContext } from "../context/github_context";

const Dashboard = () => {
  const { loading } = useGithubContext();
  if (loading) {
    return (
      <div>
        <Navbar />
        <Search />
        <Loading />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar/>
        <Search />
        <Info />
        <User />
        <Repo />
      </div>
    );
  }
};

export default Dashboard;
