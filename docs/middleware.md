# Agregar un middleware

Solo es necesario crear un archivo con el nombre `middleware.(js|ts)` al mismo nivel de la carpeta `pages`.

En el ejemplo de este proyecto, se usa el header host que tiene el nombre del dominio que esta procesando el request.

```javascript
const hostname = request.headers.get('host')
```

Vi que nextjs hace varias re direcciones al momento de cargar, pero la primera siempre apunta al recurso solicitado.

Es por eso que puse una condicional para que aplique solo una vez la re dirección, de lo contrario cae en un ciclo infinito de re direcciones.

```javascript
const path = request.nextUrl.pathname
if (hostname === 'www.joobslot.com' && path === '/') {}
```

Después obtengo la url y le modifico la ruta para aplicar la re dirección.

```javascript
const url = request.nextUrl.clone()
url.pathname = '/joobslot/7lJg2VkDEQ'
return NextResponse.redirect(url)
```

> En este ejemplo puse los datos específicos, hay que ver que sean dinámicos para determinar la cuenta y el id de la página de aterrizaje.

El objeto nextUrl tiene las siguientes propiedades:

```javascript
URL {
  hash: '#about',
  host: 'hotel-domain.com:8080',
  hostname: 'hotel-domain.com',
  href: 'https://hotel-domain.com:8080/accounts?name=allritmocancun#about',
  origin: 'https://hotel-domain.com',
  password: '',
  pathname: '/accounts',
  port: '8080',
  protocol: 'https:',
  search: '?name=allritmocancun',
  searchParams: {
    name: 'allritmocancun'
  },
  username: ''
}
```

## Documentación

- [Sobre middleware](https://nextjs.org/docs/advanced-features/middleware)
- [Documentación sobre el objeto NextRequest](https://nextjs.org/docs/api-reference/next/server)
