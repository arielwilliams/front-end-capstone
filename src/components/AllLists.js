import React from "react";
import { useState } from "react";
import List from "./List";


const AllLists = ({ lists }) => {

    const [selectedList, setSelectedList] = useState(null);

    const handleListClick = (list) => {
        setSelectedList(list);
    };


    return (
        <div>
            <ul>
                {lists.map((list) => (
                    <li key={list.listId}>
                        <button onClick={() => handleListClick(list)}>{list.name}</button>
                    </li>
                ))}
            </ul>
            {selectedList && <List list={selectedList} />}
        </div>
    );
};

export default AllLists;
