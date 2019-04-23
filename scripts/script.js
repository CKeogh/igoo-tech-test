const formSelect = document.querySelectorAll('.formSelect');

function validateForm(event) {

    const elementClasses = [...event.target.classList];

    if (elementClasses.includes('inactive')) {
        event.preventDefault();
        [...formSelect]
            .filter(element => {
                return ![...element.classList].includes('inactive')
            })
            .forEach(element => {
                if (!element.value) {
                    const required = getSibling(element, 'required')
                    required.style.visibility = 'visible';
                    element.style.border = '2px solid #d0021b'
                }
            })
    }
}

function handleSelect(event) {
    console.dir(event.target)
    if (event.target.value) {
        const element = event.target;
        element.style.border = 'none';
        const required = getSibling(element, 'required')
        required.style.visibility = 'hidden';
        const parent = event.target.parentElement;
        const nextSelect = parent.nextElementSibling;
        nextSelect.children[0].classList.remove('inactive');
        nextSelect.children[2].classList.remove('inactive');
    }
}

function getSibling(element, sibClass) {
    const parent = element.parentElement;
    return [...parent.children].filter(child => {
        return [...child.classList].includes(sibClass)
    })[0];
}

formSelect.forEach(element => {
    element.addEventListener('mousedown', validateForm)
    element.addEventListener('click', handleSelect)
})
