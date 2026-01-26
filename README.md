# CollabData - Plataforma Colaborativa de Ingeniería de Datos

Esta es una aplicación de Next.js creada con Firebase Studio. Es una plataforma diseñada para que los equipos de datos colaboren en la ingeniería y análisis de datos.

## Descripción del Proyecto

CollabData es una plataforma web que permite a los usuarios gestionar proyectos de análisis de datos, subir datasets, ejecutar análisis automatizados y visualizar los resultados. La aplicación está construida con un enfoque en la colaboración en tiempo real y la eficiencia del flujo de trabajo.

## Características Clave

*   **Autenticación de Usuarios:** Sistema completo de inicio de sesión, registro y autenticación social con Google y GitHub.
*   **Dashboard de Proyectos:** Un panel central para ver, buscar, filtrar y gestionar todos los proyectos de análisis.
*   **Creación de Nuevos Análisis:** Un flujo de trabajo guiado para crear nuevos proyectos de análisis, configurar herramientas y subir datasets.
*   **Visualización de Resultados:** Paneles de resultados dinámicos con KPIs, gráficos, tablas de estadísticas descriptivas y perspectivas generadas por IA.
*   **Espacio de Trabajo Interactivo:** Un espacio de trabajo para explorar archivos de datos en un entorno similar a un IDE.
*   **Gestión de Perfil:** Página de configuración para que los usuarios actualicen sus datos personales y gestionen su cuenta.
*   **Integración con IA:** Utiliza Genkit para proporcionar sugerencias de análisis inteligentes basadas en la descripción del dataset.

## Estructura del Proyecto

A continuación se describe la estructura de los archivos y directorios más importantes del proyecto:

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Layout raíz de la aplicación
│   │   ├── page.tsx              # Página de inicio (Landing Page)
│   │   ├── login/page.tsx        # Página de autenticación
│   │   ├── dashboard/            # Rutas del panel de control
│   │   │   ├── page.tsx          # Vista principal del dashboard
│   │   │   ├── layout.tsx        # Layout para las páginas del dashboard
│   │   │   ├── new-analysis/page.tsx # Página para crear un nuevo análisis
│   │   │   └── ...
│   │   └── projects/[id]/        # Rutas para proyectos individuales
│   │       ├── page.tsx          # Espacio de trabajo del proyecto
│   │       └── results/page.tsx  # Página de resultados del análisis
│   │
│   ├── components/
│   │   ├── layout/               # Componentes de layout (header, footer)
│   │   ├── pages/                # Componentes específicos de cada página
│   │   └── ui/                   # Componentes de UI reutilizables (ShadCN)
│   │
│   ├── firebase/
│   │   ├── config.ts             # Configuración de Firebase
│   │   ├── index.ts              # Inicialización y exportación de servicios de Firebase
│   │   ├── provider.tsx          # Proveedor de contexto de Firebase
│   │   └── auth/use-user.tsx     # Hook para obtener el usuario autenticado
│   │
│   ├── ai/
│   │   ├── genkit.ts             # Inicialización de Genkit
│   │   └── flows/                # Flujos de IA con Genkit
│   │
│   ├── hooks/
│   │   └── use-project-store.ts  # Hook para la gestión del estado de los proyectos
│   │
│   └── lib/
│       ├── utils.ts              # Funciones de utilidad
│       ├── mock-data.ts          # Datos de ejemplo para la aplicación
│       └── types.ts              # Definiciones de tipos de TypeScript
│
├── public/                     # Archivos estáticos
├── package.json                # Dependencias y scripts del proyecto
└── tailwind.config.ts          # Configuración de Tailwind CSS
```
