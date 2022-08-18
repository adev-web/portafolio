
function createHeader() {
    const root = document.getElementById('#root');
    const header = document.createElement('HEADER');
    const tittle1 = document.createElement('H1');
    tittle1.innerText = 'portafolio web';
    tittle1.classList.add('nav-titulo')
    root.appendChild(header);
    header.appendChild(tittle1);
    document.body.append(root);
}
function createNav() {
    const navDatos = [
        {
            href: 'index.html',
            tittle: 'Inicio',
            class: ['nav-list__item', 'boton']
        },
        {
            href: '#tecnologys',
            tittle: 'Tecnologías',
            class: ['nav-list__item', 'boton']
        },
        {
            href: '#proyects',
            tittle: 'Proyectos',
            class: ['nav-list__item', 'boton']
        }
    ];
    const root = document.getElementById('#root');
    const div_Father = document.createElement('DIV');
    div_Father.classList.add('nav-list');
    navDatos.forEach(dato => {
        const div_Son = document.createElement('DIV');
        dato.class.forEach(dato_class => {
            div_Son.classList.add(dato_class);
        });
        const link = document.createElement('A');
        link.setAttribute("href", dato.href);
        const tittle = document.createElement('H3');
        tittle.innerText = dato.tittle;

        link.appendChild(tittle);
        div_Son.appendChild(link);
        div_Father.appendChild(div_Son);
        root.appendChild(div_Father);
        document.body.append(root);
    });
}
createHeader();
createNav();