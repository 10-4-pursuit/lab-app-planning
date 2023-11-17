function imageSlider (){
    const pictures = [

    //    "1", 
       "2",
       "3",
       "4"
    ];

    const buttons = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector(".img-container")

    let counter = 0;

    

    // Function to switch images automatically
    const autoSlide = () => {
        counter++;
        if (counter > pictures.length - 1) {
            counter = 0;
        }
        imgDiv.style.background = `url('/assets/${pictures[counter]}.jpeg')`;
    };

    // Set up an interval to call autoSlide every 2 seconds
    let intervalId = setInterval(autoSlide, 2000); // 2000 milliseconds = 2 seconds

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-left')){
                counter--
                if (counter < 0){
                    counter = pictures.length - 1;
                }
                imgDiv.style.background = `url('/assets/${pictures[counter]}.jpeg')`

                 // Clear the interval and reset it to avoid conflicts
                 clearInterval(intervalId);
                 intervalId = setInterval(autoSlide, 2000);
            }
        })
    })
    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-right')){
                counter++
                if (counter > pictures.length - 1){
                    counter = 0;
                }
                imgDiv.style.background = `url('/assets/${pictures[counter]}.jpeg')`

                 // Clear the interval and reset it to avoid conflicts
                 clearInterval(intervalId);
                 intervalId = setInterval(autoSlide, 2000);
            }
        })
    })
}


imageSlider()