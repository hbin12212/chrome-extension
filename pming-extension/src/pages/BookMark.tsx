/*global chrome*/

import React, { useState, useEffect } from "react";
import "./BookMark.css";

const BookMark = () => {
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
        <div className="pming-BookMark">
            {bookMarkList?.map((it: { url: string; preview: string }, idx: number) => (
                <div className="pming-bookmark-data" id={`pming-bookmark-${idx}`}>
                    <div>{it?.url}</div>
                    <div>{it?.preview}</div>
                </div>
            ))}
        </div>
    );
};

export default BookMark;
