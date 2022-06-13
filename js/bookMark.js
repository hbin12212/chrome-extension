const getBookMarkData = () => {
    chrome.storage.sync.get("bookMark", function (result) {
        console.log(result["bookMark"]);
        insertBookMarkList(result["bookMark"]);
    });
};

const insertBookMarkList = (result) => {
    let listTemplate = "";

    result?.map((it, idx) => {
        listTemplate += ` <div id="${idx}">
    <div>${it.url}</div>
    <div>${it.preview}</div>
        <br/><br/>
</div>`;
    });

    document.getElementById("pming_bookmark_data").insertAdjacentHTML("afterbegin", listTemplate);
};

getBookMarkData();
