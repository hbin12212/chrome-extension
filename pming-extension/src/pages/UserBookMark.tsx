import React from "react";
import "./UserBookMark.css";

const UserBookMark = () => {
    const handleClick = () => {
        chrome.bookmarks.getTree((result: any) => {
            console.log(result);
        });
    };
    return (
        <div className="user-BookMark" onClick={handleClick}>
            테스트 버튼
        </div>
    );
};
export default UserBookMark;
