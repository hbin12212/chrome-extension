/*global chrome*/

import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
    const [bookMarkList, setBookMarkList] = useState([]);

    useEffect(() => {
        getBookMarkData();
    }, []);

    const getBookMarkData = () => {
        //@ts-ignore
        chrome.storage.sync.get("bookMark", function (result: any) {
            console.log(result["bookMark"]);
            setBookMarkList(result["bookMark"]);
        });
    };
    return (
        <div className="pming-App">
            {bookMarkList?.map((it: { url: string; preview: string }, idx: number) => (
                <div className="pming-bookmark-data" id={`pming-bookmark-${idx}`}>
                    <div>{it?.url}</div>
                    <div>{it?.preview}</div>
                </div>
            ))}
        </div>
    );
};

export default App;
