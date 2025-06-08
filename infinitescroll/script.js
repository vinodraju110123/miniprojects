let container = document.getElementById('container');

// Create and style a loading message
let loading = document.createElement('div');
loading.innerText = "Loading...";
loading.style.textAlign = "center";
loading.style.fontSize = "20px";
loading.style.margin = "20px";
container.appendChild(loading); // Add it initially

let key = "FYeccTpej4SA0sFg11MDU91h8383d--XpbVYwwPPf_0";

async function getPhotos() {
    try {
        loading.style.display = "block"; // Show loading message

        let api = await fetch(`https://api.unsplash.com/photos/random?client_id=${key}&count=10`);
        let data = await api.json();
        
        createImage(data);
    } catch (error) {
        console.error("Error fetching images:", error);
    } finally {
        loading.style.display = "none"; // Hide after fetching
    }
}

function createImage(data) {
    data.forEach(photo => {
        let img = document.createElement('img');
        img.src = photo.urls.regular;
        img.style.width = "300px"; // Optional: Set size for better display
        img.style.margin = "10px";
        container.appendChild(img);
    });
}

// Initial call to load images
getPhotos();

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        getPhotos(); // Fetch more images on scroll
    }
});
