document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    console.log("Document is ready!");
    alert("I'm domain http://problematic-domain.com:8080/ and downloading from localhost !! ");

    document.body.innerHTML = "<div id='container'></div><div id='container2'></div>";

    fetch('http://localhost/php-config')
        .then(response => {
            console.log(response);
            return response.text();
        })
        .then(data => {
            // display data only in container div class
            const container = document.getElementById('container2');
            console.log(data);
            container.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    fetch('http://localhost/_debugbar/open')
        .then(response => {
            console.log(response);
            return response.text();
        })
        .then(data => {
            // display data only in container div class
            const container = document.getElementById('container');
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const details = doc.querySelector('.details');
            console.log(details);
            container.innerHTML = details.outerHTML;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
