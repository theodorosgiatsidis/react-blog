import { useEffect, useContext } from "react";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/Header/Header";
import "./home.css";
import axios from "axios";
import { StoreContext } from "../../context/store";
import Posts from "../../Components/Posts/Posts";
import { useLocation } from "react-router-dom";

function Home() {
  const { posts, setPosts } = useContext(StoreContext);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
