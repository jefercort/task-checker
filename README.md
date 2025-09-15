# 📝 Task Checker

Una aplicación web moderna para gestión de tareas construida con React y Vite, diseñada para ayudarte a mantener organizadas tus actividades diarias de manera simple y eficiente.

## 🎯 Descripción

Task Checker es una aplicación de lista de tareas (to-do list) desarrollada como proyecto de aprendizaje de React.js. Permite a los usuarios crear, gestionar y completar tareas de manera intuitiva con una interfaz limpia y responsive.

Este proyecto fue creado como parte de mi proceso de aprendizaje de JavaScript y React, implementando conceptos fundamentales como:
- Componentes de React
- Hooks (useState, useEffect)
- Props y estado
- Manejo de eventos
- Renderizado condicional

## ✨ Características

- ✅ Crear nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas
- ✅ Filtrar tareas (todas, activas, completadas)
- ✅ Contador de tareas pendientes
- ✅ Interfaz responsive
- ✅ Hot Module Replacement (HMR) con Vite

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Build tool rápido y moderno
- **JavaScript ES6+** - Lenguaje de programación
- **CSS3** - Estilos y diseño responsive
- **ESLint** - Linter para mantener la calidad del código

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14.0 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Git

## 🔧 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/jefercort/task-checker.git
   ```

2. **Navega al directorio del proyecto**
   ```bash
   cd task-checker
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abre tu navegador**
   
   La aplicación estará disponible en `http://localhost:5173`

## 📖 Uso

### Agregar una tarea
1. Escribe el nombre de tu tarea en el campo de entrada
2. Presiona Enter o haz clic en el botón "Agregar"

### Completar una tarea
- Haz clic en el checkbox junto a la tarea para marcarla como completada

### Eliminar una tarea
- Haz clic en el botón de eliminar (X) para remover la tarea de la lista

### Filtrar tareas
- Usa los botones de filtro para ver:
  - Todas las tareas
  - Solo tareas activas
  - Solo tareas completadas

## 📁 Estructura del Proyecto

```
task-checker/
├── public/              # Archivos públicos estáticos
├── src/                 # Código fuente
│   ├── components/      # Componentes de React
│   ├── styles/          # Archivos CSS
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── .gitignore          # Archivos ignorados por Git
├── index.html          # HTML principal
├── package.json        # Dependencias y scripts
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev           # Inicia el servidor de desarrollo

# Build
npm run build         # Construye la aplicación para producción

# Preview
npm run preview       # Vista previa del build de producción

# Linting
npm run lint          # Ejecuta ESLint para verificar el código
```

## 🎓 Aprendizajes Clave

Durante el desarrollo de este proyecto, he aprendido:

- **Fundamentos de React**: Componentes, JSX, props y estado
- **Hooks de React**: useState para manejar el estado local
- **Manejo de eventos**: onClick, onChange, onSubmit
- **Renderizado de listas**: Uso de map() y keys únicas
- **Renderizado condicional**: Mostrar/ocultar elementos basado en el estado
- **Vite como herramienta de build**: Configuración y optimización
- **Mejores prácticas**: Estructura de proyecto, naming conventions

## 🚧 Próximas Mejoras

- [ ] Persistencia de datos con LocalStorage
- [ ] Drag and drop para reordenar tareas
- [ ] Categorías o etiquetas para las tareas
- [ ] Fechas de vencimiento
- [ ] Modo oscuro
- [ ] Animaciones de transición
- [ ] Testing con Jest y React Testing Library
- [ ] Integración con backend (API REST)

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Si deseas contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Kevin Cortes**
- GitHub: [@jefercort](https://github.com/jefercort)

## 🙏 Agradecimientos

- Curso de Introducción a React.js
- La comunidad de React por los recursos de aprendizaje
- Vite por la excelente herramienta de desarrollo

---

⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub!
