# CollabData - Plataforma Colaborativa de Ingeniería de Datos

Esta es una aplicación Next.js construida con Firebase Studio. Es una plataforma diseñada para que equipos de datos colaboren en ingeniería y análisis de datos.

## 📝 Descripción del Proyecto

CollabData es una plataforma web que permite a los usuarios gestionar proyectos de análisis de datos, cargar conjuntos de datos (datasets), ejecutar análisis automatizados y visualizar los resultados. La aplicación está diseñada con un enfoque en la colaboración en tiempo real y la eficiencia del flujo de trabajo.

## 🔑 Características Principales

- **🔐 Autenticación de Usuarios:** Sistema completo de inicio de sesión, registro y autenticación social usando Google y GitHub.
- **📊 Panel de Control (Dashboard):** Un panel central para ver, buscar, filtrar y gestionar todos los proyectos de análisis.
- **✨ Creación de Nuevos Análisis:** Un flujo guiado para crear nuevos proyectos de análisis, configurar herramientas y cargar conjuntos de datos.
- **📈 Visualización de Resultados:** Paneles de resultados dinámicos con KPIs, gráficos, tablas de estadísticas descriptivas e insights generados por IA.
- **💻 Espacio de Trabajo Interactivo:** Un entorno similar a un IDE para explorar archivos de datos.
- **👤 Gestión de Perfil:** Página de ajustes para que los usuarios actualicen su información personal y gestionen su cuenta.
- **🤖 Integración de IA:** Utiliza Genkit para proporcionar sugerencias de análisis inteligentes basadas en las descripciones de los datasets.

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/)
- **Biblioteca UI:** [React](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Backend y Autenticación:** [Firebase](https://firebase.google.com/) (Authentication, Firestore)
- **IA Generativa:** [Genkit](https://firebase.google.com/docs/genkit) (Google AI)

## 🚀 Cómo Empezar

Sigue estos pasos para poner en marcha el entorno de desarrollo.

### Prerrequisitos

- Node.js (v18 o superior)
- npm

### Instalación y Ejecución

1.  Instala las dependencias del proyecto:
    ```sh
    npm install
    ```
2.  Inicia el servidor de desarrollo:
    ```sh
    npm run dev
    ```
3.  Abre [http://localhost:9002](http://localhost:9002) en tu navegador para ver la aplicación.

## 📁 Estructura del Proyecto

Aquí tienes una descripción general de los archivos y directorios más importantes del proyecto:

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Layout raíz de la aplicación
│   │   ├── page.tsx              # Landing Page
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
│   │   └── ui/                   # Componentes UI reutilizables (ShadCN)
│   │
│   ├── firebase/
│   │   ├── config.ts             # Configuración de Firebase
│   │   ├── index.ts              # Inicialización y exportación de servicios Firebase
│   │   ├── provider.tsx          # Proveedor de contexto Firebase
│   │   └── auth/use-user.tsx     # Hook para obtener el usuario autenticado
│   │
│   ├── ai/
│   │   ├── genkit.ts             # Inicialización de Genkit
│   │   └── flows/                # Flujos de IA con Genkit
│   │
│   ├── hooks/
│   │   └── use-project-store.ts  # Hook para la gestión del estado del proyecto
│   │
│   └── lib/
│       ├── utils.ts              # Funciones de utilidad
│       ├── mock-data.ts          # Datos de ejemplo para la aplicación
│       └── types.ts              # Definiciones de tipos TypeScript
│
├── public/                     # Archivos estáticos
├── package.json                # Dependencias y scripts del proyecto
└── tailwind.config.ts          # Configuración de Tailwind CSS
```
