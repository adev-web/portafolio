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
            icono: 'https://cdn-icons-png.flaticon.com/512/733/733609.png',
            href: 'https://github.com/adev-web'
        },
        {
            icono: 'https://cdn-icons-png.flaticon.com/512/1384/1384046.png',
            href: 'https://www.linkedin.com/in/alessandro-olivares-726997204/'
        },
        {
            icono: 'https://cdn-icons-png.flaticon.com/512/1384/1384015.png',
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