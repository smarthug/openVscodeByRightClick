function main() {
  const regEx = RegExp(/\/\w+\/\w+/ , 'g')

  chrome.contextMenus.create({
    title: "Go to open.vscode.dev of this repository",
    id: location.pathname,
    documentUrlPatterns: ["https://github.com/*/*"],
  });

  chrome.contextMenus.onClicked.addListener(function (itemData) {
    chrome.tabs.getSelected(null, function (tab) {
      window.open("https://open.vscode.dev" + regEx.exec(tab.url)[0], "_blank");
    });
  });
}

main();
