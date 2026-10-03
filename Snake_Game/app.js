        // Get canvas
        let canvas = document.getElementById("game");
        let ctx = canvas.getContext("2d");

        // Snake
        let snake = [
            { x: 200, y: 200 },
            { x: 190, y: 200 },
            { x: 180, y: 200 }
        ];

        // Food
        let food = {
            x: 300,
            y: 200
        };

        // Direction
        let dx = 10;
        let dy = 0;

        // Score
        let score = 0;

        // Game status
        let gameOver = false;


        // Keyboard controls
        document.addEventListener("keydown", changeDirection);


        function changeDirection(event) {

            if (event.key == "ArrowUp" && dy == 0) {
                dx = 0;
                dy = -10;
            }

            if (event.key == "ArrowDown" && dy == 0) {
                dx = 0;
                dy = 10;
            }

            if (event.key == "ArrowLeft" && dx == 0) {
                dx = -10;
                dy = 0;
            }

            if (event.key == "ArrowRight" && dx == 0) {
                dx = 10;
                dy = 0;
            }
        }


        // Main game
        function gameLoop() {

            if (gameOver) {
                ctx.fillStyle = "#8cff66";
                ctx.font = "30px monospace";
                ctx.fillText("GAME OVER", 105, 190);

                ctx.font = "15px monospace";
                ctx.fillText("Press RESTART", 135, 220);

                return;
            }

            // Move snake
            let head = {
                x: snake[0].x + dx,
                y: snake[0].y + dy
            };

            snake.unshift(head);


            // Check food
            if (head.x == food.x && head.y == food.y) {

                score++;

                document.getElementById("score").innerHTML =
                    "Score: " + score;

                createFood();

            } else {

                snake.pop();
            }


            // Check collision
            if (
                head.x < 0 ||
                head.x >= canvas.width ||
                head.y < 0 ||
                head.y >= canvas.height
            ) {
                gameOver = true;
            }


            // Snake body collision
            for (let i = 1; i < snake.length; i++) {

                if (
                    head.x == snake[i].x &&
                    head.y == snake[i].y
                ) {
                    gameOver = true;
                }
            }


            // Draw everything
            drawGame();

            setTimeout(gameLoop, 100);
        }


        // Draw game
        function drawGame() {

            // Background
            ctx.fillStyle = "#172017";
            ctx.fillRect(0, 0, canvas.width, canvas.height);


            // Food
            ctx.fillStyle = "#ff5555";
            ctx.fillRect(food.x, food.y, 10, 10);


            // Snake
            ctx.fillStyle = "#8cff66";

            for (let part of snake) {

                ctx.fillRect(
                    part.x,
                    part.y,
                    10,
                    10
                );
            }
        }


        // Create new food
        function createFood() {

            food.x =
                Math.floor(Math.random() * 40) * 10;

            food.y =
                Math.floor(Math.random() * 40) * 10;
        }


        // Restart
        function restartGame() {

            snake = [
                { x: 200, y: 200 },
                { x: 190, y: 200 },
                { x: 180, y: 200 }
            ];

            dx = 10;
            dy = 0;

            score = 0;

            gameOver = false;

            document.getElementById("score").innerHTML =
                "Score: 0";

            gameLoop();
        }


        // Start game
        gameLoop();