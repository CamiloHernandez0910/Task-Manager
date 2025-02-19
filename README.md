# Task Manager API

Task Manager API es una API REST para la gestión de tareas con autenticación JWT y MongoDB.

## 🚀 Características
- Registro e inicio de sesión de usuarios con JWT
- Creación, actualización y eliminación de tareas
- Protección de rutas con middleware de autenticación
- Documentación con Swagger

## 📦 Tecnologías Usadas
- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** para autenticación
- **Swagger** para documentación
- **dotenv** para gestión de variables de entorno

## 📂 Instalación y Uso
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/CamiloHernandez0910/Task-Manager.git
cd Task-Manager
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto y agrega:
```
PORT=5000
MONGO_URI=tu_conexion_a_mongodb
JWT_SECRET=tu_secreto_jwt
```

### 4️⃣ Iniciar el servidor
```bash
npm run dev
```

El servidor correrá en `http://localhost:5000`

## 📝 Documentación Swagger
La documentación de la API está disponible en:
```
http://localhost:5000/api-docs
```

## 🔐 Endpoints Principales
### 🛠 Autenticación
- `POST /api/auth/register` → Registrar usuario
- `POST /api/auth/login` → Iniciar sesión (devuelve un token JWT)

### 📌 Tareas
- `GET /api/tasks` → Obtener todas las tareas (requiere autenticación)
- `POST /api/tasks` → Crear una tarea (requiere autenticación)
- `PUT /api/tasks/:id` → Editar una tarea (requiere autenticación)
- `DELETE /api/tasks/:id` → Eliminar una tarea (requiere autenticación)

## 👨‍💻 Contribuciones
¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:
1. Haz un **fork** del repositorio
2. Crea una nueva rama (`git checkout -b feature-nueva`)
3. Realiza los cambios y haz **commit** (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz **push** a tu rama (`git push origin feature-nueva`)
5. Abre un **Pull Request**

¡Úsalo libremente! 🚀

