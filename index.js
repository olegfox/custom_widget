var request = require("request");

function addWidget() {

    // Добавление виджета
    request.post({
        uri: "http://customstreetwear.ru/admin/application_widgets.xml",
        formData: {
            email: 'elhan.isaev@tattoomall.ru',
            password: 'sl7911jK109'
        },
        headers: {
            'Cookie': "cookie",
            'Content-Type': 'text/xml',
            'Content-Length': (new Buffer).byteLength(xml)
        }
    }, function (error, response, body) {
        console.log(response);
    });
}

addWidget();