(function(){
    'use strict';
    const validKeys = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','backspace', '\'', ' ', ',', '-'];
    let typed = '';
    let input = document.querySelector('input');
    document.body.addEventListener('keydown', e => {
        let key = e.key.toLowerCase();
        if (!validKeys.includes(key)) return;
        if (key === 'backspace' && typed.length > 0) typed=typed.slice(0, typed.length-1);
        if (key !== 'backspace') typed+=key;
        let searchBuffer = document.querySelector('#search');
        searchBuffer.classList = [];
        searchBuffer.textContent = typed;
        filterBy(typed);
    });
    function filterBy(name) {
        let profiles = [].slice.call(document.querySelectorAll('.name'))
          .filter(e =>e.textContent.toLowerCase().includes(typed))
          .map(e => e.parentElement.id);
        [].slice.call(document.querySelectorAll('a')).forEach(e => {
            if (profiles.includes(e.id)) e.style.display = '';
            else e.style.display = 'none';
        });

    }
}());
