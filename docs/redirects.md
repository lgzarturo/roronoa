# Redirects

Estos redirects se configuran en el archivo `next.config.js`, se definen por medio de una función asíncrona que se debe llamar `redirects`, dentro del objeto `nextConfig`.

```javascript
async redirects() {
return [
    {
        source: '/',
        has: [
            {
            type: 'host',
            value: 'www.visitapormexico.com',
            },
        ],
        destination: '/visitapormexico',
        permanent: true,
    },
    {
        source: '/contact',
        destination: 'https://twitter.com/lgzarturo',
        permanent: true,
    },
]
},
```

> También dentro de la documentación de Nextjs, veo que se puede hacer uso de un proxy para redefinir las rutas el cual se llama rewrites. Aún que solo entiendo que solo funciona con rutas internas de la aplicación.

Al principio intente probar especificando los parámetros de :path y de :slug, pero vi que el navegando hacia muchas re direcciones hasta que marcaba error, al final me di cuenta que Nextjs pasa los path variables sin problema.

## Documentación

- [Configuración de Redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects)
- [Uso de Rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites)
- [Documentación sobre Routing](https://nextjs.org/docs/routing/introduction)
- [Re direcciones a nivel dominio, dentro de vercel](https://vercel.com/guides/does-vercel-support-permanent-redirects)
