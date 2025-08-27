# 📚 Buscador de Libros - Aplicación Móvil Híbrida

Una aplicación web moderna y responsiva para buscar libros, ver detalles y gestionar favoritos. Desarrollada con React, Material UI y la Google Books API.

## 🚀 Características

- **🔍 Búsqueda de Libros**: Busca libros usando la Google Books API
- **📖 Detalles Completos**: Información detallada de cada libro (título, autor, descripción, fecha de publicación)
- **❤️ Sistema de Favoritos**: Guarda tus libros favoritos en almacenamiento local
- **📱 Diseño Móvil**: Interfaz optimizada para dispositivos móviles
- **🎨 UI Moderna**: Componentes elegantes con Material UI
- **⚡ Rendimiento**: Construido con Vite para carga rápida

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React** - Framework de JavaScript
- **Material UI** - Componentes de interfaz de usuario
- **React Router DOM** - Navegación entre páginas
- **Axios** - Cliente HTTP para API calls

### APIs
- **Google Books API** - Búsqueda y datos de libros

### Herramientas de Desarrollo
- **Vite** - Build tool y servidor de desarrollo
- **ESLint** - Linting de código
- **Git** - Control de versiones

## 📱 Pantallas

1. **Pantalla de Búsqueda**: Campo de búsqueda con resultados en tiempo real
2. **Detalles del Libro**: Información completa con opción de añadir a favoritos
3. **Favoritos**: Lista de libros guardados con opción de eliminar

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/Buscador-de-Libros.git
cd Buscador-de-Libros
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter

## 🔧 Estructura del Proyecto

```
src/
├── components/
│   └── BookItem.jsx          # Componente de tarjeta de libro
├── screens/
│   ├── SearchScreen.jsx      # Pantalla de búsqueda
│   ├── BookDetailScreen.jsx  # Pantalla de detalles
│   └── FavoritesScreen.jsx   # Pantalla de favoritos
├── utils/
│   └── storage.js            # Utilidades de almacenamiento local
├── App.jsx                   # Componente principal
├── App.css                   # Estilos globales
└── main.jsx                  # Punto de entrada
```

## 🌐 API Utilizada

Este proyecto consume la [Google Books API](https://developers.google.com/books/docs/v1/using) para:
- Buscar libros por título, autor o tema
- Obtener información detallada de cada libro
- Acceder a imágenes de portadas

## 📱 Funcionalidades Móviles

- **Navegación Inferior**: Menú de navegación fijo en la parte inferior
- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Touch-Friendly**: Botones y elementos optimizados para interacción táctil
- **Carga Rápida**: Optimizado para conexiones móviles

## 💾 Almacenamiento Local

Los favoritos se guardan utilizando `localStorage` del navegador, permitiendo:
- Persistencia de datos entre sesiones
- Acceso offline a la lista de favoritos
- No requiere registro de usuario

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- [Google Books API](https://developers.google.com/books) por proporcionar los datos de libros
- [Material UI](https://mui.com/) por los componentes de interfaz
- [React](https://reactjs.org/) por el framework

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
