function sendEmailWithSubject() {
    var subject = encodeURIComponent('Inquiry Regarding Diamond Development Services');
    var email = 'mailto:contactdiamonddev@gmail.com';
    window.location.href = 'mailto:' + email + '?subject=' + subject;
}

window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  // Scroll to the top when the button is clicked
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }