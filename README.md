# App Web de Prueba de Servidor

Aplicación web sencilla para comprobar que un servidor puede ejecutar una aplicación con backend.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Descomprime el proyecto y entra en la carpeta:

```bash
cd app_web_prueba_servidor
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor:

```bash
npm start
```

Por defecto utilizará el puerto `3000`.

## Acceso

Desde el mismo servidor:

```text
http://localhost:3000
```

Desde otro equipo de la red:

```text
http://IP_DEL_SERVIDOR:3000
```

Ejemplo:

```text
http://192.168.1.100:3000
```

## Endpoints

### Comprobar estado

```text
GET /api/health
```

Ejemplo:

```bash
curl http://localhost:3000/api/health
```

### Información del servidor

```text
GET /api/info
```

### Enviar un mensaje

```text
POST /api/message
Content-Type: application/json
```

Ejemplo:

```bash
curl -X POST http://localhost:3000/api/message \
  -H "Content-Type: application/json" \
  -d '{"message":"Hola servidor"}'
```

## Cambiar el puerto

Linux/macOS:

```bash
PORT=8080 npm start
```

Windows CMD:

```cmd
set PORT=8080 && npm start
```

PowerShell:

```powershell
$env:PORT=8080; npm start
```

## Qué puedes comprobar con esta aplicación

- Que Node.js funciona.
- Que npm puede instalar dependencias.
- Que el servidor acepta conexiones HTTP.
- Que el firewall permite el puerto.
- Que el frontend carga correctamente.
- Que el frontend puede comunicarse con el backend.
- Que las solicitudes GET y POST funcionan.

No utiliza base de datos ni guarda información, por lo que es adecuada para una prueba rápida del servidor.
