document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.querySelector(".button2");
  const okayButton = document.querySelector(".button1");
  const photo = document.querySelector(".photo");
  const title = document.querySelector("h1");
  let scaleValue = 1;
  const BUTTON_MARGIN = 37;
  let clickCount = 0;

  const noButtonTexts = ["No", "No", "No", "No", "No!!!", "Ot?"];

  noButton.addEventListener("click", function () {
    clickCount++;

    const currentTextIndex = clickCount % noButtonTexts.length;
    noButton.textContent = noButtonTexts[currentTextIndex];

    scaleValue *= 1.6;
    okayButton.style.transform = `scale(${scaleValue})`;

    const newMargin = BUTTON_MARGIN * scaleValue;
    noButton.style.marginLeft = `${newMargin}px`;

    const photoAndTitleDistance = (scaleValue - 1) * 20;
    photo.style.transition = "transform 1s ease-out";
    title.style.transition = "transform 1s ease-out";

    photo.style.transform = `translateY(-${photoAndTitleDistance}px)`;
    title.style.transform = `translateY(-${photoAndTitleDistance}px)`;

    if (clickCount >= 1) {
      title.textContent = "Tah tix kor ban dars";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 2) {
      title.textContent = "Prom Pleam!!";
      photo.src = "img/sad.gif";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 3) {
      title.textContent = "Yum lov hz!!";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 4) {
      photo.src = "img/sad-without-you.gif";
      title.textContent = "Hik Hik!!!";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 5) {
      okayButton.style.width = "100px";
      okayButton.style.height = "100px";
      okayButton.style.fontSize = "5px";
      okayButton.textContent = "Okay!!!";
      okayButton.style.position = "absolute";
      okayButton.style.top = "50%";
      okayButton.style.left = "50%";
      okayButton.style.transform = "translate(-50%, -50%)";
      okayButton.style.transform = `scale(${scaleValue})`;
      okayButton.style.zIndex = "100";
      noButton.style.position = "absolute";
      noButton.style.bottom = "16%";
    }
    if (clickCount >= 6) {
      photo.src = "img/haha.gif";
      title.textContent = "ot ot tv, nh nv luj sl tmd.";
      photo.style.transform = "none";
      title.style.transform = "none";
      noButton.style.display = "none";
      okayButton.style.display = "none";
    }
  });
  okayButton.addEventListener("click", function () {
    photo.src = "img/hug.gif";
    title.textContent = "Awwww I luv u cutie.<3";
    photo.style.transform = "none";
    title.style.transform = "none";
    noButton.style.display = "none";
    okayButton.style.display = "none";
  });
});
