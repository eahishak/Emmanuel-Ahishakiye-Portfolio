function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');

    if (window.innerWidth <= 768) {
        nav.classList.toggle('show');
    }
}

function toggleDropdown(dropdown) {
    const dropdownContent = dropdown.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input').value;
    highlightSearchResults(searchInput);
}

function highlightSearchResults(searchInput) {
    const content = document.body.innerHTML;
    const highlightedContent = highlightText(content, searchInput);
    document.body.innerHTML = highlightedContent;
    if (window.innerWidth <= 768) {
        const nav = document.querySelector('nav');
        nav.classList.remove('show');
    }
}

function highlightText(content, searchInput) {
    const regex = new RegExp(`(${searchInput})`, 'gi');
    return content.replace(regex, '<mark>$1</mark>');
}

        
//Gallery
document.addEventListener('DOMContentLoaded', function () {
    const gallerySection = document.getElementById('gallery');
    const galleryData = [
        { src: 'img/gallery/1.jpg', description: 'ASYV Gala 24 at Chelsea Piers NYC' },
    { src: 'img/gallery/2.jpg', description: 'LeFrak Summit at Times Square' },
    { src: 'img/gallery/3.jpg', description: 'With Mikel Quintana Roberto' },
    { src: 'img/gallery/4.jpg', description: 'Lefrak Summit 24 at Golden Sachs' },
    { src: 'img/gallery/5.jpg', description: 'ITU Summit 23 at Kigali Intare Conference Arena' },
    { src: 'img/gallery/6.jpg', description: 'Lefrak Summit 24 at Jefferies' },
    { src: 'img/gallery/7.jpg', description: 'ASYV Gala 23 at Chelsea Piers NYC' },
    { src: 'img/gallery/8.jpg', description: 'Handler Scholar Induction Ceremony at UR' },
    { src: 'img/gallery/9.jpg', description: 'With Ernest Rwamucyo, The new Permanent Representative of Rwanda to UN' },
    { src: 'img/gallery/10.jpg', description: 'ASYV Gala 23 at Chelsea Piers NYC' },
    { src: 'img/gallery/13.jpg', description: 'Family at Lake Ontario Beach' },
    { src: 'img/gallery/14.jpg', description: 'Family at Genesee High Falls' },
    { src: 'img/gallery/15.jpg', description: 'Rochester City' },
    { src: 'img/gallery/16.jpg', description: 'Conesus Lake| Finger Lakes' },
    { src: 'img/gallery/17.jpg', description: 'California, Modonna Mountain' },
    { src: 'img/gallery/18.jpg', description: 'California, Modonna Mountain Summit' },
    { src: 'img/gallery/19.jpg', description: 'Lefrak Summit 24' },
    { src: 'img/gallery/20.jpg', description: 'ASYV Language Day 2023' },
    { src: 'img/gallery/21.jpg', description: 'With Rich Handler, the CEO of Jefferies' },
    { src: 'img/gallery/22.jpg', description: 'California, Avila Beach ' },
    { src: 'img/gallery/23.jpg', description: 'California Mall Bay' },
    { src: 'img/gallery/24.jpg', description: 'California Mall Bay' },
    { src: 'img/gallery/27.jpg', description: 'Family' },
    { src: 'img/gallery/28.jpg', description: 'with a friend Aaron' },
    { src: 'img/gallery/34.jpg', description: 'Family' },
    { src: 'img/gallery/35.jpg', description: 'With Dale Dawson (Founder of B2R and Rich Handler at Jefferies' },
    { src: 'img/gallery/36.jpg', description: 'Family in New York City ' },
    { src: 'img/gallery/37.jpg', description: 'University of Rochester' },
    { src: 'img/gallery/38.jpg', description: 'California- Cal Polly State University' },
    { src: 'img/gallery/39.jpg', description: 'California with Seth' },
    { src: 'img/gallery/40.jpg', description: '2023 Graduation Ceremony' },
    { src: 'img/gallery/41.jpg', description: 'At Chelsea Piers NYC with my mentor Fabrice' },
    { src: 'img/gallery/43.jpg', description: 'Family' },
    { src: 'img/gallery/60.jpg', description: 'Rush Rhees Library Tower' },
    { src: 'img/gallery/61.jpg', description: 'Rush Rhees Library Tower' },
    { src: 'img/gallery/62.jpg', description: 'UR24 Graduation, Philbert ' },
    { src: 'img/gallery/73.jpg', description: 'UR24 Graduation, Philbert' },
    { src: 'img/gallery/63.jpg', description: 'Rochester' },
    { src: 'img/gallery/64.jpg', description: 'Boston, JTL Visit With Placide' },
    { src: 'img/gallery/65.jpg', description: 'Pickleball, Rochester' },
    { src: 'img/gallery/66.jpg', description: 'New York City, Gotham Debate ' },
    { src: 'img/gallery/67.jpg', description: 'New York City, Gotham Debate ' },
    { src: 'img/gallery/68.jpg', description: 'California, Mall Bay' },
    { src: 'img/gallery/69.jpg', description: 'With friends' },
    { src: 'img/gallery/70.jpg', description: 'Go Karting Sport, Rochester' },
    { src: 'img/gallery/71.jpg', description: 'Boston, JTL Visit' },
    { src: 'img/gallery/72.jpg', description: 'Boston, JTL Visit' },
    { src: 'img/gallery/29.jpg', description: 'with a my brother Appolinaire Manirakiza' },
    { src: 'img/gallery/30.jpg', description: 'With My Advisor Hilary Mbabazi' },
    { src: 'img/gallery/42.jpg', description: 'AT Intare Arena attended ITU Summit 2022' },
    { src: 'img/gallery/31.jpg', description: 'At Kigali Convention Center, Presented a project on Teacher s Day' },
    { src: 'img/gallery/32.jpg', description: 'at Intore Learning Center, Presented Jackal Service Provider' },
    { src: 'img/gallery/33.jpg', description: 'At Kigali, Represented Jackal Tech and Liquidnet Family' },
    { src: 'img/gallery/25.jpg', description: 'With Family' },
    { src: 'img/gallery/12.jpg', description: 'With Family at ASYV Graduation' },
    { src: 'img/gallery/26.jpg', description: 'Isomo Academy Capstone Project Winning Team 2021' }
    ];

    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.id = `gallery-item${index + 1}`;

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = `Gallery Image ${index + 1}`;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const description = document.createElement('h3');
        description.textContent = item.description;

        overlay.appendChild(description);
        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);

        gallerySection.appendChild(galleryItem);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const videoItems = document.querySelectorAll('.device-video-item');

    videoItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.querySelector('iframe').style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function () {
            this.querySelector('iframe').style.transform = 'scale(1)';
        });
    });
});




//Books

// JavaScript for lightbox effect
const books = document.querySelectorAll('.book-category img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

books.forEach((book) => {
    book.addEventListener('click', () => {
        lightboxImg.src = book.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Writing Section

function toggleReadMore(paperId) {
    const paper = document.getElementById(paperId);
    const fullPaper = paper.querySelector('.full-paper');
    const readMoreBtn = paper.querySelector('.read-more');

    if (fullPaper.classList.contains('active')) {
        fullPaper.classList.remove('active');
        readMoreBtn.innerText = 'Read More';
    } else {
        fullPaper.classList.add('active');
        readMoreBtn.innerText = 'Read Less';
        fullPaper.style.display = 'block'; // Ensure content is visible when "Read More" is clicked
    }
}
