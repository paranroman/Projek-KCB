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

// Movies Section
const moviesContainer = document.createElement('div');
moviesContainer.style.display = 'grid';
moviesContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
moviesContainer.style.gap = '20px';
moviesContainer.style.width = '100%';
moviesContainer.style.maxWidth = '1200px';
moviesContainer.style.marginTop = '30px';

// Append sections to main container
container.appendChild(cameraSection);
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
    { title: 'Pengabdi Setan', genre: 'Horor', img: "IMG/Horror/pengabdi-setan.jpg" },
    { title: 'Cek Toko Sebelah', genre: 'Comedy', img: "IMG/Comedy/Cek Toko Sebelah.jpg" },
    { title: 'Habibie & Ainun', genre: 'Romance', img: "IMG/Romance/Habibie & Ainun.jpg" },
    { title: 'Kartini', genre: 'Drama', img: "IMG/Drama/Kartini.jpg" },
    { title: 'Se7en', genre: 'Thriller', img: "IMG/Thriller/Se7en.jpg" }
  ];  

// Display movies
function displayMovies(movies) {
  moviesContainer.innerHTML = '';
  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.style.backgroundColor = '#2b2b2b';
    movieElement.style.border = '1px solid #e50914';
    movieElement.style.borderRadius = '10px';
    movieElement.style.overflow = 'hidden';
    movieElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    movieElement.style.transition = 'transform 0.3s';
    movieElement.addEventListener('mouseover', () => {
      movieElement.style.transform = 'scale(1.05)';
    });
    movieElement.addEventListener('mouseout', () => {
      movieElement.style.transform = 'scale(1)';
    });

    const movieImg = document.createElement('img');
    movieImg.src = movie.img;
    movieImg.style.width = '100%';
    movieImg.style.height = '80%';
    movieElement.appendChild(movieImg);

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.title;
    movieTitle.style.padding = '10px';
    movieTitle.style.fontSize = '1.1rem';
    movieTitle.style.color = 'white';
    movieTitle.style.backgroundColor = '#e50914';
    movieTitle.style.margin = '0';
    movieElement.appendChild(movieTitle);

    const movieGenre = document.createElement('p');
    movieGenre.textContent = movie.genre;
    movieGenre.style.color = '#e0e0e0';
    movieGenre.style.fontSize = '0.9rem';
    movieGenre.style.padding = '10px';
    movieGenre.style.margin = '0';
    movieElement.appendChild(movieGenre);

    moviesContainer.appendChild(movieElement);
  });
}

// Simulate expression detection
const detectExpression = () => {
  const filteredMovies = movieData.filter(movie => movie.genre.includes('Comedy') || movie.genre.includes('Drama'));
  displayMovies(filteredMovies);
};

detectButton.addEventListener('click', detectExpression);

// Initially display all movies
displayMovies(movieData);
