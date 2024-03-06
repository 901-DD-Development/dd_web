function sendEmailWithSubject() {
    var subject = encodeURIComponent('Inquiry Regarding Diamond Development Services');
    var email = 'mailto:contactdiamonddev@gmail.com';
    window.location.href = 'mailto:' + email + '?subject=' + subject;
}