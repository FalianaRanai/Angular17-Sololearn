import { Renderer2 } from '@angular/core';

export const closeModalButton = (renderer: Renderer2) => {
  const btnCloseElements = document.querySelectorAll('.btn-close');
  btnCloseElements.forEach((btnClose) => {
    renderer.selectRootElement(btnClose).click();
  });
};
