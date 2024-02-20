var Resume = document.getElementById('Open Resume');
Resume.addEventListener('click', function() {
    var pdfUrl = 'https://drive.google.com/file/d/12h_L25JfTe_UIxoHYgIfuEpV48iez3mf/view?usp=drivesdk';
    window.open(pdfUrl, '_blank');
});