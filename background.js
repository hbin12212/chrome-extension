//우클릭 메뉴 아이템 설정
let contextMenuItem = {
    id: "pming",
    title: "pming",
    contexts: ["page"],
};

//우클릭 메뉴 생성
chrome.contextMenus.create(contextMenuItem);

//크롬 익스텐스 아이콘 클릭
chrome.action.onClicked.addListener((tab) => {
    //-> 현재 링크 복사
    let url = "";
    console.log(tab);
    url = tab.url;
    let preview = tab.title;
    console.log("복사완료");

    //데이터 가져오기
    chrome.storage.sync.get("bookMark", function (result) {
        let savedList = [];
        //데이터 있으면
        if (result["bookMark"]) {
            savedList = result["bookMark"];
        }
        savedList?.unshift({ thumbnail: "", url: url, preview: preview });
        //데이터 저장
        chrome.storage.sync.set({ bookMark: savedList }, function () {
            console.log("저장완료");
        });
    });
});

//우클릭 메뉴 클릭
chrome.contextMenus.onClicked.addListener((tab) => {
    //-> 현재 링크 복사
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url = tabs[0].url;
        console.log(tabs[0]);
        let preview = tabs[0].title;
        console.log("복사완료");

        //데이터 가져오기
        chrome.storage.sync.get("bookMark", function (result) {
            let savedList = [];
            //데이터 있으면
            if (result["bookMark"]) {
                savedList = result["bookMark"];
            }
            savedList?.unshift({ thumbnail: "", url: url, preview: preview });
            //데이터 저장
            chrome.storage.sync.set({ bookMark: savedList }, function () {
                console.log("저장완료");
            });
        });
    });
});

//New Tab 설정 (manifest.json)
