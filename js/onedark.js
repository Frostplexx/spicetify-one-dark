// waitForElement borrowed from:
// https://github.com/morpheusthewhite/spicetify-themes/blob/master/Dribbblish/dribbblish.js
function waitForElement(els, func, timeout = 100) {
    const queries = els.map(el => document.querySelector(el));
    if (queries.every(a => a)) {
      func(queries);
    } else if (timeout > 0) {
      setTimeout(waitForElement, 300, els, func, --timeout);
    }
}

// Used to select matching equalizer-animated-COLOR.gif
waitForElement([".Root"], (root) => {
    root[0].classList.add(`onedark-eq-one_dark`);
});
