# Guía de Configuración - 2Build Website

## 🛠️ Paso 1: Solucionar el problema de npm

### Error actual:
```
npm error Class extends value undefined is not a constructor or null
```

Este error indica corrupción en la instalación de Node.js/npm.

### Solución Recomendada:

1. **Desinstalar Node.js completamente:**
   - Ir a Panel de Control > Programas > Desinstalar un programa
   - Buscar "Node.js" y desinstalar
   - Borrar manualmente estas carpetas si existen:
     - `C:\Program Files\nodejs`
     - `C:\Program Files (x86)\nodejs`
     - `C:\Users\[TuUsuario]\AppData\Roaming\npm`
     - `C:\Users\[TuUsuario]\AppData\Roaming\npm-cache`

2. **Reinstalar Node.js:**
   - Ir a https://nodejs.org/
   - Descargar la versión LTS (Long Term Support)
   - Instalar con las opciones por defecto
   - Reiniciar la computadora

3. **Verificar instalación:**
   ```bash
   node --version
   npm --version
   ```

## 📦 Paso 2: Instalar Dependencias

Una vez solucionado npm:

```bash
cd E:\Zombot\WEB\2build
npm install
```

Esto instalará:
- react, react-dom, next
- framer-motion
- @mui/base
- TypeScript y tipos
- Tailwind CSS
- ESLint
- sharp (optimización de imágenes)

## 🖼️ Paso 3: Crear Directorios de Imágenes

```bash
cd E:\Zombot\WEB\2build
mkdir public\images
mkdir public\images\logo
mkdir public\images\services
mkdir public\images\backgrounds
mkdir public\fonts
mkdir public\fonts\almarai
```

## 📁 Paso 4: Copiar Assets desde 2build_old

### Logo:
```bash
copy 2build_old\src\img\logonoslogan.svg public\images\logo\
```

### Imágenes de Servicios:
```bash
copy 2build_old\src\img\card\1.jpg public\images\services\
copy 2build_old\src\img\card\2.jpg public\images\services\
copy 2build_old\src\img\card\3.jpg public\images\services\
copy 2build_old\src\img\card\4.jpg public\images\services\
copy 2build_old\src\img\card\5.jpg public\images\services\
copy 2build_old\src\img\card\6.jpg public\images\services\
copy 2build_old\src\img\card\7.jpg public\images\services\
copy 2build_old\src\img\card\8.jpg public\images\services\
```

O copiarlas todas de una vez:
```bash
copy 2build_old\src\img\card\*.jpg public\images\services\
```

### Backgrounds:
```bash
copy 2build_old\src\img\stock\photo1.jpg public\images\backgrounds\
copy 2build_old\src\img\stock\photo2.jpg public\images\backgrounds\
copy 2build_old\src\img\stock\photo3.jpg public\images\backgrounds\
```

### Fuentes (Opcional - ya está usando Google Fonts):
```bash
copy 2build_old\src\font\*.ttf public\fonts\almarai\
```

## 🎨 Paso 5: Actualizar Componentes con Imágenes Reales

### 5.1 Header - Logo

Editar `components/layout/Header.tsx`, línea ~16:

**Antes:**
```tsx
<div className="w-24 h-12 bg-gradient-to-r from-primary to-accent rounded flex items-center justify-center">
  <span className="text-white font-bold text-lg">2Build</span>
</div>
```

**Después:**
```tsx
<Image
  src="/images/logo/logonoslogan.svg"
  alt="2Build Logo"
  width={96}
  height={48}
  priority
/>
```

Agregar import al inicio:
```tsx
import Image from 'next/image';
```

### 5.2 Hero - Background Image

Editar `components/home/Hero.tsx`, línea ~11:

**Antes:**
```tsx
style={{ backgroundColor: '#1e40af' }}
```

**Después:**
```tsx
style={{ backgroundImage: "url('/images/backgrounds/photo1.jpg')" }}
```

### 5.3 ServiceCard - Imágenes de Servicios

Editar `components/services/ServiceCard.tsx`, líneas ~14-18:

**Antes:**
```tsx
<div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 opacity-80 rounded-t-xl flex items-center justify-center">
  <span className="text-white text-4xl font-bold">{service.order}</span>
</div>
```

**Después:**
```tsx
<Image
  src={service.image}
  alt={service.title}
  width={300}
  height={200}
  className="opacity-80 rounded-t-xl object-cover w-full h-48"
/>
```

Agregar import al inicio:
```tsx
import Image from 'next/image';
```

### 5.4 ServiceGrid - Background Image

Editar `components/services/ServiceGrid.tsx`, línea ~28:

**Antes:**
```tsx
style={{ backgroundColor: '#1e40af' }}
```

**Después:**
```tsx
style={{ backgroundImage: "url('/images/backgrounds/photo2.jpg')" }}
```

## ⚡ Paso 6: Ejecutar el Proyecto

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## ✅ Checklist de Verificación

- [ ] Node.js reinstalado correctamente
- [ ] `npm install` ejecutado sin errores
- [ ] Directorios de imágenes creados
- [ ] Logo copiado
- [ ] 8 imágenes de servicios copiadas
- [ ] 3 imágenes de background copiadas
- [ ] Componentes actualizados con imágenes reales
- [ ] Proyecto ejecutándose en localhost:3000
- [ ] Todas las imágenes se ven correctamente
- [ ] Modals de servicios funcionan
- [ ] Animaciones se ven fluidas
- [ ] Responsive funciona (probar en diferentes tamaños)

## 🐛 Troubleshooting

### Error: Module not found
- Verifica que `npm install` se haya ejecutado correctamente
- Borra la carpeta `node_modules` y `.next` y ejecuta `npm install` de nuevo

### Imágenes no se ven
- Verifica que las rutas en `public/images/` sean correctas
- Revisa la consola del navegador para errores 404
- Asegúrate de que las imágenes fueron copiadas correctamente

### Fuente no se ve correcta
- La fuente Almarai se carga desde Google Fonts automáticamente
- Si prefieres usar las fuentes locales, actualiza `app/layout.tsx`

### Problemas de performance
- Ejecuta `npm run build` para crear una versión optimizada
- Verifica que sharp esté instalado para optimización de imágenes

## 📞 Soporte

Si tienes problemas, revisa:
- README.md - Documentación general
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
