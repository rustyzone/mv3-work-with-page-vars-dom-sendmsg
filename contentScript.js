


if(typeof init === 'undefined'){
  const init = function(){
    const injectElement = document.createElement('div');
    injectElement.className = 'rustyZone-element';
    injectElement.innerHTML = '(click me) Hello From the Rusty Zone Element';
    document.body.appendChild(injectElement);

    //if on this page run code...
    if(window.location.href == "https://github.com/rustyzone/"){

      //listen for events
      window.addEventListener('message', function(event) {
        console.log('msg:', event.type, event.data);
      });

      injectElement.addEventListener('click', function(){

        //inject iframe to tesrt web web_accessible_resources...
        var str = `
        <iframe style="width:100%;border:none;height:40px;" src="${chrome.runtime.getURL(
          "iframe.html"
        )}"></iframe>`;
        //iframe
        var ifr = document.createElement('div');
        ifr.innerHTML = str;
        document.getElementsByTagName('body')[0].appendChild(ifr);

        //inject dom
        var jsURL = chrome.runtime.getURL("js/injectdom.js"); // <<--- file that runs within the page on a depeper level.
        console.log(jsURL);
        var script = document.createElement('script');
        script.setAttribute('src', jsURL);
        script.setAttribute('type', 'text/javascript');
        document.getElementsByTagName('body')[0].appendChild(script);

      });
    }
  }
  init();
}
























    /*
    const hostEle = document.createElement('div');
    hostEle.className = 'rustyZone-element-host';
    hostEle.innerHTML = 'Hello From the Rusty Zone Element';
    document.body.appendChild(hostEle);

    //Using Shadow Root
    var host = document.querySelector('.rustyZone-element-host');
    var root = host.attachShadow({mode: 'open'}); // Create a Shadow Root
    var div = document.createElement('div');
    div.className = 'div root-class';
    div.innerHTML='<style>.div{border:3px solid blue;margin:10px;padding:10px;width:200px;}</style>'
    +'Hello From the Rusty Zone Shadow Root Element';
    root.appendChild(div);
    */
