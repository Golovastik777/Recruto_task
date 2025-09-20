function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function initApp() {
    const name = getUrlParameter('name') || 'Recruto';
    const message = getUrlParameter('message') || 'Давай дружить';

    const greeting = `Hello ${name} ${message}`;
    
    document.getElementById('greeting').textContent = greeting;
    
    const currentUrl = window.location.origin + window.location.pathname;
    const exampleUrl = `${currentUrl}?name=Recruto&message=Давай дружить`;
    document.getElementById('exampleUrl').textContent = exampleUrl;
}


document.addEventListener('DOMContentLoaded', initApp);