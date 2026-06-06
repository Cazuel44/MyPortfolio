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
            "Refactorización de la página Home eliminando accesos no requeridos.",
            "Integración de BetterAuth para autenticación de usuarios.",
            "Adaptación de servicios existentes al flujo de autenticación.",
            "Creación de Provider global para manejo de sesión.",
            "Implementación de rutas protegidas para nuevas vistas.",
            "Modificación del Sidebar para incorporar nuevas secciones.",
            "Creación de vistas protegidas para Users, Professionals y Services.",
            "Desarrollo del componente UserList con búsqueda y filtrado.",
            "Refactorización de DataList para soportar múltiples entidades.",
            "Implementación de formularios modales para creación de usuarios.",
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
        keyLearning: "Aprendí a integrar sistemas de autenticación modernos utilizando TypeScript y a trabajar sobre una base de código existente dentro de un equipo."
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
            "Implementación de patrones de diseño orientados a la reutilización de lógica de acceso a datos.",
            "Uso de TypeScript Generics para construir una capa de abstracción agnóstica a tablas.",
            "Integración con schemas compartidos para validación y tipado de entidades.",
            "Ejecución de scripts SQL en PostgreSQL para mantenimiento y actualización de datos.",
            "Ejecución de modificaciones de datos en base de datos mediante DBeaver.",
            "Actualización controlada de registros como nombres, correos electrónicos, direcciones y teléfonos.",
            "Aplicación de buenas prácticas de arquitectura backend separando lógica de acceso a datos.",
            "Validación de consistencia de datos luego de ejecución de scripts SQL."
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
];