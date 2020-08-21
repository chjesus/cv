import './scss/style.scss';

import SmoothScroll from 'smooth-scroll';

import currencyConverter from './img/currency-converter.png';
import developomentWeb from './img/Development-Web.png';
import landingPage from './img/Landing-Page.png';
import pongAtari from './img/Pong-Atari.png';
import gameRockPagerScissors from './img/Rock-Paper-and-Scissors.png';
import searchUserGithub from './img/search-user-github.png';
import simonSays from './img/Simon-Says.png';
import badges from './img/user-badges.png';
import theMovie from './img/the-movie.png';
import cryptoPrices from './img/crypto-prices.png';

/**
 *  if you want to use bootstrap styles
 *  copy @import '~bootstrap/scss/bootstrap'; in style.scss
 */

/**
 * import multiple js files
 *
 * import { nameFunction } from "./name.js"
 */

/**
 * if you want to use bootstrap
 *
 * import 'bootstrap';
 */

/**
  * if you want to use jquery
  *
  * import $ from 'jquery';
  */
(async function () {
  const $title = Array.prototype.slice.apply(
    document.getElementsByClassName('title'),
  );
  // const $wrapper = document.getElementById('wrapper');
  const skillBars = document.querySelectorAll('.skill--bar');
  const $menuItems = document.querySelectorAll('.nav--a');
  const $btnCheck = document.querySelector('.navigation--check');
  const speedAnimation = 70;

  let validationLetter = false;

  window.onload = () => {
    setTimeout(() => $title.forEach(animationInit), 500);
  };
  const coursesTemplate = (courses) => {
    const template = `<div class="courses">
                        <div class="courses--image"><img src="${courses.badge}" alt="${courses.title}" /></div>
                        <div>
                          <h3 class="courses--title">${courses.title}</h3>
                          <h3 class="badge--sub__title">Link Certificate <a href="https://platzi.com${courses.diploma_link}" target="_blank">Click Here</a></h3>
                        </div>
                     </div>`;
    return template;
  };

  const noCareersContainerTemplate = (noCareers) => {
    const template = `<div class="careers__container" data-careers="${noCareers.title}">
                        <div class="badge">
                            <div class="badge--image"><img src="${noCareers.badge}" alt="${noCareers.title}" /></div>
                            <div>
                              <h3 class="badge--title">${noCareers.title}</h3>
                              <h3 class="badge--sub__title">Link Certificate <a href="https://platzi.com${noCareers.diploma_link}" target="_blank">Click Here</a></h3>
                            </div>
                        </div>
                      </div>`;
    return template;
  };

  const careersContainerTemplate = (careers) => {
    const template = `<div class="careers__container" data-careers="${careers.title}">
                        <div class="badge">
                          <div class="badge--image"><img src="${careers.golden_achievement}" alt="${careers.title}" /></div>
                          <div>
                            <h3 class="badge--title">${careers.title}</h3>
                            <h3 class="badge--sub__title">Link Certificate <a href="https://platzi.com${careers.diploma_link}" target="_blank">Click Here</a></h3>
                          </div>
                          <i class="icon icon-plus"></i>
                        </div>
                      </div>`;

    return template;
  };

  const certificateContainer = (date) => {
    const $certificate = document.getElementById('certificates');
    const careersArray = [];

    date.careers.forEach((careers) => {
      const stringHTML = careersContainerTemplate(careers);
      const html = document.implementation.createHTMLDocument();
      careersArray.push(careers.title);
      html.body.innerHTML = stringHTML;
      $certificate.appendChild(html.body.firstChild);
    });
    const $careersContainer = document.querySelectorAll('.careers__container');
    $careersContainer.forEach((careers) => {
      const stringHTML = '<div class="courses__container"></div>';
      const html = document.implementation.createHTMLDocument();
      html.body.innerHTML = stringHTML;
      careers.appendChild(html.body.firstChild);
      const $coursesContainer = careers.querySelector('.courses__container');
      date.courses.forEach((courses) => {
        if (courses.career === careers.dataset.careers) {
          const stringAux = coursesTemplate(courses);
          const htmlAux = document.implementation.createHTMLDocument();
          htmlAux.body.innerHTML = stringAux;
          $coursesContainer.appendChild(htmlAux.body.firstChild);
        }
      });
    });
    date.courses.forEach((element) => {
      const value = careersArray.indexOf(element.career);
      if (value === -1) {
        const stringHTML = noCareersContainerTemplate(element);
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = stringHTML;
        $certificate.appendChild(html.body.firstChild);
      }
    });
  };
  const projectsTemplate = (projects) => {
    const newString = projects.name.replace('-', ' ').split('-').join(' ');

    const template = `<div class="proyectos">
                        <div class="proyectos--img">
                          <img src="img/${projects.name}.png" alt="" />
                        </div>
                        <div>
                          <h3 class="proyectos--title">
                            ${newString}.
                            <a href="${projects.homepage}" target="_blank"
                              >Click Here</a
                            >
                          </h3>
                          <h4 class="proyectos--subtitle">${projects.description}</h4>
                        </div>
                      </div>`;

    return template;
  };

  const projectsRepos = (date) => {
    const containerRepo = document.getElementById('proyectos--container');

    date.forEach((element) => {
      if (element.homepage && !element.fork) {
        // console.log(element);
        const stringHTML = projectsTemplate(element);
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = stringHTML;
        containerRepo.appendChild(html.body.firstChild);
      }
    });
  };

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    speedAsDuration: true,
    easing: 'easeInOutQuad',
  });

  window.addEventListener('scroll', () => {
    skillBars.forEach((element) => {
      const skillALt = window.scrollY + window.innerHeight - element.clientHeight;
      const isScroll = skillALt > element.offsetTop;
      if (isScroll) {
        element.style.width = `${element.dataset.width}%`;
        const child = element.querySelector('.info');
        child.textContent = `${element.dataset.width}%`;
      } else {
        element.style.width = '20%';
      }
    });
  });

  const badgeClicks = () => {
    const $badgeItems = document.querySelectorAll('.icon');

    $badgeItems.forEach(($element, index) => {
      $element.addEventListener('click', () => {
        const $nextElement = document.querySelectorAll('.courses__container');

        if ($nextElement[index].style.maxHeight) {
          $element.classList.remove('icon-minus');
          $element.classList.add('icon-plus');
          $nextElement[index].style.maxHeight = null;
        } else {
          $element.classList.remove('icon-plus');
          $element.classList.add('icon-minus');
          $nextElement[
            index
          ].style.maxHeight = `${$nextElement[index].scrollHeight}px`;
        }
      });
    });
  };

  $menuItems.forEach(($element) => {
    $element.addEventListener('click', () => {
      $btnCheck.checked = 0;
    });
  });

  const animationConstruir = ($element, text) => {
    const arrayWord = ['Front-End Developer', 'Javascript Developer'];
    const textLength = text.length;
    const word = text;
    let cont = 0;

    const textInit = setInterval(() => {
      if (textLength > cont - 1) {
        const showWord = word.slice(0, cont);
        cont += 1;
        $element.textContent = textLength > cont - 1 ? `${showWord}|` : showWord;
      } else {
        clearInterval(textInit);
        if (text === 'Independent: ') {
          const $addSpan = document.createElement('span');
          $addSpan.classList.add('title--animation');
          $addSpan.setAttribute('id', 'title--animation');
          $element.appendChild($addSpan);
          const $spanTitle = document.getElementById('title--animation');
          animationConstruir($spanTitle, arrayWord[0]);
        }
        if (text === arrayWord[0] || text === arrayWord[1]) {
          const position = validationLetter ? 0 : 1;
          setTimeout(
            () => animationDelete($element, arrayWord[position]),
            1500,
          );
        }
      }
    }, speedAnimation);
  };

  const animationDelete = ($element, text) => {
    let textLength = $element.textContent.length;

    const deleteInit = setInterval(() => {
      if (textLength >= 0) {
        const word = $element.textContent;
        const showWord = word.slice(0, textLength);
        textLength -= 1;
        $element.textContent = `${showWord}|`;
      } else {
        clearInterval(deleteInit);
        validationLetter = !validationLetter;
        setTimeout(() => animationConstruir($element, text), 1000);
      }
    }, speedAnimation);
  };

  const animationInit = (element, index) => {
    setTimeout(
      () => animationConstruir(element, element.dataset.name),
      1000 * index,
    );
  };

  async function getDate(url) {
    const date = await fetch(url);
    const user = await date.json();

    return user;
  }

  const date = await getDate(
    'https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@chjesus',
  );

  const dateRepo = await getDate('https://api.github.com/users/chjesus/repos?per_page=400');

  // console.log(dateRepo.length);

  certificateContainer(date.userData);

  badgeClicks();

  projectsRepos(dateRepo);
}());
