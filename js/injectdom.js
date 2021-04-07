function injectDom(){
  //to debug
  //console.log('found...', window, window._octo);

  //send to parent part of page with data...
  const myData = window._octo.actor; //dont send full octo as contains an image and large object but can break down into obj to single vars
  var payload = {
    "data": myData,
    "test": "test string..."
  };
  setTimeout(function () {
    console.log('send msg');
    window.postMessage({
      type: 'inject-dom.js',
      text: 'Check data for payload',
      data: payload,
    },'*');
  }, 1);

}
injectDom();
