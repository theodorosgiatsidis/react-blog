import { useLocation } from "react-router";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import "./home.css";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
    </>
  );
}

export default Home;
