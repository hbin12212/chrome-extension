const getHistoryData = () => {
    chrome.history.search({ text: "", maxResults: 15 }, (result) => {
        console.log(result);

        insertHistoryList(result);
    });
};

const insertHistoryList = (result) => {
    let listTemplate = "";
    result?.map((it, idx) => {
        listTemplate += ` <div id="${idx}">
    <div>${it.url}</div>
    <div>${it.title}</div>
        <br/><br/>
</div>`;
    });

    document.getElementById("pming_history_data").insertAdjacentHTML("afterbegin", listTemplate);
};

getHistoryData();
