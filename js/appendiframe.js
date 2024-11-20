fetch('/data/games.json')
.then(response => response.json())
.then(games => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameIndex = parseInt(urlParams.get('i')) || 0;

    const game = games[gameIndex];
    if (game) {
        const gameContainer = document.getElementById('game-container');

        const gameTitle = document.createElement('p');
        gameTitle.textContent = game["name"] + " ";

        const centerDiv = document.createElement('div');
        centerDiv.classList.add('center');

        const innerGameContainer = document.createElement('div');
        innerGameContainer.classList.add('game-container');

        const gameObject = document.createElement('iframe');
        gameObject.width = "800";
        gameObject.height = "600";
        gameObject.frameBorder = 0;
        gameObject.src = game["data"];

        // Add fullscreen button
        const fullscreenButton = document.createElement('button');
        const icon = document.createElement('img');
        icon.src = "/data/fullscreen.png";
        fullscreenButton.appendChild(icon);

        fullscreenButton.addEventListener('click', () => {
            gameObject.contentWindow.document.body.focus();  // Focus the iframe document body

            if (!document.fullscreenElement) {
                // Enter fullscreen mode for the iframe's container (not just the iframe itself)
                gameObject.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
                });
            } else {
                document.exitFullscreen();  // Exit fullscreen when clicked again
            }
        });

        // Add listener for F11 key to exit fullscreen
        document.addEventListener('keyup', (event) => {
            if (event.key === 'F11' && document.fullscreenElement) {
                document.exitFullscreen();
            }
        });

        gameContainer.appendChild(gameTitle);
        innerGameContainer.appendChild(gameObject);
        gameTitle.appendChild(fullscreenButton);  // Add button to container
        centerDiv.appendChild(innerGameContainer);
        gameContainer.appendChild(centerDiv);
    }
})
.catch(error => console.error('Error loading games:', error));
