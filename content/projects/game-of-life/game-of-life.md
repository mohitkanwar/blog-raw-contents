The Game of Life
================
The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves or, for advanced players, by creating patterns with particular properties.

Rules
-----
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

    1) Any live cell with fewer than two live neighbours dies, as if caused by under-population.
    2) Any live cell with two or three live neighbours lives on to the next generation.
    3) Any live cell with more than three live neighbours dies, as if by over-population.
    4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

Draw a pattern in below grid. (Clicking on a cell toggles between being alive and dead). Click on Show next gen button to get the results in next generation.
You may check Loop Continuously checkbox to repeat generations. Grid size may be modified by entring values in the corresponding text box.

<div id="universeHolder"></div>
<script  src="/js/projects/game-of-life/game-of-life.js"></script>

Github location
---------------
The project is checked in at https://github.com/mohitkanwar/Game-of-Life

Further Readings
----------------

https://en.wikipedia.org/wiki/Conway's_Game_of_Life

Learnings
---------
