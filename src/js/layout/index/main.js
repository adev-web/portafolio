function CreateSoonTecnologys() {
    const soonTecnologys = [
        {
            logo: '/src/img/icon-node.png',
            tecnologia: 'node js'
        },
        {
            logo: '/src/img/icon-php.png',
            tecnologia: 'php'
        },
        {
            logo: '/src/img/icon-react.png',
            tecnologia: 'react'
        },

    ]
    const root = document.getElementById('#root');
    const main = document.createElement('MAIN');
    const tittle = document.createElement('H2');
    const div_father = document.createElement('DIV');



    tittle.innerText = 'nuevos temas por aprender';
    tittle.classList.add('tecnology__titulo')
    div_father.classList.add('tecnology__tecnologia');

    soonTecnologys.forEach(dato => {
        const articule = document.createElement('ARTICULE');
        const div_son = document.createElement('DIV');
        const h3 = document.createElement('H3');
        //const picture = document.createElement('PICTURE');
        const img = document.createElement('IMG');
        articule.classList.add('tecnologia');
        div_son.classList.add('tecnologia__icono');
        div_son.classList.add('shadow');
        h3.innerText = dato.tecnologia;
        img.setAttribute('src', dato.logo);
        //picture.appendChild(img);
        //div_son.appendChild(picture);
        div_son.appendChild(img);
        articule.appendChild(div_son);
        articule.appendChild(h3);
        div_father.appendChild(articule);
    });
    main.classList.add('tecnology');
    main.setAttribute('id', 'tecnology_2');
    main.appendChild(tittle);
    main.appendChild(div_father);
    root.appendChild(main);
    document.body.append(root);
}
CreateSoonTecnologys();