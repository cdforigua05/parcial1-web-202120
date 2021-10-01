# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Documentación endpoint

Se utilizo la raíz del enpoint api para hacer el llamado. Por lo anterior, el endpoint del servicio creado está vínculado a la siguiente url:
```
   http://localhost:3000/api?input=139
```
Donde el valor de input es la altura que se quiere buscar. Esto retornará un JSON con la información de las parejas con el siguiente formato:
```
   {"parejas":[{"index":1,"first_player":"Brevin Knight","second_player":"Nate Robinson"},{"index":2,"first_player":"Nate Robinson","second_player":"Mike Wilks"}]}
```
