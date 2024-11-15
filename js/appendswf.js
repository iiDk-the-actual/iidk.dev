fetch('/data/games.json')
.then(response => response.json())
.then(games => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameIndex = parseInt(urlParams.get('i')) || 0;

    const game = games[gameIndex];
    if (game) {
        const gameContainer = document.getElementById('game-container');

        const gameTitle = document.createElement('p');
        gameTitle.textContent = game["name"];

        const centerDiv = document.createElement('div');
        centerDiv.classList.add('center');

        const innerGameContainer = document.createElement('div');
        innerGameContainer.classList.add('game-container');

        const gameObject = document.createElement('object');
        gameObject.width = "800";
        gameObject.height = "600";
        const param = document.createElement('param');
        param.name = 'movie';
        param.value = game["data"];
        gameObject.appendChild(param);

        gameContainer.appendChild(gameTitle);

        innerGameContainer.appendChild(gameObject);

        centerDiv.appendChild(innerGameContainer);

        gameContainer.appendChild(centerDiv);
    }
})
.catch(error => console.error('Error loading games:', error));