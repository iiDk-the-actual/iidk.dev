document.addEventListener("DOMContentLoaded", function() {
    fetch('/data/games.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.querySelector('.grid');

            data.forEach(game => {
                const gameElement = document.createElement('a');
                gameElement.href = game.link;
                gameElement.classList.add('no-style');

                const innerContainer = document.createElement('div');
                innerContainer.classList.add('inner-container');

                document.createElement('br');

                const img = document.createElement('img');
                img.src = game.icon;
                innerContainer.appendChild(img);

                const gameName = document.createElement('gameTitle');
                gameName.textContent = game.name;
                innerContainer.appendChild(gameName);

                gameElement.appendChild(innerContainer);
                grid.appendChild(gameElement);
            });
        })
        .catch(error => console.error('Error loading games:', error));
});
