// const repoUrlPath = '/' + location.pathname.split('/').slice(1, 3).join('/');

function main(){
  
  chrome.contextMenus.create(
    {
      title: 'Go to "open.vscode.dev' + location.pathname + '"',
      id: location.pathname,
      documentUrlPatterns:["https://github.com/*/*"]
    },
  );

  chrome.contextMenus.onClicked.addListener(function (itemData) {
    // console.log(window.location.href)
    window.open("https://open.vscode.dev"+ location.pathname, "_blank");
  });


  


}

main();