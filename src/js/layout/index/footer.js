function createFooter() {
  const root = document.getElementById('#root');
  const footer = document.createElement('FOOTER');
  const div = document.createElement('DIV');
  const tittle = document.createElement('H4');
  footer.classList.add('footer');
  footer.setAttribute('id', 'footer');
  tittle.innerText = 'derechos reservados a alessandro olivares freelancer 2021';
  footer.appendChild(div);
  div.appendChild(tittle);
  root.appendChild(footer);
  document.body.append(root);
}
function addRedes() {
  const Datos = [
    {
      icono: '/src/img/logo-github.png',
      href: 'https://github.com/adev-web'
    },
    {
      icono: '/src/img/logo-linkedin.png',
      href: 'https://www.linkedin.com/in/alessandro-olivares-726997204/'
    },
    {
      icono: '/src/img/logo-instagram.png',
      href: 'https://www.instagram.com/x.ajov19/'
    }
  ]
  const root = document.getElementById('#root');
  const footer = document.getElementById('footer');
  const div = document.createElement('DIV');
  div.classList.add('footer_links');
  Datos.forEach(dato => {
    const link = document.createElement('A');
    const picture = document.createElement('PICTURE');
    const img = document.createElement('IMG');
    link.setAttribute('href', dato.href);
    img.setAttribute('src', dato.icono);
    div.appendChild(link);
    link.appendChild(picture);
    picture.appendChild(img);
  });
  footer.appendChild(div);
  root.appendChild(footer);
  document.body.append(root);
}


createFooter();
addRedes();