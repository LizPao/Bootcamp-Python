let number = 0;
let data = null; // Cambiado de [] a null
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
    if (data === null) {
        // Simular una solicitud AJAX a ajax.json
        // En una situación real, utilizarías una solicitud AJAX real aquí
        // Por simplicidad, vamos a simular la respuesta aquí
        const simulatedResponse = [
            {
                "title": "Título 1",
                "content": "Contenido 1",
                "videoUrl": "URL_del_video_1"
            },
            {
                "title": "Título 2",
                "content": "Contenido 2",
                "videoUrl": "URL_del_video_2"
            },
            // ...
        ];
        data = simulatedResponse;
    }
}

function changeVideo() {
    getData(); // Cargar los datos si aún no se han cargado

    if (data && number < data.length) {
        const currentItem = data[number];
        titleArea.textContent = currentItem.title;
        contentArea.textContent = currentItem.content;
        videoArea.src = currentItem.videoUrl;

        number = (number + 1) % data.length;
    }
}

window.onload = changeVideo;
