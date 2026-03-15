const footerSpan = document.getElementById("copyright-year");

const currentYear = new Date();

footerSpan.textContent = "©" + currentYear.getFullYear();
