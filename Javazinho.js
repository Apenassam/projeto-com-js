const faqItems = document.querySelectorAll('.faq-item');
function toggleIcon(element) {
    const faqAnswer = element.nextElementSibling;
    const openIcon = element.querySelector('.open-icon');
    const closeIcon = element.querySelector('.close-icon');
  
    if (faqAnswer.style.display === "none" || faqAnswer.style.display === "") {
      faqAnswer.style.display = "block";
      openIcon.style.display = "none";
      closeIcon.style.display = "inline";
    } else {
      faqAnswer.style.display = "none";
      openIcon.style.display = "inline";
      closeIcon.style.display = "none";
    }

}
