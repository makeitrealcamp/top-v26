## Creación de objetos Javascript
Escribe una función que tome dos arreglos (a y b) como argumentos.
Crear un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'. Devolver el objeto.

```js
function myFunction(a, b) {

  return
}

```
| Test Case                                                                   | Expected |
|-----------------------------------------------------------------------------|----------|
| myFunction(['a','b','c'],[1,2,3])                                           | {a:1,b:2,c:3} |
| myFunction(['a','b','c'],[1,() => {}, {name: 'khriztian'}])                 | {a:1,b:() => {}, c:{name: 'khriztian'}} |
| myFunction(['name','hobbies','isAdmin'],['khriztian',['music', 'tv series'], false]) | {name:'khriztian', hobbies:['music', 'tv series'], isAdmin:false}|

## Acceso a las propiedades del objeto
Escribir una función que tome un objeto con dos propiedades y un string como argumentos.
Debe devolver el valor de la propiedad con clave igual al valor del string.

```js
function myFunction(obj, key) {

  return
}

```

| Test Case                                                                   | Expected |
|-----------------------------------------------------------------------------|----------|
| myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')           | 'Asia'   |
| myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')          | 'Sweden' |
| myFunction({  name: 'khriztian', 'fav-number': 33, age: 18 }, 'fav-number') | 33       |

## Comprobar si la propiedad existe en el objeto
Escriba una función que tome un objeto (a) y un string (b) como argumento. Devuelva `true` si el objeto tiene una propiedad con la clave 'b'. Devuelva `false` de lo contrario.

```js
function myFunction(a, b) {

  return
}

```

| Test Case                                 | Expected |
|-------------------------------------------|----------|
| myFunction({a:1,b:2,c:3},'b')             | `true`   |
| myFunction({x:'a',y:'b',z:'c'},'a')       | `false`  |
| myFunction({x:'a',y:'b',z:undefined},'z') | `false`  |
