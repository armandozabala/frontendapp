# MELI Test React - frontendapp


## Tecnologías

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>


1. React
2. Webpack
3. Sass
4. Html
5. Ts

Se realizo la configuracion base de la aplicacion React con TS en webpack, se usaron los manejadores correspondientes para archivos, ts, tsx, css, scss, html

La app frontend corre en el puerto 3000 esto se puede configurar o cambiar en el archivo de webpack.config.js, en la seccion de devServer

````
  "scripts": {
    "test": "jest --coverage=true",
    "test:watch": "jest --watch",
    "start:webpack": "webpack serve --open",
    "start": "nodemon index.js"
  },
````

### Unit Test

Para los Unit Test se uso Jest Enzyme, configurado en el package.jsony las respectivas configuraciones sobre React.

cada componente dentro de la aplicacion tiene su archivo de unit test, tambien se puede ver el reporte en /coverage/lcov-report/index.html


### SEO Helmet

Se aplico la metadata en las pagina principales, de home, busqueda y detalles de productos.


### Estructura

Se construyo  los componentes de la app bajo el modelo de Atomic Design

[![estructura.png](https://i.postimg.cc/7hGbN3DW/estructura.png)](https://postimg.cc/hQnSD7XL)



