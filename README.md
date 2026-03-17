# 🩸 Akai Heya (The Red Room) | Interactive DOM Experiment

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A psychological horror web experiment and a faithful recreation of the infamous early-2000s Japanese internet urban legend, **"Akai Heya"** (The Red Room). 

This project is a technical study in **hostile UI/UX design** and **Vanilla JavaScript DOM manipulation**, demonstrating how code can be used to hijack the user experience and create an inescapable sense of dread.

## ⚠️ Live Preview (Enter at your own risk)
![Akai-Heya]Preview.gif

**WARNING:** This project contains loud noises, flashing colors, and intentionally frustrating UI mechanics. 

---

## ⚙️ Technical Features & DOM Manipulation

* **Semantic HTML5:** Built using modern, accessible tags (`<main>`, `<dialog>`, `<header>`) while maintaining a visually retro Windows 98/2000 aesthetic.
* **Event Hijacking:** Uses Vanilla JavaScript to intercept the `click` event on the close button, using `e.preventDefault()` to deny the user's attempt to escape.
* **Dynamic Coordinate Mapping:** The script calculates window boundaries (`window.innerWidth` / `innerHeight`) to randomly teleport the pop-up across the screen without triggering scrollbars (`overflow: hidden`).
* **State Management:** Tracks user interactions (click count) to dynamically evolve the narrative, changing the DOM structure, text (`innerHTML`), and CSS styling in real-time.
* **Audio API Integration:** Bypasses modern browser auto-play restrictions by binding terrifying audio triggers directly to the user's first interaction.
* **Recursive DOM Cloning:** The climax features an aggressive loop that duplicates the HTML node exponentially to simulate a catastrophic system virus.

---

## 🚀 How to Run Locally

1. **Clone this repository:**
```bash
git clone https://github.com/nickomega84/red-room-jp.git
```

2. **Navigate to the project directory:**
```bash
cd red-room-jp
```

3. **Launch the Nightmare:**
Open the `index.html` file in any modern web browser. Make sure your volume is up. Try to close the window.

---

## ⚖️ Disclaimer

This is a frontend portfolio project built purely for educational purposes and as a homage to early internet folklore. No actual malware or harmful code is present. The only damage inflicted is purely psychological.
