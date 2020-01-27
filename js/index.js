
let cards = [
    {
        name: 'MyApp1',
        picture: 'sample_logo.png',
        url: 'http://Application1'
    },
    {
        name: 'MSVacation',
        picture: 'sample_logo.png',
        url: 'https://msvacation'
    },
    {
        name: 'MyApp2',
        picture: 'sample_logo.png',
        url: 'http://Application2'
    },
    {
        name: 'MyApp3',
        picture: 'sample_logo.png',
        url: 'http://Application3'
    },
    {
        name: 'MyApp4',
        picture: 'sample_logo.png',
        url: 'http://Application4'
    },
    {
        name: 'Application5',
        picture: 'sample_logo.png',
        url: 'http://Application5'
    },
    {
        name: 'MyApp6',
        picture: 'sample_logo.png',
        url: 'http://Application5'
    },
    {
        name: 'Some application with a very long name',
        picture: 'sample_logo.png',
        url: 'http://Application5'
    },
];

document.addEventListener("DOMContentLoaded", () => {
    var template = document.getElementById("card-template").innerHTML;
    var card = Handlebars.compile(template);
    var html = '';
    cards.forEach(element => {
        var context = { name: element.name, picture: element.picture, url: element.url }
        html = html + card(context);
        document.getElementById('mainarea').innerHTML = html;
    });
});