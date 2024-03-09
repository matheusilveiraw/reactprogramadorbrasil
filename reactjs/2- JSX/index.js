const root = document.querySelector('#root');

const element = React.createElement("h1", {id: "Titulo principal"}, "Hello World" );

const t2 = React.createElement("h4", {id: "Complementar"}, "Subtitulo" );

const headLine = React.createElement("div", null, element, t2);

ReactDOM.render(headLine, root);