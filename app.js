const scrollAppear = () => {
    let introText = document.querySelector(".intro-text");
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    console.log(introPosition);
    console.log(screenPosition);

    if (introPosition < screenPosition / 1.3) {
        introText.classList.add("intro-appear");
    }
}

window.addEventListener('scroll', scrollAppear);
