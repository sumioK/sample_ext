import { HELLO_STR } from "./const";

const body = document.querySelector('body');
const helloContent = document.createElement('div');
helloContent.className = 'hello-content';
helloContent.innerHTML = `${HELLO_STR} content scripts`;
if (body) {
  body.appendChild(helloContent);
}