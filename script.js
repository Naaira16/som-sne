document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.querySelector(".button2");
  const okayButton = document.querySelector(".button1");
  const photo = document.querySelector(".photo");
  const title = document.querySelector("h1");
  let scaleValue = 1;
  const BUTTON_MARGIN = 30;
  let clickCount = 0;

  const noButtonTexts = ["No", "No", "No", "No", "No", "No!!!"];

  noButton.addEventListener("click", function () {
    clickCount++;

    const currentTextIndex = clickCount % noButtonTexts.length;
    noButton.textContent = noButtonTexts[currentTextIndex];

    scaleValue *= 1.5;
    okayButton.style.transform = `scale(${scaleValue})`;

    const newMargin = BUTTON_MARGIN * scaleValue;
    noButton.style.marginLeft = `${newMargin}px`;

    const photoAndTitleDistance = (scaleValue - 1) * 20;
    photo.style.transition = "transform 1s ease-out";
    title.style.transition = "transform 1s ease-out";

    photo.style.transform = `translateY(-${photoAndTitleDistance}px)`;
    title.style.transform = `translateY(-${photoAndTitleDistance}px)`;

    if (clickCount >= 1) {
      title.textContent = "Tah tix kor ban dars tv, nor!!!";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 2) {
      title.textContent = "Hue, Prom Pleam!!";
      photo.src = "img/peach-goma.gif";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 3) {
      title.textContent = "Yum lov hz, Jam mer";
      photo.src = "img/sad.gif";
    }
    if (clickCount >= 4) {
      photo.src = "img/sad-without-you.gif";
      title.textContent = "Hik Hik Mnus akk!!!";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 5) {
      title.textContent = "Huh jam mer hah Hikk Hikkk.";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 6) {
      photo.src = "img/sad.2.gif";
      title.textContent = "ot ahnit knea eyy tix ehh?";
      okayButton.textContent = "Yes";
    }
    if (clickCount >= 7) {
      photo.src = "img/haha.gif";
      title.textContent = "Hue! no no tv, nh nv luj sl yg tmd.";
      photo.style.transform = "none";
      title.style.transform = "none";
      noButton.style.display = "none";
      okayButton.style.display = "none";
    }
  });
  okayButton.addEventListener("click", function () {
    photo.src = "img/hug.gif";
    title.textContent = "Men ehh?? ouyyy kur oy sl mles cutie.<3";
    photo.style.transform = "none";
    title.style.transform = "none";
    noButton.style.display = "none";
    okayButton.style.display = "none";
  });
});
document.querySelector(".button1").addEventListener("click", function () {
  gtag("event", "click", {
    event_category: "Button",
    event_label: "Okay Button Clicked",
  });
});

document.querySelector(".button2").addEventListener("click", function () {
  gtag("event", "click", {
    event_category: "Button",
    event_label: "No Button Clicked",
  });
});
