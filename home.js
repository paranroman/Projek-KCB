// Main container to hold the elements dynamically
const app = document.createElement('div');
app.style.fontFamily = 'Arial, sans-serif';
app.style.margin = '0';
app.style.backgroundColor = '#1c1c1c';
app.style.color = '#e0e0e0';

// Header
const header = document.createElement('header');
header.style.backgroundColor = '#e50914';
header.style.color = 'white';
header.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)';
header.style.padding = '1rem';
header.style.display = 'flex';
header.style.alignItems = 'center';
header.style.justifyContent = 'space-between';

const nav = document.createElement('nav');
nav.style.display = 'flex';
nav.style.gap = '1.5rem';

const navHome = document.createElement('a');
navHome.textContent = 'Home';
navHome.href = '#home-section';
navHome.style.color = 'white';
navHome.style.textDecoration = 'none';
navHome.style.fontSize = '1.1rem';
navHome.addEventListener('mouseover', () => {
  navHome.style.textDecoration = 'underline';
});
navHome.addEventListener('mouseout', () => {
  navHome.style.textDecoration = 'none';
});
nav.appendChild(navHome);

const navRecommend = document.createElement('a');
navRecommend.textContent = 'Recommendations';
navRecommend.href = '#';
navRecommend.style.color = 'white';
navRecommend.style.textDecoration = 'none';
navRecommend.style.fontSize = '1.1rem';
navRecommend.addEventListener('mouseover', () => {
  navRecommend.style.textDecoration = 'underline';
});
navRecommend.addEventListener('mouseout', () => {
  navRecommend.style.textDecoration = 'none';
});
nav.appendChild(navRecommend);

const logo = document.createElement('h1');
logo.textContent = 'CINEMUKA';
logo.style.margin = '0';
logo.style.fontSize = '2rem';
logo.style.fontFamily = 'Georgia, serif';

header.appendChild(logo);
header.appendChild(nav);

// Home Section
const homeSection = document.createElement('div');
homeSection.id = 'home-section';
homeSection.style.backgroundColor = '#000000'; // Changed background to black
homeSection.style.height = '100vh';
homeSection.style.display = 'flex';
homeSection.style.flexDirection = 'column';
homeSection.style.alignItems = 'center';
homeSection.style.justifyContent = 'center';
homeSection.style.textAlign = 'center';

const homeTitle = document.createElement('h2');
homeTitle.textContent = 'Discover Movies Like Never Before';
homeTitle.style.color = 'white';
homeTitle.style.fontSize = '2.5rem';
homeTitle.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.7)';
homeTitle.style.marginBottom = '1rem';
homeSection.appendChild(homeTitle);

const homeSubtitle = document.createElement('p');
homeSubtitle.textContent = 'Let your expressions guide you to the perfect movie.';
homeSubtitle.style.color = '#e0e0e0';
homeSubtitle.style.fontSize = '1.2rem';
homeSubtitle.style.marginBottom = '2rem';
homeSubtitle.style.textShadow = '1px 1px 4px rgba(0, 0, 0, 0.7)';
homeSection.appendChild(homeSubtitle);

const getStartButton = document.createElement('button');
getStartButton.textContent = 'Get Started';
getStartButton.addEventListener('click', () => {
    homeSection.style.display = 'none';  // Hide home section
    cameraSection.style.display = 'block';  // Show camera section
    document.body.style.backgroundImage = 'none'; // Reset any other background
});
getStartButton.style.padding = '15px 40px';
getStartButton.style.fontSize = '1.5rem';
getStartButton.style.color = 'white';
getStartButton.style.backgroundColor = '#e50914';
getStartButton.style.border = 'none';
getStartButton.style.borderRadius = '25px';
getStartButton.style.cursor = 'pointer';
getStartButton.style.transition = 'background-color 0.3s ease';
getStartButton.addEventListener('mouseover', () => {
  getStartButton.style.backgroundColor = '#b71c1c';
});
getStartButton.addEventListener('mouseout', () => {
  getStartButton.style.backgroundColor = '#e50914';
});
getStartButton.addEventListener('click', () => {
  window.location.href = '#camera-section';
});
homeSection.appendChild(getStartButton);

// Subtitle Section
const subtitleSection = document.createElement('div');
subtitleSection.style.backgroundColor = '#2b2b2b';
subtitleSection.style.color = '#e0e0e0';
subtitleSection.style.padding = '0.8rem 2rem';
subtitleSection.style.textAlign = 'center';
subtitleSection.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';

const subtitleTitle = document.createElement('h2');
subtitleTitle.textContent = 'Get Your Movie Recommendations Based on Your Expressions';
subtitleTitle.style.margin = '0';
subtitleTitle.style.fontSize = '1.2rem';

subtitleSection.appendChild(subtitleTitle);

// Main container
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.margin = '20px';

// Camera Section (Initially hidden, will show up after clicking "Get Started")
const cameraSection = document.createElement('div');
cameraSection.id = 'camera-section';
cameraSection.style.marginBottom = '30px';
cameraSection.style.textAlign = 'center';
cameraSection.style.justifyContent = 'center';
cameraSection.style.display = 'none';  // Initially hidden

const cameraContainer = document.createElement('div');
cameraContainer.style.border = '4px solid #e50914';
cameraContainer.style.borderRadius = '15px';
cameraContainer.style.overflow = 'hidden';
cameraContainer.style.width = '80%';
cameraContainer.style.maxWidth = '500px';
cameraContainer.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)';

const video = document.createElement('video');
video.id = 'camera';
video.autoplay = true;
video.playsInline = true;
video.style.display = 'block';
video.style.width = '100%';
video.style.height = 'auto';
cameraContainer.appendChild(video);
cameraSection.appendChild(cameraContainer);

const detectButton = document.createElement('button');
detectButton.id = 'detect-expression';
detectButton.textContent = 'GO!!';
detectButton.style.backgroundColor = '#e50914';
detectButton.style.color = 'white';
detectButton.style.border = 'none';
detectButton.style.padding = '10px 30px';
detectButton.style.fontSize = '1.2rem';
detectButton.style.marginTop = '20px';
detectButton.style.cursor = 'pointer';
detectButton.style.borderRadius = '25px';
detectButton.style.transition = 'background-color 0.3s ease';

detectButton.style.justifyContent = 'center'; // Horizontally center the text
detectButton.style.alignItems = 'center'; // Vertically center the text
detectButton.addEventListener('mouseover', () => {
  detectButton.style.backgroundColor = '#b71c1c';
});
detectButton.addEventListener('mouseout', () => {
  detectButton.style.backgroundColor = '#e50914';
});
cameraSection.appendChild(detectButton);

// Movies Section Container (for the 10 recommendations)
const recommendationsSection = document.createElement('div');
recommendationsSection.id = 'recommendations-section';
recommendationsSection.style.display = 'none'; // Initially hidden
recommendationsSection.style.flexDirection = 'column';
recommendationsSection.style.alignItems = 'center';
recommendationsSection.style.width = '100%';
recommendationsSection.style.marginTop = '30px';

// Create 10 container elements inside the section
for (let i = 0; i < 10; i++) {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    movieContainer.style.display = 'flex'; // Set to flex
    movieContainer.style.flexDirection = 'column';
    movieContainer.style.alignItems = 'center'; // Center items horizontally
    movieContainer.style.justifyContent = 'center';
    movieContainer.style.width = '80%';
    movieContainer.style.maxWidth = '1200px';
    movieContainer.style.border = '1px solid #333';
    movieContainer.style.borderRadius = '8px';
    movieContainer.style.backgroundColor = '#2b2b2b';
    movieContainer.style.margin = '10px 0';
    movieContainer.style.padding = '15px';
    recommendationsSection.appendChild(movieContainer);
  }

// Movies Section
const moviesContainer = document.createElement('div');
moviesContainer.style.display = 'grid';
moviesContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
moviesContainer.style.gap = '30px';
moviesContainer.style.width = '100%';
moviesContainer.style.maxWidth = '1250px';
moviesContainer.style.marginTop = '30px';
let initialMovieCount = 5;  // Initial number of movies to display



// Append sections to main container
container.appendChild(cameraSection);
container.appendChild(recommendationsSection);
container.appendChild(moviesContainer);


// Append to body
app.appendChild(header);
app.appendChild(homeSection);
app.appendChild(subtitleSection);
app.appendChild(container);
document.body.appendChild(app);

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Error accessing camera:', err);
  });

// Movie data
const movieData = [
 { title: 'Pengabdi Setan', genre: 'Genre: Horor', img: "IMG/Horror/pengabdi-setan.jpg", rating: 7.0, duration: '1h 45m', synopsis: 'Pengabdi Setan adalah film horor tentang sebuah keluarga yang harus menghadapi kembalinya ibu mereka yang sudah meninggal, yang memicu berbagai kejadian supernatural yang menakutkan.', year: "Tahun: 2017"},
    { title: 'Cek Toko Sebelah', genre: 'Genre: Comedy', img: "IMG/Comedy/Cek Toko Sebelah.jpg", rating: 6.5, duration: '1h 40m', synopsis: 'Cek Toko Sebelah adalah film komedi yang menceritakan tentang seorang anak yang dipanggil kembali ke bisnis keluarganya untuk mengelola toko milik ayahnya, yang memicu drama keluarga dan situasi humoris.', year: "Tahun: 2016"},
    { title: 'Habibie & Ainun', genre: 'Genre: Romance', img: "IMG/Romance/Habibie & Ainun.jpg", rating: 8.1, duration: '2h 5m', synopsis: 'Habibie & Ainun adalah film romantis yang diangkat dari kisah nyata tentang hubungan antara Presiden Indonesia BJ Habibie dan istrinya Ainun yang penuh kasih.', year: "Tahun: 2012"},
    { title: 'Kartini', genre: 'Genre: Drama', img: "IMG/Drama/Kartini.jpg", rating: 7.2, duration: '2h 10m', synopsis: 'Kartini adalah drama sejarah yang menggambarkan perjuangan seorang wanita Indonesia, Kartini, yang berjuang untuk hak-hak perempuan di awal abad ke-20.', year: "Tahun: 2017"},
    { title: 'Se7en', genre: 'Genre: Thriller', img: "IMG/Thriller/Se7en.jpg", rating: 8.6, duration: '2h 8m', synopsis: 'Se7en adalah film thriller psikologis yang mengikuti dua detektif dalam penyelidikan serangkaian pembunuhan berdasarkan tujuh dosa maut.', year: "Tahun: 1995"},
   { title: 'The Conjuring', genre: 'Genre: Horror', img: "IMG/Horror/The Conjuring.jpg", rating: 7.5, duration: '1h 52m', synopsis: 'The Conjuring adalah film horor yang mengikuti kisah nyata dari penyelidikan paranormal oleh pasangan Ed dan Lorraine Warren saat mereka membantu keluarga yang diteror oleh kekuatan gelap di rumah mereka.', year: "Tahun: 2013"},
    { title: 'Warkop DKI Reborn', genre: 'Genre: Comedy', img: "IMG/Comedy/Warkop DKI Reborn.jpg", rating: 6.3, duration: '1h 38m', synopsis: 'Warkop DKI Reborn adalah film komedi yang merupakan reboot dari grup komedi legendaris Indonesia, Warkop DKI, dan menceritakan kisah petualangan kocak mereka dengan gaya baru.', year: "Tahun: 2016"},
     { title: 'Milea: Suara Hati Dilan', genre: 'Genre: Romance', img: "IMG/Romance/Milea.jpg", rating: 7.1, duration: '1h 40m', synopsis: 'Perspektif Dilan tentang kisah cintanya dengan Milea.', year: "Tahun: 2020"},
    { title: 'Laskar Pelangi', genre: 'Genre: Drama', img: "IMG/Drama/Laskar Pelangi.jpg", rating: 8.0, duration: '2h 5m', synopsis: 'Laskar Pelangi adalah film drama yang menceritakan tentang perjuangan sekelompok anak-anak di Belitung untuk mendapatkan pendidikan yang layak, meski dengan segala keterbatasan yang ada.', year:"Tahun: 2008"},
    { title: 'Zodiac', genre: 'Genre: Thriller', img: "IMG/Thriller/Zodiac.jpg", rating: 8.6, duration: '1h 58m', synopsis: 'Berdasarkan kasus nyata pembunuh berantai Zodiac di tahun 1970-an.', year: "Tahun: 2007"},
];

// Display movies
function displayMovies(movies, container, count) {
    container.innerHTML = ''; // Clear any previous content
    const moviesToDisplay = movies.slice(0, count);

    moviesToDisplay.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.style.backgroundColor = '#2b2b2b';
        movieElement.style.border = '1px solid #e50914';
        movieElement.style.borderRadius = '10px';
        movieElement.style.overflow = 'hidden';
        movieElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
        movieElement.style.transition = 'transform 0.3s';
        movieElement.style.width = '400px'; // Adjust width to make each movie element larger
        movieElement.style.margin = '10px';
          movieElement.style.display = 'flex'; // set to flex
        movieElement.style.flexDirection = 'column'; // set flex direction to column
        movieElement.addEventListener('mouseover', () => {
            movieElement.style.transform = 'scale(1.05)';
        });
        movieElement.addEventListener('mouseout', () => {
            movieElement.style.transform = 'scale(1)';
        });

        const movieImg = document.createElement('img');
        movieImg.src = movie.img;
        movieImg.style.width = '100%';
        movieImg.style.height = '70%';
        movieElement.appendChild(movieImg);

        const movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.title;
        movieTitle.style.padding = '10px';
        movieTitle.style.fontSize = '1.1rem';
        movieTitle.style.color = 'white';
        movieTitle.style.backgroundColor = '#e50914';
        movieTitle.style.margin = '0';
        movieElement.appendChild(movieTitle);

        const movieDetails = document.createElement('div');
        movieDetails.style.display = 'flex';
        movieDetails.style.justifyContent = 'space-between';
        movieDetails.style.padding = '0 10px';
        movieDetails.style.alignItems = 'center';
        movieElement.appendChild(movieDetails);
       
       const genreYearContainer = document.createElement('div');
         genreYearContainer.style.display = 'flex';
        genreYearContainer.style.flexDirection = 'column';
        movieDetails.appendChild(genreYearContainer);

        // Genre Section
        const movieGenre = document.createElement('p');
        movieGenre.textContent = movie.genre;
        movieGenre.style.color = '#e0e0e0';
        movieGenre.style.fontSize = '1.2rem';
        movieGenre.style.margin = '0';
        movieGenre.style.marginBottom = '5px'; // Adds space below the genre
        genreYearContainer.appendChild(movieGenre);

        // Movie year
        const movieYear = document.createElement('p');
        movieYear.textContent = `${movie.year}`;
        movieYear.style.color = '#e0e0e0';
        movieYear.style.fontSize = '1.2rem';
        movieYear.style.margin = '0';
        genreYearContainer.appendChild(movieYear);

        // Rating Section with Stars
        const ratingContainer = document.createElement('div');
        ratingContainer.style.display = 'flex';
        ratingContainer.style.alignItems = 'center';

        const starImage = 'IMG/bintang/bintang.png'; // Path to your filled star image
        const emptyStarImage = 'IMG/bintang/bintang.png'; // Path to your empty star image
        const rating = movie.rating;

        // Create full stars based on rating (out of 10, so we show full and empty stars)
        for (let i = 0; i < 1; i++) {
            const star = document.createElement('img');
            star.src = i < Math.floor(rating / 2) ? starImage : emptyStarImage;
            star.style.width = '40px';
            star.style.height = 'auto';
            star.style.marginRight = '3px'; // space between stars
            ratingContainer.appendChild(star);
        }

        const movieRatingText = document.createElement('p');
        movieRatingText.textContent = `${rating.toFixed(1)} / 10`;
        movieRatingText.style.color = '#e0e0e0';
        movieRatingText.style.fontSize = '0.9rem';
        movieRatingText.style.marginLeft = '0px'; // For spacing after the stars
        ratingContainer.appendChild(movieRatingText);
        movieDetails.appendChild(ratingContainer);
        
        // Duration Section
        const movieDuration = document.createElement('p');
        movieDuration.textContent = `Duration: ${movie.duration}`;
        movieDuration.style.color = '#e0e0e0';
        movieDuration.style.fontSize = '1.2rem';
        movieDuration.style.marginTop = '5px';  // Adds a slight gap, so they aren't directly on top of each other
        movieDuration.style.padding = '0 10px'; // You can also adjust padding here to fine-tune the spacing
        movieDuration.style.marginBottom = '10px';  // Maintains some space after the duration for consistency
        movieElement.appendChild(movieDuration);

         // Movie Synopsis
         const movieSynopsis = document.createElement('p');
          movieSynopsis.textContent = movie.synopsis;
          movieSynopsis.style.color = '#e0e0e0';
          movieSynopsis.style.fontSize = '1.2 rem';
          movieSynopsis.style.padding = '10px';
          movieSynopsis.style.marginTop = '10px';
          movieSynopsis.style.marginBottom = '15px'; // Add space below synopsis
          movieElement.appendChild(movieSynopsis);
        
          movieElement.addEventListener('click', () => {
            moviesContainer.style.display = 'none';
            recommendationsSection.style.display = 'flex';
            displayMoviesInRecommendations(movieData);
          });
        container.appendChild(movieElement);
    });
}
function displayMoviesInRecommendations(movies) {
    const movieContainers = document.querySelectorAll('.movie-container');

    movieContainers.forEach((container, index) => {
        container.innerHTML = ''; // Clear any previous content
        if (movies[index]) {
            const movie = movies[index];

            const movieImg = document.createElement('img');
            movieImg.src = movie.img;
            movieImg.style.width = '100%';
            movieImg.style.height = '70%';
            container.appendChild(movieImg);

            const movieTitle = document.createElement('h3');
            movieTitle.textContent = movie.title;
            movieTitle.style.padding = '10px';
            movieTitle.style.fontSize = '1.2rem';
            movieTitle.style.color = 'white';
            movieTitle.style.backgroundColor = '#e50914';
            movieTitle.style.margin = '0';
            container.appendChild(movieTitle);

             const movieDetails = document.createElement('div');
        movieDetails.style.display = 'flex';
        movieDetails.style.justifyContent = 'space-between';
        movieDetails.style.padding = '0 10px';
        movieDetails.style.alignItems = 'center';
        container.appendChild(movieDetails);
       
       const genreYearContainer = document.createElement('div');
         genreYearContainer.style.display = 'flex';
        genreYearContainer.style.flexDirection = 'column';
        movieDetails.appendChild(genreYearContainer);

        // Genre Section
        const movieGenre = document.createElement('p');
        movieGenre.textContent = movie.genre;
        movieGenre.style.color = '#e0e0e0';
        movieGenre.style.fontSize = '1.2rem';
        movieGenre.style.margin = '0';
        movieGenre.style.marginBottom = '5px'; // Adds space below the genre
        genreYearContainer.appendChild(movieGenre);

        // Movie year
        const movieYear = document.createElement('p');
        movieYear.textContent = `${movie.year}`;
        movieYear.style.color = '#e0e0e0';
        movieYear.style.fontSize = '1.2rem';
        movieYear.style.margin = '0';
        genreYearContainer.appendChild(movieYear);

            // Rating Section with Stars
            const ratingContainer = document.createElement('div');
            ratingContainer.style.display = 'flex';
            ratingContainer.style.alignItems = 'center';

            const starImage = 'IMG/bintang/bintang.png'; // Path to your filled star image
            const emptyStarImage = 'IMG/bintang/bintang.png'; // Path to your empty star image
            const rating = movie.rating;

            // Create full stars based on rating (out of 10, so we show full and empty stars)
            for (let i = 0; i < 1; i++) {
                const star = document.createElement('img');
                star.src = i < Math.floor(rating / 2) ? starImage : emptyStarImage;
                star.style.width = '40px';
                star.style.height = 'auto';
                star.style.marginRight = '3px'; // space between stars
                ratingContainer.appendChild(star);
            }

            const movieRatingText = document.createElement('p');
            movieRatingText.textContent = `${rating.toFixed(1)} / 10`;
            movieRatingText.style.color = '#e0e0e0';
            movieRatingText.style.fontSize = '0.9rem';
            movieRatingText.style.marginLeft = '0px'; // For spacing after the stars
            ratingContainer.appendChild(movieRatingText);
             movieDetails.appendChild(ratingContainer);
            // Duration Section
            const movieDuration = document.createElement('p');
            movieDuration.textContent = `Duration: ${movie.duration}`;
            movieDuration.style.color = '#e0e0e0';
            movieDuration.style.fontSize = '1.2rem';
            movieDuration.style.marginTop = '5px';  // Adds a slight gap, so they aren't directly on top of each other
            movieDuration.style.padding = '0 10px'; // You can also adjust padding here to fine-tune the spacing
            movieDuration.style.marginBottom = '10px';  // Maintains some space after the duration for consistency
            movieElement.appendChild(movieDuration);

            // Movie Synopsis
            const movieSynopsis = document.createElement('p');
            movieSynopsis.textContent = movie.synopsis;
            movieSynopsis.style.color = '#e0e0e0';
            movieSynopsis.style.fontSize = '1rem';
            movieSynopsis.style.padding = '10px';
            movieSynopsis.style.marginTop = '10px';
            movieSynopsis.style.marginBottom = '15px'; // Add space below synopsis
            movieElement.appendChild(movieSynopsis);        
        }
    });
}


// Simulate expression detection
const detectExpression = () => {
   cameraSection.style.display = 'none';
  displayMovies(movieData, moviesContainer, 10);
};

detectButton.addEventListener('click', detectExpression);

// Initially display 5 movies
displayMovies(movieData, moviesContainer, initialMovieCount);