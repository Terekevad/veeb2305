const http = require("http");

const host = 'localhost';
const port = 8000;

let matk1 = {
    title: 'Matk Taevaskojas', 
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/4f/f3/1e/taevaskoja-salamaa.jpg',
    description: 'Jalga panna mugavad jalanõud!',
    startTime: '01.08.2023 kell 08:30',
    long: 27.0286815,
    lat: 58.1057632,
    participants: ['Karoli' , 'Merili' , 'Peeter']
}

let matk2 = {
    title: 'Kanuumatk Võhandu jõel', 
    imageUrl: 'https://lounaeestlane.ee/wp-content/uploads/2020/07/13224013t1ha3f5.jpg',
    description: 'Võtame kanuud Võrust Tamula rannast ning lõpetame Taevaskojas',
    startTime: '01.07.2023 kell 08:00',
    long: 26.99138,
    lat: 57.84335,
    participants: ['Lauri' , 'Riho' , 'Helerin']
}

let matkad = [matk1, matk2]

const requestListener = function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(matkad));
    };

const server = http.createServer(requestListener);
server.listen(port, host, function () {
    console.log(`Server is running on http://${host}:${port}`);
});