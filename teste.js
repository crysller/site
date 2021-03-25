var jsonnews = {
	"status": "ok",
	"totalResults": 34,
	"articles": [{
		"source": {
			"id": "google-news",
			"name": "Google News"
		},
		"author": null,
		"title": "Doria anuncia vacinação de professores de SP e outras medidas contra covid; acompanhe a coletiva - Educação - Estadão - Educação Estadão",
		"description": null,
		"url": "https://news.google.com/__i/rss/rd/articles/CBMifmh0dHBzOi8vZWR1Y2FjYW8uZXN0YWRhby5jb20uYnIvbm90aWNpYXMvZ2VyYWwsZG9yaWEtdmFpLWFudW5jaWFyLXZhY2luYWNhby1kZS1wcm9mZXNzb3Jlcy1hLXBhcnRpci1kZS0xMi1kZS1hYnJpbCw3MDAwMzY1ODc1MdIBggFodHRwczovL2VkdWNhY2FvLmVzdGFkYW8uY29tLmJyL25vdGljaWFzL2dlcmFsLGRvcmlhLXZhaS1hbnVuY2lhci12YWNpbmFjYW8tZGUtcHJvZmVzc29yZXMtYS1wYXJ0aXItZGUtMTItZGUtYWJyaWwsNzAwMDM2NTg3NTEuYW1w?oc=5",
		"urlToImage": null,
		"publishedAt": "2021-03-24T15:59:43Z",
		"content": null
	}, {
		"source": {
			"id": "globo",
			"name": "Globo"
		},
		"author": null,
		"title": "Nasa anuncia primeira tentativa de voo em Marte de helicóptero Ingenuity para abril; Veja plano de voo - G1",
		"description": "Evento será a primeira tentativa de voo de um dispositivo motorizado em outro planeta. Data prevista é 8 de abril.",
		"url": "https://g1.globo.com/ciencia-e-saude/noticia/2021/03/24/nasa-anuncia-primeira-tentativa-de-voo-do-helicoptero-ingenuity-em-marte-para-abril.ghtml",
		"urlToImage": "https://s2.glbimg.com/CnXE_WW3pBK09RKhNsdVteDV2EM=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/9376534.jpg",
		"publishedAt": "2021-03-24T14:52:01Z",
		"content": "A Nasa, agência espacial americana, anunciou na terça-feira (23) que fará a primeira tentativa de voo de um dispositivo motorizado em Marte no início de abril, quando testará o helicóptero Ingenuity.… [+3156 chars]"
	}]
}

var imported = document.createElement('script');
imported.src = 'cliente.js';
document.head.appendChild(imported); 

var wData = jsonnews
var wJson = wData.articles
var wHtml = ""
console.log(wData);
var divNova = document.createElement("div");
for (let wIdx = 0; wIdx < wJson.length; wIdx++) {
    const wElement = wData.articles[wIdx];
    wHtml += "Nome : " + wElement["author"] + "  Idade :" + wElement["publishedAt"] + "<br>"
}
document.getElementById("autor").innerHTML += wHtml