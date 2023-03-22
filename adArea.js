function appendH3Tag() {
    const coviTag = document.querySelector('.covi');

    if (coviTag) {
        h3Tag = createElement('h3');
        h3Tag.textcontent = 'AD area';
        h3Tag.setAttribute('class', 'text-center');

        coviTag.append(h3Tag);
    }
}
