document.onselectionchange = function() {
  let text = window.getSelection();
  var regex = new RegExp(/[^(\w!?:/+\-_~=;.,*&@#$%()'[\]ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠\t\s\n　、。（）「」・<>› - ー【】—？！)]+/)
  if (regex.test(text)) {
    console.log('match: ' + text);
    alert("不適切な文字が含まれています");
  }
}
