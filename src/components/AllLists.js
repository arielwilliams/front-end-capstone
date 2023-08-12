import React from "react";
// import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import List from "./List";


const AllLists = ({ lists }) => {

    const navigate = useNavigate();

    // const [selectedList, setSelectedList] = useState(null);

    const handleListClick = (listId) => {
        // setSelectedList(list);
        navigate(`/list/${listId}`);
    };


    return (
        <div>
            <h2>My lists</h2>
            <ul>
                {lists.map((list) => (
                    <li key={list.listId}>
                        <button onClick={() => handleListClick(list.listId)}>{list.name}</button>
                        {/* <Link to={`/dashboard/list/${list.listId}`}>{list.name}</Link> */}
                    </li>
                ))}
            </ul>
            <Routes>
                <Route path="/list/:listId" element={<List />} />
            </Routes>
            {/* {selectedList && <List list={selectedList} />} */}
        </div>
    );
};

export default AllLists;

