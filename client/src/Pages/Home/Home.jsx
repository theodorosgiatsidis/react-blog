import { useLocation } from "react-router";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/paginatedpost/PaginatedPosts";
import "./home.css";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Pagination />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
