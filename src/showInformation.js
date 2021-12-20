export function logOnLoad(){
    const [ bodyElement ] = document.getElementsByTagName('body');
    const greetingElement = document.createElement('div');
    greetingElement.textContent = 'this is from other bundle of code to be included';
    bodyElement.appendChild(greetingElement);
};