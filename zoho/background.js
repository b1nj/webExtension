
function logURL(requestDetails) {

    /*console.log(requestDetails);
    requestDetails.requestBody.formData['mode'] = "INJECTED"
    requestDetails.requestBody.formData['test'] = "INJECTED"*/

    /*requestDetails.requestBody.formData.forEach(function(data){
        if (data == "mode") {
            data = 'sssssssssss';
        }
    });*/


    if (requestDetails.url !== 'https://crm.zoho.eu/crm/org20070672839/GSearch.do') {
        return;
    }

    console.log(requestDetails);

    return {
        redirectUrl: 'https://crm.zoho.eu/crm/org20070672839/GSearch.do' + '?ajaxSearch=true&searchCategory=AllEntities&newModel=true&sModules=Contacts,Accounts&selectedmodule=Home'
    };
}

browser.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: ["*://*.zoho.eu/*/GSearch.do"]},
    ['requestBody', 'blocking']
);




/*
function listener(details) {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();

    console.log(`Loading: ${details.url}`);

    filter.ondata = event => {
        let str = decoder.decode(event.data, {stream: true});
        // Just change any instance of Example in the HTTP response
        // to WebExtension Example.
        str = str.replace(/Example/g, 'WebExtension Example');
        filter.write(encoder.encode(str));
        filter.disconnect();
    }

    return {};
}

browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://crm.zoho.eu/crm/!*"], types: ["main_frame"]},
    ["blocking", "requestBody"]
);*/
