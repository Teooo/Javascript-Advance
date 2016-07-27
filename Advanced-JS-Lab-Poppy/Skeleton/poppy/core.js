function pop(type, title, message) {
    var popup;
    switch (type) {
        case 'info':popup =  new info.pop(title, message);
            break;
        case 'success': popup = new success.pop(title, message);
            break;
        case 'error': popup = new error.pop(title, message);
            break;
        case 'warning': popup = new warning.pop(title, message);
            break;
        default:
            break;
    }
	
	// generate view from view factory
    var view = createPopupView(popup);



    processPopup(view, popup);
}

function processPopup(domView, popup) {

	document.body.appendChild(domView);
    var buttons = document.getElementsByClassName('poppy-close-button')[0][0];
    console.log(buttons)



}

pop('info', 'info', 'info');
pop('warning', 'warning', 'warning');
pop('error', 'error', 'error');
pop('success', 'success', 'success');

