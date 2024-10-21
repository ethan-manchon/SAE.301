    <section class="w-full h-fit justify-center items-center">
        <div class="relative w-full h-fit inset-0 flex justify-center items-center bg-yellow text-dark text-xs font-normal py-2" id="overlay-text">
            Free delivery to stores on selected items. Fast delivery to your door from £4.95. T&Cs Apply.

            <script>
                const texts = ["Free delivery to stores on selected items. Fast delivery to your door from £4.95. T&Cs Apply.", "Save 10% on furniture when you buy 2 or more.", "10% off your first order when you register. T&Cs Apply."];
                let index = 0;
                const overlayText = document.getElementById("overlay-text");

                setInterval(() => {
                    overlayText.style.transition = "0.5s ease-in-out";
                    setTimeout(() => {
                        index = (index + 1) % texts.length;
                        overlayText.textContent = texts[index];
                        overlayText.style.opacity = 1;
                    }, 1000);
                }, 5000);
            </script>

        </div>

        <div class="relative w-full h-full">

            <video class="w-full h-full" src="../assets/bgVideoAccueil.mp4" preload="auto" muted autoplay loop></video>

            <div
                class="absolute left-1/2 transform -translate-x-1/2 bottom-10 w-fit h-fit flex justify-center items-center text-white border-b-2 border-b-white">
                <a href="#">Shop all Bedroom</a>
            </div>

        </div>

    </section>