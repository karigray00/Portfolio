const sectionIds = ['startPage', 'aboutMePage', 'portfolioPage', 'contactPage'];

function showSection(idToShow) {
    sectionIds.forEach((sectionId) => {
        if (sectionId === idToShow) {
            $('#' + idToShow).show();
            $('.menu').css('visibility','visible');
        }
        else {
            $('#' + sectionId).hide();
        }
    });
}

function setupPage() {
    showSection('startPage');
    $('.menu').css('visibility','hidden');
}


setupPage();