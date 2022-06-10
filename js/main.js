//저장된 리스트
let savedList = [];

const getData = () => {
    chrome.storage.sync.get("bookMark", function (result) {
        console.log(result["bookMark"]);
        insertList(result["bookMark"]);
    });
};

const insertList = (result) => {
    let listTemplate = "";

    result?.map((it, idx) => {
        listTemplate += ` <div id="${idx}">
    <div>${it.url}</div>
    <div>${it.preview}</div>
        <br/><br/>
</div>`;
    });

    document.getElementById("listData").insertAdjacentHTML("afterbegin", listTemplate);
};

getData();
