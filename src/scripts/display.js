export default function loadRestaurants () {
    document.addEventListener('DOMContentLoaded', function() {
        fetch('data/DATA.json')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('restoran');
                data.restaurants.forEach(resto => {

                    // Elemen utama untuk restoran
                    const restoElement = document.createElement('div');
                    restoElement.classList.add('resto');
    
                    // Elemen gambar
                    const gambar = document.createElement('div');
                    gambar.classList.add('gambar');
                    const img = document.createElement('img');
                    img.src = resto.pictureId;
                    img.alt = resto.name;
                    img.setAttribute('tabindex', '0');
                    gambar.appendChild(img);
                    restoElement.appendChild(gambar);
    
                    // Elemen deskripsi
                    const description = document.createElement('div');
                    description.classList.add('description');
    
                    // Tampilkan Nama Kota
                    const namaKota = document.createElement('b');
                    namaKota.classList.add('NamaKota');
                    namaKota.textContent = resto.city;
                    namaKota.setAttribute('tabindex', '0');
                    description.appendChild(namaKota);
    
                    // Tampilkan Rating
                    const rating = document.createElement('b');
                    rating.classList.add('rating');
                    rating.textContent = `Rating ${resto.rating}`;
                    rating.setAttribute('tabindex', '0');
                    description.appendChild(rating);
    
                    // Tampilkan Nama Restoran
                    const namaRestoran = document.createElement('h3');
                    namaRestoran.classList.add('NamaRestoran');
                    namaRestoran.textContent = resto.name;
                    namaRestoran.setAttribute('tabindex', '0');
                    description.appendChild(namaRestoran);
    
                    // Tampilkan Deskripsi
                    const desc = document.createElement('p');
                    desc.classList.add('desc');
                    desc.textContent = resto.description;
                    desc.setAttribute('tabindex', '0');
                    description.appendChild(desc);
                    restoElement.appendChild(description);

                    // Element location
                    const locationDiv = document.createElement('div');
                    locationDiv.classList.add('location');
                    const locationLink = document.createElement('a');
                    locationLink.href = '#';
                    locationLink.textContent = 'Lihat Lokasi';
                    locationDiv.appendChild(locationLink);
                    restoElement.appendChild(locationDiv);

                container.appendChild(restoElement);
                });
            })
            .catch(error => console.error('Error loading the JSON data:', error));
    });
}


