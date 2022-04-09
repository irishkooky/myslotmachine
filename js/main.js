'use strict';
{
  class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;
      this.spinStop = document.createElement('div');
      this.spinStop.textContent = 'もういちどふる';
      this.spinStop.setAttribute('id', 'spin');
      this.spinStop.addEventListener('click', () => {
        if (this.spinStop.classList.contains('inactive')) {
          clearTimeout(this.timeoutId);
          this.spinStop.classList.remove('inactive');
          this.spinStop.textContent = 'もういちどふる';
          return;
        }
        this.spinStop.classList.add('inactive');
        this.spin();
        this.spinStop.textContent = 'ストップ';
      });

      this.drawCard = document.createElement('div');
      this.drawCard.setAttribute('id', 'draw-card');
      this.drawCard.textContent = 'カードをひく';

      section.appendChild(this.img);
      section.appendChild(this.spinStop);
      section.appendChild(this.drawCard);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    getRandomImage() {
      const images = [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }
    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 100);
    }
  }
  new Panel();
}