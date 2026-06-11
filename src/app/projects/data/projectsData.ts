import { Project } from "@/types/projects";

export const projects: Project[] = [
    {
        slug: "exchango",

        title: "ExchanGo",

        shortDescription:
            "Panel administrativo para la gestión integral de una casa de cambio.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Material UI",
            "BetterAuth",
            "TanStack Query",
        ],

        images: [
            "/images/homeExchango.png",
            "/images/clientesExchango.png",
            "/images/sucursalesExchango.png",
            "/images/trasaccionesExchango.png",
            "/images/reportesExchango.png",
            "/images/divisasExchango.png",
        ],

        projectType: "Proyecto Colaborativo",

        role: "Frontend Developer (Colaborador)",

        team: "4 integrantes",

        challenge: "Integrar BetterAuth en una aplicación existente utilizando TypeScript, manteniendo sesiones mediante cookies y protegiendo rutas sin utilizar LocalStorage.",


        tasks: [
            "Refactorización de la página Home.",
            "Integración de BetterAuth para autenticación de usuarios.",
            "Adaptación de servicios existentes al flujo de autenticación.",
            "Creación de Provider global para manejo de sesión.",
            "Implementación de rutas protegidas para nuevas vistas.",
            "Modificación del Sidebar para incorporar nuevas secciones.",
            "Creación de vistas protegidas para Users, Professionals y Services.",
            "Desarrollo del componente UserList con búsqueda y filtrado.",
            "Refactorización de DataList para mostrar distintos tipos de información.",
            "Implementación de formularios modal para creación de usuarios.",
            "Implementación de actualización y eliminación de usuarios.",
            "Organización de la estructura de servicios y componentes.",
            "Creación de datos de prueba para visualización de Payments, Contracts, Users y Services.",
            "Implementación de listas reutilizables para distintas entidades.",
            "Implementación de TanStack Query para gestión de estado del servidor.",
            "Integración de API externa de tasas de cambio en tiempo real para visualización dinámica del valor de divisas.",
            "Desarrollo de hooks personalizados para consultas y mutaciones.",
            "Configuración de invalidación automática de caché tras operaciones CRUD.",
            "Integración de capa de servicios utilizando React Query para manejo de estado del servidor en distintas vistas del sistema.",
            "Optimización de actualización de datos mediante QueryClient.",
        ],
        keyLearning: "Fue mi primera experiencia colaborando en un proyecto real, trabajando sobre una base de código y un template. Aprendí a comprender código desarrollado por otros programadores, integrar autenticación, consumir APIs externas y desarrollar nuevas funcionalidades manteniendo la arquitectura."
    },
    {
        slug: "backend-repositorio-privado",

        title: "Arquitectura Backend para Proyecto Privado",

        shortDescription: "Colaboración técnica en proyecto privado desarrollando una capa de acceso a datos reutilizable para PostgreSQL.",

        images: ["/images/baserepository1.png",],

        projectType: "Colaboración Freelance",

        role: "Desarrollador Backend Freelance",

        team: "Equipo privado",

        technologies: [
            "TypeScript",
            "PostgreSQL",
            "DBeaver",
            "Repository Pattern",
            "Generics"
        ],

        challenge: "Diseñar una implementación genérica y reutilizable para acceso a datos, permitiendo trabajar con distintas tablas mediante tipado fuerte y evitando duplicación de lógica.",

        tasks: [
            "Diseño e implementación de una clase BaseRepository genérica utilizando TypeScript.",
            "Implementación de métodos Find y FindMany para consultas reutilizables y tipadas.",
            "Desarrollo de operaciones Update y Delete dentro de una arquitectura de repositorio.",
            "Creación de una clase base reutilizable para evitar duplicar lógica de acceso a datos.",
            "Uso de TypeScript Generics para reutilizar la misma lógica CRUD en diferentes tablas de la base de datos.",
            "Integración con schemas compartidos para validación y tipado de entidades.",
            "Ejecución de scripts SQL en PostgreSQL para mantenimiento y actualización de datos.",
            "Ejecución de modificaciones de datos en base de datos mediante DBeaver.",
            "Actualización controlada de registros como nombres, correos electrónicos, direcciones y teléfonos.",
            "Aplicación de buenas prácticas de arquitectura backend separando lógica de acceso a datos.",
        ],

        codeSections: [
            {
                title: "BaseRepository - Core Architecture",
                description: "Diseño de una clase genérica utilizando TypeScript Generics para abstraer el acceso a datos en PostgreSQL.",
                images: ["/images/baserepository1.png"]
            },
            {
                title: "BaseRepository - Read Layer",
                description: "Implementación de métodos find y findMany para consultas reutilizables y tipadas.",
                images: ["/images/baserepository2.png"]
            },
            {
                title: "BaseRepository - Write Layer",
                description: "Implementación de update y delete dentro del patrón Repository.",
                images: ["/images/baserepository3.png"]
            },
            {
                title: "CategoriesRepository - Data Fetching",
                description: "Consultas a categorías y subcategorías con relaciones usando Drizzle ORM.",
                images: ["/images/categorirepository1.png"]
            },
            {
                title: "CategoriesRepository - Domain Aggregation",
                description: "Transformación de datos con reduce y map para construir jerarquía de dominio.",
                images: ["/images/categorirepository2.png"]
            },
        ],
        keyLearning: "Fue mi primera experiencia trabajando con Repository Pattern, PostgreSQL, DBeaver y TypeScript Generics en un entorno profesional."
    },
    {
        slug: "backend-ecommerce",

        title: "Backend Ecommerce",

        shortDescription:"API REST para la gestión de usuarios, productos y carritos, desarrollada con Node.js, Express y MongoDB.",

        images: ["/images/backend1.png",],

        projectType: "Proyecto Académico",

        role: "Backend Developer",

        team: "Individual",

        technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Passport",
            "JWT",
            "Swagger",
            "Handlebars",
            "Nodemailer",
            "Multer",
            "Mocha",
            "Chai",
            "Supertest"
        ],

        challenge:
            "Desarrollar una API completa para ecommerce aplicando autenticación, persistencia de datos, documentación y una arquitectura organizada que permitiera escalar y mantener el proyecto de forma eficiente.",

        tasks: [
            "Desarrollo de API REST para gestión de usuarios, productos y carritos.",
            "Implementación de operaciones CRUD para distintas entidades.",
            "Modelado de datos utilizando MongoDB y Mongoose.",
            "Implementación de autenticación mediante Passport y JWT.",
            "Integración de inicio de sesión con GitHub OAuth.",
            "Protección de rutas mediante estrategias de autenticación.",
            "Implementación de manejo de cookies para sesiones autenticadas.",
            "Desarrollo de vistas dinámicas utilizando Handlebars.",
            "Integración de envío de correos electrónicos con Nodemailer.",
            "Implementación de carga de archivos utilizando Multer.",
            "Creación de documentación interactiva con Swagger.",
            "Implementación de Factory Pattern para persistencia configurable.",
            "Organización del proyecto utilizando arquitectura por capas.",
            "Desarrollo de pruebas automatizadas con Mocha, Chai y Supertest."
        ],

        codeSections: [
            {
                title: "Arquitectura por Capas",
                description:
                    "Organización del proyecto separando rutas, controladores, modelos, configuración y utilidades para mantener una estructura clara y escalable.",
                images: ["/images/backend2.png"]
            },
            {
                title: "Documentación de API con Swagger",
                description:
                    "Implementación de documentación interactiva para visualizar y probar los distintos endpoints de la aplicación desde el navegador.",
                images: ["/images/backend1.png"]
            },
            {
                title: "Autenticación con GitHub y JWT",
                description:
                    "Configuración de Passport para autenticación mediante GitHub OAuth y generación de tokens JWT para proteger rutas y validar usuarios.",
                images: ["/images/backend3.png"]
            },
            {
                title: "Factory Pattern para Persistencia",
                description:
                    "Implementación de una capa de persistencia configurable que permite utilizar MongoDB o almacenamiento en memoria sin modificar la lógica de negocio.",
                images: ["/images/backend4.png"]
            }
        ],

        keyLearning: "Este proyecto me permitió profundizar en el desarrollo backend con Node.js y Express. Aprendí a trabajar con autenticación mediante Passport y JWT, documentar APIs con Swagger, implementar patrones de diseño como Factory Pattern y estructurar aplicaciones siguiendo una arquitectura por capas."
    }
];