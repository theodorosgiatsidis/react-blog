import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../store";
import ReactPaginate from "react-paginate";
import Posts from "../Posts/Posts";
import "./paginatedPosts.css";

function PaginationPost() {
  const state = useContext(StoreContext);
  const [posts, setPosts] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % state.posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + 6;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setPosts(state.posts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(state.posts.length / 6));
  }, [itemOffset]);

  return (
    <div className="App">
      <Posts posts={posts} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="pagination"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        disabledClassName="pagination__link--disabled"
        activeClassName="pagination__link--active"
      />
    </div>
  );
}

export default PaginationPost;
