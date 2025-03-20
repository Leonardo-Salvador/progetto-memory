# Drunk Simpsons Memory Game

![Game Screenshot](/public/immagin_simpson/duff.jpg)

## Description

Drunk Simpsons Memory Game is a fun and interactive memory card game featuring characters from The Simpsons. Players need to match pairs of cards with the same character to win the game. The game has a drinking theme, where players can track "shots" taken during gameplay.

## Features

- Interactive memory card matching gameplay
- Simpsons-themed cards featuring popular characters
- Card shuffling algorithm for randomized gameplay
- Shot counter to track drinks (for entertainment purposes)
- Victory screen with animation when all matches are found
- Responsive grid layout

## Technologies Used

- React 19
- Vite 6.2.0
- JavaScript (ES6+)
- CSS3
- HTML5

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Leonardo-Salvador/progetto-memory.git
   cd progetto-memory
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to the local server address (typically http://localhost:5173)

3. Click on cards to flip them and try to find matching pairs

4. The shot counter can be incremented by clicking the button

5. When all pairs are matched, a victory screen will appear

## Game Rules

1. Click on any card to reveal the character
2. Click on a second card to find a match
3. If the cards match, they will be removed from the board
4. If they don't match, they will flip back over
5. Continue until all pairs are matched

## Project Structure

```
progetto-memory/
├── public/
│   ├── immagin_simpson/  # Character images
│   └── vite.svg
├── src/
│   ├── App.css           # Main application styles
│   ├── App.jsx           # Main application component
│   ├── assets/           # Static assets
│   ├── index.css         # Global styles
│   ├── main.jsx          # Application entry point
│   └── progetto_memory.jsx # Memory game component
└── package.json          # Project dependencies
```

## Building for Production

To build the application for production:

```
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```
npm run preview
```

## License

[MIT License](LICENSE)

## Acknowledgements

- The Simpsons characters and images are used for educational purposes
- Built with React and Vite
