// settings
var url         = 'https://mapp.inventarium.mobi:444/reg',
	customerKey = 'CUSTOMER_KEY',
	fullName    = 'FULL_NAME',
	email       = 'EMAIL',
	embedType   = 'ios';


// window
var win = Ti.UI.createWindow({  
    backgroundColor:'#fff'
});

// button
var inventariumButton = Ti.UI.createButton({
	title: 'Inventarium',
	width: 100,
	height: 50
});

// click event handler
inventariumButton.addEventListener('click', function()
{
	url += '?customerKey='+customerKey;
	url += '&fullName='+fullName;
	url += '&email='+email;
	url += '&embedType='+embedType;
	
	var webview = Ti.UI.createWebView({
		url: url
	});
	
	win.add(webview);
	webview.show();
});

	
win.add(inventariumButton);
win.open();
