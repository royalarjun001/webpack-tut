export function greetOnLoad(){
    const [ bodyElement ] = document.getElementsByTagName('body');
    const greetingElement = document.createElement('div');
    greetingElement.textContent = 'Hi welcome to Webpack dev practices setup';
    bodyElement.appendChild(greetingElement);
};