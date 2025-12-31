function openYouTube() {
const videoMap = {
            "1": "dQw4w9WgXcQ",
            "2": "9bZkp7q19f0"
        };

        const linkElement = document.getElementById('ytLink');
        const inputElement = document.getElementById('videoNumber');

        // Funkcja aktualizująca link "w locie"
        function updateLink() {
            const num = inputElement.value;
            const videoId = videoMap[num];

            if (videoId) {
                const isAndroid = /Android/i.test(navigator.userAgent);
                const androidIntent = `intent://www.youtube.com/watch?v=${videoId}#Intent;package=com.google.android.youtube;scheme=https;end`;
                const webUrl = `https://www.youtube.com/watch?v=${videoId}`;
                
                linkElement.href = isAndroid ? androidIntent : webUrl;
            } else {
                linkElement.href = "#";
            }
        }

        // Aktualizuj link przy każdej zmianie w polu tekstowym
        inputElement.addEventListener('input', updateLink);

        // Dodatkowe zabezpieczenie: jeśli użytkownik kliknie, a ID jest błędne
        linkElement.addEventListener('click', function(e) {
            if (this.getAttribute('href') === "#") {
                e.preventDefault();
                alert("Wpisz poprawny numer filmu!");
            }
        });
}