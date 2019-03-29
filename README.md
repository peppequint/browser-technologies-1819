<div align="center">
	<h1 align='center'>Scoreboard App</h1>
<img align='center' src="./public/src/img/screenshot-application.png" width="420" />
</div>
<p align="center">
	Keep the score during a practice game, e.g. football or field hockey.
	<br>
	<!-- <a href="#">Live demo</a> -->
</p>
<br>

## Table of contents

- [Install](#install)
- [Concept](#concept)
- [Features](#features)
- [Status](#status)
- [Sources](#sources)

## Install

You have to need [Node.js](https://nodejs.org/en/download/) installed on your computer to run this project. To install this project on your computer, please follow the steps below from your command line:

```shell
# Clone repository
git clone https://github.com/peppequint/browser-technologies-1819.git

# Go to the repository
cd browser-technologies-1819

# Install dependencies
npm install

# Server + file changes are detected
npm run dev
```

## Concept

With this app you can keep track of the score during a training match. Also it is possible to keep track of multiple matches during a training session.

### Core functionality

Keep track of the score during a training match, even when the user can't connect to the internet.

### Wireflow

## Progressive enhancement

### localStorage

```javascript
if (window.localStorage) {
  localStorage.setItem("Score team 1", homeScoreNumber);
}
```

### Fallback font

```css
body {
  font-family: "Noto Sans", sans-serif;
}
```

### Fallback css declaration

```css
.container .container-item {
  height: 365px;
  height: 42.5vh;
}
```

## Status

## Sources

```

```
