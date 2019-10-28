const sectionIds = ['startPage', 'aboutMePage', 'portfolioPage', 'contactPage'];

function showSection(idToShow) {
    sectionIds.forEach((sectionId) => {
        if (sectionId === idToShow) {
            $('#' + idToShow).show();
        }
        else {
            $('#' + sectionId).hide();
        }
    });
}

function setupPage() {
    showSection('startPage');
    event.preventDefault();
}


setupPage();