## Combinar dos objetos con claves iguales
Escribir una función que tome dos objetos como argumentos. Devuelve un objeto con las propiedades de ambos objetos. Si ambos objetos tienen propiedades con la misma clave, la propiedad del objeto devuelto debe tener el valor de la propiedad del primer objeto.

```js
function myFunction(objX, objY) {

  return
}

```

| Test Case                                | Expected   |
|------------------------------------------|------------|
| myFunction({a:1,b:2,c:3},{d:4,b:5,e:6})  | {a:1,b:2,c:3,d:4,e:6}  |
| myFunction({a:1,b:2,c:3},{a:4,d:5,e:6})  | {a:1,b:2,d:5,e:6}  |
| myFunction({a:1,b:2,c:3},{d:4,b:5,c:6})  | {a:1,b:2,c:3,d:4}  |

## Eliminar una propiedad de un objeto
Escribir una función que tome un objeto y un string como argumentos. Eliminar la propiedad del objeto con clave igual al string.

```js
function myFunction(obj, key) {

  return
}

```

| Test Case                      | Expected   |
|--------------------------------|------------|
| myFunction({a:1,b:2,c:3},'b')  | {a:1,c:3}  |
| myFunction({a:1,b:2,c:3},'a')  | {b:2,c:3}  |
| myFunction({a:1,b:2,c:3},'c')  | {a:1,b:2}  |

## Sumar valores de objeto
Escribir una función que tome un objeto como argumento. Devuelve la suma de todos los valores de las propiedades del objeto.

```js
function myFunction(obj) {

  return
}

```

| Test Case                      | Expected   |
|--------------------------------|------------|
| myFunction({a:1,b:2,c:3})      | 6          |
| myFunction({j:9,i:2,x:3,z:4})  | 18         |
| myFunction({w:15,x:22,y:13})   | 50         |

## Devolver propiedad de objeto anidado
Escribir una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas.
Devuelve el valor de la propiedad 'b' del objeto 'a' dentro del objeto original si existe, si no, devuelve `undefined`.

```js
function myFunction(obj) {

  return
}

```
| Test Case                  | Expected   |
|----------------------------|------------|
| myFunction({a:1})          | `undefined`|
| myFunction({a:{b:{c:3}}})  | {c:3}      |
| myFunction({b:{a:1}})      | `undefined`|
| myFunction({a:{b:2}})      | 2          |

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
