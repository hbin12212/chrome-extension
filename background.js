//우클릭 메뉴 아이템 설정
let contextMenuItem = {
    id: "pming",
    title: "pming",
    contexts: ["page"],
};

//우클릭 메뉴 생성
chrome.contextMenus.create(contextMenuItem);

//크롬 익스텐스 아이콘 클릭 -> 현재 링크 복사
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url = tabs[0].url;
        console.log(url);
    });
});

//우클릭 메뉴 클릭 -> 현재 링크 복사
chrome.contextMenus.onClicked.addListener((tab) => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
        let url = tabs[0].url;
        console.log(url);
    });
});

//New Tab 설정 (manifest.json)
