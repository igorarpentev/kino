// Поиск по названию по списку
function searchMovies() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const movies = document.querySelectorAll(".name, .movie");
  
    movies.forEach((movie) => {
      const title = movie.querySelector("h2").innerText.toLowerCase();
      movie.style.display = title.includes(input) ? "block" : "none";
    });
  }
  


// Фильтр по формату
function filterMovies() {
    const format = document.getElementById("formatFilter").value.toLowerCase();
    const movies = document.querySelectorAll(".movie");

    let visibleCount = 0;

    movies.forEach((movie) => {
        const movieFormat = movie.dataset.format.toLowerCase();

        // Показываем все, если выбран "Показать все форматы"
        if (format === "all" || movieFormat === format) {
            movie.style.display = "block";
            visibleCount++;
        } else {
            movie.style.display = "none";
        }
    });

    // Обновляем счетчик фильмов
    document.getElementById("movieCount").textContent = `Всего фильмов: ${visibleCount}`;
}
// Инициализация фильтра при загрузке страницы
window.onload = filterMovies;




 // Функция для фильтрации по жанру и формату
 function filterMovies() {
    const genreFilter = document.getElementById("genreFilter").value.toLowerCase();
    const formatFilter = document.getElementById("formatFilter").value.toLowerCase();
    const movies = document.querySelectorAll(".movie");
    
    let visibleCount = 0;

    // Перебор всех фильмов и их проверка по выбранным фильтрам
    movies.forEach((movie) => {
        const movieGenres = movie.dataset.genres.toLowerCase().split(",");
        const movieFormat = movie.dataset.format.toLowerCase();
        
        // Проверяем, совпадает ли жанр и формат с фильтром
        const genreMatches = (genreFilter === "all" || movieGenres.some(genre => genre.includes(genreFilter)));
        const formatMatches = (formatFilter === "all" || movieFormat === formatFilter);

        // Показываем фильм, если он соответствует обоим фильтрам
        if (genreMatches && formatMatches) {
            movie.style.display = "block";
            visibleCount++;
        } else {
            movie.style.display = "none";
        }
    });

    // Обновляем счетчик видимых фильмов
    document.getElementById("movieCount").textContent = ` ${visibleCount}`;
}

// Инициализация фильтра при загрузке страницы
window.onload = filterMovies;


// Функция обновления счётчика фильмов
function updateMovieCount(count) {
    // document.getElementById("movieCount").textContent = `Всего фильмов: ${count}`;
    document.getElementById("movieCount").textContent = ` ${count}`;
}

// ============================================


 
         