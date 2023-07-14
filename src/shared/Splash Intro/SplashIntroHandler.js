export function SplashIntroHandler() {
    let introContainer = document.querySelector(".intro-container")
    let introTexts = document.querySelectorAll(".intro-text")
    // Handle each of the intro text get in
    introTexts.forEach((text, index) => {
        // Add get in animation to each of the text
        setTimeout(() => {
            text.classList.add("get-in-animation")
        }, (index + 1) * 300)

        // Add get out animation to each of the text
        setTimeout (() => {
            setTimeout(() => {
                text.classList.remove("get-in-animation")
                text.classList.add("get-out-animation")
            }, (index + 1) * 400)
        }, 1200)
    });
    // Handle the intro container get out after every animations above are executed
    setTimeout(() => {
        setTimeout(() => {
            introContainer.classList.add("intro-container-get-out-animation")
        }, 3000)
    })
}