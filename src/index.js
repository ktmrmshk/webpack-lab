
function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then( ({default: _}) => {
   
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    return element;
  });
}

getComponent().then(component =>{
  document.body.appendChild(component());
});

