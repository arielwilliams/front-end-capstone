import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import List from "./List";


const AllLists = ({ lists }) => {

    const [selectedList, setSelectedList] = useState(null);

    const handleListClick = (list) => {
        setSelectedList(list);
    };


    return (
        <div>
            <h2>My lists</h2>
            <ul>
                {lists.map((list) => (
                    <li key={list.listId}>
                        <button onClick={() => handleListClick(list)}>{list.name}</button>
                        {/* <Link to={`/dashboard/list/${list.listId}`}>{list.name}</Link> */}
                    </li>
                ))}
            </ul>
            {selectedList && <List list={selectedList} />}
        </div>
    );
};

export default AllLists;

