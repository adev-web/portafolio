function CreateSection() {
    //creacion de elementos
    const svg_codes = [
        {
            svg: '/src/img/icon-html.png',
            tecnologia: 'HTML',
        },
        {
            svg: '/src/img/icon-css.png',
            tecnologia: 'CSS',
        },
        {
            svg: '/src/img/icon-js.png',
            tecnologia: 'JS',
        },
        {
            svg: '/src/img/icon-sql.png',
            tecnologia: 'SQL', 
        },
        {
            svg: '/src/img/icon-java.png',
            tecnologia: 'Java', 
        },
        {
            svg: '/src/img/icon-git.png',
            tecnologia: 'git', 
        },
    ];
    const root = document.getElementById('#root');
    const section = document.createElement('SECTION');
    const tittle = document.createElement('H2');
    const div_Father = document.createElement('DIV');

    svg_codes.forEach(svg_code => {
        const articule = document.createElement('ARTICULE');
        const div_Son = document.createElement('DIV');
        const img_svg = document.createElement('IMG');
        const paragraph = document.createElement('H3');
        //asignacion de contenido y classes
        articule.classList.add('tecnologia');
        div_Son.classList.add('tecnologia__icono', 'shadow');
        img_svg.setAttribute('src', svg_code.svg);
        paragraph.innerText = svg_code.tecnologia;
        //activacion de herencia
        div_Son.appendChild(img_svg);
        articule.appendChild(div_Son);
        articule.appendChild(paragraph);
        div_Father.appendChild(articule);

    });
    //asignacion de contenido
    section.classList.add('tecnology');
    section.setAttribute('id', 'tecnology');
    tittle.classList.add('tecnology__titulo');
    tittle.innerText = 'Conocimientos en:';
    div_Father.classList.add('tecnology__tecnologia');
    //herencia de elementos
    section.appendChild(tittle);
    section.appendChild(div_Father);
    root.appendChild(section);
    document.body.append(root);
}
CreateSection();