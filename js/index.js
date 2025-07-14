
// Массив фильмов
const films = [
    {
        title: 'Хомячатор',
        genre: 'Драма / Приключения',
        rating: 4.7,
        views: 123456,
        image: 'img/Хомечатор.jpg'
    },
    {
        title: 'Хомяка Поттер',
        genre: 'Драма / Приключения',
        rating: 4.9,
        views: 987654,
        image: 'img/ХомякПотер.jpg'
    },
    {
        title: 'Игра в хомяка',
        genre: 'Драма / Фэнтези',
        rating: 4.8,
        views: 567890,
        image: 'img/Игравкальмара.jpg'
    },
    {
        title: 'Крепкий орешек',
        genre: 'Боевик / Триллер',
        rating: 4.6,
        views: 345678,
        image: 'img/крепкийхомячек.jpg'
    },
    {
        title: 'Ам-ам-ам и потерянный хомячок',
        genre: 'Драма / Исторический',
        rating: 4.9,
        views: 789012,
        image: 'img/ам-ам-ам и потерянный хомячок.jpg'
    },
    {
        title: 'Семь жизней',
        genre: 'Драма / Фэнтези',
        rating: 4.5,
        views: 234567,
        image: 'img/семьжизней.jpg'
    },
    {
        title: 'Хомяк и нежданное путешествие',
        genre: 'Приключения / Фэнтези',
        rating: 4.7,
        views: 678901,
        image: 'img/хомякинеожиданноепутешествие.jpg'
    },
    {
        title: 'Окак',
        genre: 'Вестерн / Драма',
        rating: 4.8,
        views: 890123,
        image: 'img/окак.jpg'
    },
    {
        title: 'Хомяк в стране чудес',
        genre: 'Драма / Ужасы',
        rating: 4.6,
        views: 456789,
        image: 'img/хомяквстранечудес.jpg'
    },
    {
        title: 'Омерзительный хомячок',
        genre: 'Вестерн / Драма',
        rating: 4.7,
        views: 567890,
        image: 'img/омерзительныйхомячок.jpg'
    },
    {
        title: 'Прочь грызун',
        genre: 'Ужасы / Триллер',
        rating: 4.3,
        views: 789012,
        image: 'img/прочьгрузун.jpg'
    },
    {
        title: '1 + 1',
        genre: 'Вестерн / Драма',
        rating: 5.0,
        views: 999999,
        image: 'img/1+2.jpg'
    },
    {
        title: 'Побег из хомяченко',
        genre: 'Драма / Приключения',
        rating: 4.7,
        views: 375674,
        image: 'img/побегизхомяченко.jpg'
    },
    {
        title: 'Скебоб',
        genre: 'Драма / Приключения',
        rating: 4.8,
        views: 874532,
        image: 'img/скебоб.jpg'
    },
    {
        title: 'Чупен',
        genre: 'Драма / Фэнтези',
        rating: 4.5,
        views: 456342,
        image: 'img/чупен.jpg'
    }
];

// Получаем элементы интерфейса
const searchInput = document.getElementById('searchInput');
const cardsContainer = document.getElementById('cardsContainer');

// Функция фильтрации фильмов по названию
function filterFilms(query) {
    return films.filter(film => film.title.toLowerCase().includes(query.trim().toLowerCase()));
}

// Очистка существующих карточек
function clearCards() {
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
    }
}

// Рендер карточек фильмов
function renderFilmCards(filteredFilms) {
    clearCards();

    if (filteredFilms.length > 0) {
        filteredFilms.forEach((film) => {
            const card = document.createElement('div');
            card.classList.add('film-card');

            // Добавляем картинку и информационный слой поверх нее
            card.innerHTML = `
                <img src="${film.image}" alt="${film.title}" />
                <div class="overlay-info">
                    <div class="stars">★ ${film.rating}</div>
                    <div class="views">Просмотры: ${film.views}</div>
                    <div class="info-text">
                        <h2>${film.title}</h2>
                        <p>${film.genre}</p>
                    </div>
                </div>
            `;

            cardsContainer.appendChild(card);
        });
    } else {
        const noResultItem = document.createElement('div');
        noResultItem.classList.add('no-result-message');
        noResultItem.textContent = 'Ничего не найдено';
        cardsContainer.appendChild(noResultItem);
    }
}

// Обрабатываем событие ввода
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    const filteredFilms = filterFilms(query);
    renderFilmCards(filteredFilms);
});

// Изначально показываем все фильмы
renderFilmCards(films);