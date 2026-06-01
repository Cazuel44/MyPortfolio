# Rodrigo Portfolio

Portfolio frontend desarrollado con Next.js 15 inspirado visualmente en el universo de Naruto.  
Construido con arquitectura escalable orientada a componentes, separación de responsabilidades y tipado fuerte con TypeScript.

---

# Tecnologías utilizadas

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Fetch API
- React Icons

---

# Arquitectura aplicada

## Services Layer

La lógica de consumo de API se centraliza en `narutoApi.ts`.  
Cada función tiene una responsabilidad específica:

- `getNarutoCharacterById` — retorna data resumida para cards y carrusel.
- `getNarutoCharacterDetailById` — retorna data completa para la vista de detalle.

Esto evita overfetching y mantiene la UI desacoplada de la lógica de negocio.

---

## Type Safety con TypeScript

Se implementó tipado fuerte mediante archivos centralizados en `/types`.

El proyecto utiliza distintos modelos de datos dependiendo del contexto de uso:

- `CharacterCardProps`
- `CharacterDetailCardProps`
- `ContactRequestBody`
- `iconicCharactersArray`

Esto permite:

- evitar inconsistencias de datos
- mejorar autocomplete
- reducir errores en tiempo de desarrollo
- documentar implícitamente la estructura de la aplicación

### Tipados combinados y composición de tipos

El proyecto también utiliza composición de tipos para extender modelos reutilizables sin duplicar estructuras.

Ejemplo:

```ts
export type NarutoCharacterDetailProps = CharacterDetailCardProps & {
    gif?: string;
};
```

### Manejo defensivo de datos opcionales

La API externa no garantiza que todos los personajes tengan la misma estructura de datos.
Por esta razón se utilizan propiedades opcionales (`?`) en múltiples tipos:

```ts
images?: string[];
clan?: string | string[];
```

## Buenas prácticas aplicadas
- Separación de responsabilidades
- Services desacoplados
- Tipado fuerte
- Manejo defensivo de datos opcionales
- Componentes reutilizables
- Arquitectura escalable
- Modelo híbrido Server/Client Components
- UI desacoplada de la data
- Sin overfetching
- Controlled Components
- Estandarización visual
- Configuración externa de contenido

## Sistema de contacto

El portfolio incluye un formulario funcional de contacto implementado con:

- API Routes de Next.js
- Nodemailer
- Variables de entorno (.env.local)
- Formularios controlados con React
- Tipado compartido cliente/servidor mediante TypeScript

El envío de correos se realiza desde el servidor para mantener seguras las credenciales SMTP.

---

## Server & Client Components

El proyecto utiliza el modelo híbrido de rendering de Next.js 15.

### Server Components

Las páginas principales realizan fetch de datos directamente en el servidor:

- `AboutMePage`
- `NarutoDetailPage`

Esto reduce JavaScript enviado al cliente y mejora rendimiento.

### Client Components

Los componentes interactivos utilizan `"use client"`:

- `NarutoCarrousel`
- `ContactForm`
- `ContactModal`

Estos manejan estado local e interacciones mediante hooks de React.

---

## Protección anti-spam

El formulario de contacto implementa múltiples capas de protección:

- Honeypot invisible anti-bots
- Rate limiting mediante Upstash Redis
- Validación de campos en servidor
- Variables de entorno protegidas
- Envío seguro mediante Nodemailer

Esto reduce spam automatizado y abuso del endpoint de contacto.


