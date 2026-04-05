# 📊 CollabData

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-App%20Hosting-FFCA28?style=flat&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Genkit](https://img.shields.io/badge/Google%20Genkit-AI%20Flows-4285F4?style=flat&logo=google&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat&logo=opensourceinitiative&logoColor=white)

> 🌐 **Live Demo:** [collabdata.vercel.app](https://collabdata.vercel.app)

---

## 🧠 Overview

**CollabData** es una plataforma web full-stack orientada a equipos de ingeniería y análisis de datos. Construida sobre el ecosistema **Next.js 15 con App Router** y respaldada por **Firebase** como infraestructura de backend, la aplicación permite a múltiples usuarios gestionar proyectos de análisis de datos, cargar conjuntos de datos, obtener visualizaciones de resultados y recibir sugerencias inteligentes generadas por modelos de IA a través de **Google Genkit**.

El proyecto combina una arquitectura moderna de frontend orientada a componentes (React + ShadCN UI + Tailwind CSS) con un backend serverless basado en Firebase Authentication y Firestore, y se despliega mediante **Firebase App Hosting** con integración de CI/CD a través de **GitHub Actions**. El entorno de desarrollo está configurado para trabajar con **Firebase Studio (Project IDX)**.

---

## ⚙️ Features

- **Autenticación social completa** mediante Firebase Authentication, con soporte para inicio de sesión con Google y GitHub, además de registro por email y contraseña.
- **Dashboard centralizado de proyectos** con capacidades de búsqueda, filtrado y gestión visual de todos los análisis del usuario.
- **Flujo guiado de creación de análisis** que permite definir configuración, seleccionar herramientas de procesamiento y cargar datasets paso a paso.
- **Espacio de trabajo interactivo por proyecto** con una interfaz similar a un IDE para explorar la estructura de archivos de datos cargados.
- **Visualización dinámica de resultados** que incluye paneles de KPIs, gráficos de análisis, tablas de estadísticas descriptivas y resúmenes ejecutivos.
- **Sugerencias de análisis impulsadas por IA** mediante flujos de Genkit (Google AI) que interpretan las descripciones de los datasets y proponen estrategias de análisis.
- **Gestión de perfil de usuario** con página de ajustes para actualizar información personal y preferencias de cuenta.
- **Sistema de hooks de estado** para gestión reactiva del estado de los proyectos a lo largo de la sesión del usuario.
- **CI/CD integrado** mediante GitHub Actions para automatizar el pipeline de validación y despliegue.
- **Soporte nativo para RSC** (React Server Components) con tipado estricto a través de TypeScript en toda la codebase.

---

## 🛠️ Tech Stack

| Categoría       | Tecnología                          |
| --------------- | ----------------------------------- |
| Framework web   | Next.js 15+ (App Router)            |
| Lenguaje        | TypeScript 5.x                      |
| Biblioteca UI   | React + ShadCN UI                   |
| Estilos         | Tailwind CSS 3.x                    |
| Iconografía     | Lucide React                        |
| Backend & Auth  | Firebase Authentication + Firestore |
| Hosting         | Firebase App Hosting + Vercel       |
| IA Generativa   | Google Genkit (AI Flows)            |
| Linting         | ESLint + Prettier                   |
| CI/CD           | GitHub Actions                      |
| Dev Environment | Firebase Studio / Project IDX       |
| Package Manager | npm                                 |
| Node versioning | `.nvmrc` (Node 18+)                 |

---

## 📦 Installation

### Prerrequisitos

- **Node.js** v18 o superior (gestionado via `.nvmrc`)
- **npm** v9+
- Una cuenta en **Firebase** con un proyecto creado
- Acceso a **Google AI / Genkit** (para los flujos de IA)

### 1. Clonar el repositorio

```bash
git clone https://github.com/devsebastian44/CollabData.git
cd CollabData
```

### 2. Usar la versión correcta de Node

```bash
nvm use
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con tus credenciales de Firebase y Genkit:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Google AI / Genkit
GOOGLE_GENAI_API_KEY=
```

### 5. Configurar Firebase

Asegúrate de que tu proyecto Firebase esté correctamente referenciado en `.firebaserc`:

```json
{
  "projects": {
    "default": "tu-proyecto-firebase-id"
  }
}
```

---

## ▶️ Usage

### Servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:9002](http://localhost:9002) en tu navegador.

> El servidor Next.js corre en el puerto **9002** por configuración del proyecto.

### Build de producción

```bash
npm run build
npm run start
```

### Lint del código

```bash
npm run lint
```

### Despliegue en Firebase App Hosting

El despliegue se gestiona automáticamente a través de **GitHub Actions** al hacer push a la rama principal. De forma manual:

```bash
firebase deploy
```

> La configuración en `apphosting.yaml` establece `maxInstances: 1` por defecto. Ajústalo según el tráfico esperado.

---

## 📁 Project Structure

```
CollabData/
│
├── .github/
│   └── workflows/               # Pipelines de CI/CD con GitHub Actions
│
├── .idx/                        # Configuración de Firebase Studio / Project IDX
│
├── docs/                        # Documentación técnica adicional del proyecto
│
├── src/
│   ├── app/                     # Next.js App Router — páginas y layouts
│   │   ├── layout.tsx           # Layout raíz global de la aplicación
│   │   ├── page.tsx             # Landing page pública
│   │   ├── login/
│   │   │   └── page.tsx         # Página de autenticación (login / registro)
│   │   ├── dashboard/
│   │   │   ├── layout.tsx       # Layout compartido del área privada
│   │   │   ├── page.tsx         # Vista principal del dashboard de proyectos
│   │   │   └── new-analysis/
│   │   │       └── page.tsx     # Flujo de creación de nuevo análisis
│   │   └── projects/
│   │       └── [id]/
│   │           ├── page.tsx     # Espacio de trabajo interactivo del proyecto
│   │           └── results/
│   │               └── page.tsx # Panel de resultados y visualizaciones
│   │
│   ├── components/
│   │   ├── layout/              # Componentes estructurales (header, footer, nav)
│   │   ├── pages/               # Componentes específicos de cada vista
│   │   └── ui/                  # Biblioteca de componentes ShadCN UI reutilizables
│   │
│   ├── firebase/
│   │   ├── config.ts            # Inicialización y configuración del SDK de Firebase
│   │   ├── index.ts             # Exportación centralizada de servicios Firebase
│   │   ├── provider.tsx         # Context Provider de Firebase para toda la app
│   │   └── auth/
│   │       └── use-user.tsx     # Hook personalizado para obtener el usuario autenticado
│   │
│   ├── ai/
│   │   ├── genkit.ts            # Inicialización de la instancia de Genkit
│   │   └── flows/               # Definición de flujos de IA (análisis de datasets)
│   │
│   ├── hooks/
│   │   └── use-project-store.ts # Hook de gestión de estado global de proyectos
│   │
│   └── lib/
│       ├── utils.ts             # Funciones de utilidad generales (cn, formatters, etc.)
│       ├── mock-data.ts         # Datos de ejemplo para desarrollo y prototipado
│       └── types.ts             # Definiciones de tipos e interfaces TypeScript globales
│
├── public/                      # Archivos estáticos (imágenes, iconos, fonts)
│
├── .firebaserc                  # Referencia al proyecto Firebase activo
├── .gitignore                   # Exclusiones de Git (node_modules, .env.local, etc.)
├── .nvmrc                       # Versión de Node.js fijada para el proyecto
├── apphosting.yaml              # Configuración de Firebase App Hosting
├── components.json              # Configuración de ShadCN UI (estilo, aliases, iconos)
├── eslint.config.js             # Configuración de ESLint
├── next.config.ts               # Configuración de Next.js (remote images, etc.)
├── package.json                 # Dependencias y scripts del proyecto
├── postcss.config.mjs           # Configuración de PostCSS (requerido por Tailwind)
├── prettier.config.js           # Reglas de formateo de código
├── tailwind.config.ts           # Configuración de Tailwind CSS
└── tsconfig.json                # Configuración del compilador TypeScript
```

---

## 🔐 Security & DevSecOps Architecture

Este proyecto implementa una arquitectura rigurosa DevSecOps, separando el ecosistema de laboratorio privado y el entorno público de portafolio para maximizar la seguridad por diseño.

### Estrategia Dual-Repo (GitLab ↔ GitHub)

#### 1. GitLab (Laboratorio Privado & Source of Truth)

El repositorio de GitLab sirve como el entorno completo de desarrollo. Contiene:

- **Código íntegro**: Aplicación, flujos completos de IA (`src/ai/flows`), tests y configs.
- **CI/CD Activo**: Definición en `.gitlab-ci.yml` para ejecutar linting, validación estática y escáner de seguridad en la nube.
- **Configuraciones Críticas**: Herramientas internas como `apphosting.yaml`.

#### 2. GitHub (Portafolio Público Sanitizado)

La exposición pública se restringe al código estructural esencial. Se omite completamente el entorno de testeo y automatización privada, garantizando una superficie de ataque mínima.

### Sincronización Segura (`publish_public.ps1`)

La transición desde el entorno de laboratorio (GitLab) al portafolio (GitHub) se automatiza estrictamente mediante `scripts/publish_public.ps1`.
Este script automatiza el flujo de publicación:

1. **Verificación de Entorno:** Exige contexto en `main` sin cambios pendientes.
2. **Purgado de Archivos Privados:** Elimina lógicas y configuraciones privadas (ej. `tests/`, `configs/`, `src/ai/flows`, `apphosting.yaml` y `.gitlab-ci.yml`) en una rama efímera (`public`).
3. **Publicación Limpia:** Fuerza un push a GitHub asegurando que el contenido sanitizado refleje un portafolio profesional.

### Autenticación y autorización

La autenticación está delegada a **Firebase Authentication**, garantizando manejo seguro de credenciales y sesiones.

### Variables de Entorno y Control de Imágenes Externa

- **Variables Sensibles**: Claves gestionadas en `.env.local` (excluido por `.gitignore`). Las claves de backend servidor (`GOOGLE_GENAI_API_KEY`) nunca se exponen.
- **Lista Blanca de Imágenes**: `next.config.ts` restringe la carga de dominios remotos.

### Firestore Security Rules

Se establecen **Firestore Security Rules** granulares usando validación de _UID_ para proteger accesos individuales por proyecto y aislar la data de cada tenant en el entorno escalado.

---

## 🚀 Roadmap

Mejoras técnicas sugeridas a partir del análisis de la arquitectura actual del código:

- **Reemplazar `mock-data.ts` por Firestore real en todas las vistas:** La presencia de `mock-data.ts` sugiere que algunas rutas podrían estar funcionando aún con datos estáticos; migrar completamente a Firestore para producción es una mejora prioritaria.
- **Implementar Firestore Security Rules** con validación por UID de usuario para proteger el acceso a documentos de proyectos y datasets.
- **Añadir carga real de archivos a Firebase Storage:** Incorporar el SDK de Storage para persistir los datasets subidos por los usuarios más allá de la sesión.
- **Ampliar los flujos de Genkit** con soporte para múltiples modelos (Gemini Pro, Gemini Flash) y prompts configurables por tipo de dataset.
- **Tests de integración con Playwright o Cypress:** Automatizar pruebas E2E para los flujos críticos (login, creación de análisis, visualización de resultados).
- **Escalar `maxInstances` en `apphosting.yaml`** para soportar tráfico concurrente real en producción.
- **Modo colaborativo en tiempo real** mediante Firestore `onSnapshot` para que múltiples usuarios vean actualizaciones en tiempo real dentro del mismo proyecto.
- **Exportación de resultados** en formatos PDF, CSV o JSON desde el panel de visualización.
- **Internacionalización (i18n)** con `next-intl` dado el origen multicultural del proyecto.

---

## 📄 License

Este proyecto está distribuido bajo la licencia **MIT**.

Esto significa que puedes usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del software de forma libre, siempre que se incluya el aviso de copyright original.

Copyright © 2025 **Sebastián Zhunaula** (devsebastian44)

---

## 👨‍💻 Author

<table>
  <tr>
    <td align="center">
      <b>Sebastián Zhunaula</b><br/>
      <sub>Full-Stack Developer · Frontend Specialist · Data & AI Enthusiast</sub><br/><br/>
      <a href="https://github.com/devsebastian44">
        <img src="https://img.shields.io/badge/GitHub-devsebastian44-black?style=flat&logo=github" />
      </a>
      <br/><br/>
      <a href="https://collabdata.vercel.app">
        <img src="https://img.shields.io/badge/Live%20Demo-CollabData-blue?style=flat&logo=vercel" />
      </a>
    </td>
  </tr>
</table>

> Este proyecto forma parte de un portafolio de desarrollo web full-stack, demostrando integración moderna de Next.js 15, Firebase, ShadCN UI y Google Genkit en una plataforma de análisis de datos colaborativa lista para producción.
