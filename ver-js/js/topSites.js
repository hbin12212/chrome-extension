const getTopSitesData = () => {
    chrome.topSites.get((result) => {
        console.log(result);

        insertTopSitesList(result);
    });
};

const insertTopSitesList = (result) => {
    let listTemplate = "";
    result?.map((it, idx) => {
        listTemplate += ` <div id="${idx}">
    <div>${it.url}</div>
    <div>${it.title}</div>
        <br/><br/>
</div>`;
    });

    document.getElementById("pming_topsites_data").insertAdjacentHTML("afterbegin", listTemplate);
};

getTopSitesData();
