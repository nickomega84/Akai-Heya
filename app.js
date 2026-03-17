document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('cursed-popup');
    const closeBtn = document.getElementById('close-btn');
    const popupText = document.getElementById('popup-text');
    const bgVoid = document.getElementById('background-void');
    
    const voiceAudio = document.getElementById('voice-audio');
    const staticAudio = document.getElementById('static-audio');
    
    let clickCount = 0;
    let audioStarted = false;

    setTimeout(() => {
        popup.style.display = 'block';
    }, 2500);

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        clickCount++;

        if (!audioStarted) {
            voiceAudio.play().catch(err => console.log("Audio bloqueado"));
            staticAudio.play().catch(err => console.log("Audio bloqueado"));
            audioStarted = true;
        }

        popup.style.transform = 'none';

        const maxX = window.innerWidth - popup.offsetWidth;
        const maxY = window.innerHeight - popup.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        popup.style.left = `${randomX}px`;
        popup.style.top = `${randomY}px`;

        if (clickCount === 2) {
            popupText.innerHTML = "あなたは赤い部屋が<br><span class='subtext'>(Do you like the...)</span>";
        } 
        else if (clickCount === 4) {
            popupText.innerHTML = "あなたは赤い部屋が好きですか？<br><span class='subtext'>(Do you like the red room?)</span>";
            bgVoid.style.backgroundColor = "#1a0000"; 
        } 
        else if (clickCount === 7) {
            bgVoid.style.backgroundColor = "#ff0000";
            popupText.innerHTML = "赤い部屋<br>赤い部屋<br>赤い部屋"; 
            popup.style.backgroundColor = "#000"; 
            popup.style.color = "#ff0000";
            
            triggerClones();
        }
    });

    function triggerClones() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                let newPopup = popup.cloneNode(true); 
                
                newPopup.removeAttribute('id'); 
                
                let rx = Math.floor(Math.random() * (window.innerWidth - 320));
                let ry = Math.floor(Math.random() * (window.innerHeight - 150));
                
                newPopup.style.left = `${rx}px`;
                newPopup.style.top = `${ry}px`;
                
                document.body.appendChild(newPopup);
            }, i * 150);
        }
    }
});