# 2Build - Sitio Web Modernizado

Sitio web modernizado para 2Build, empresa de ingeniería de Data Centers, construido con Next.js 15, TypeScript, Tailwind CSS, Base UI y Framer Motion.

## 🚀 Tecnologías

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **UI Components:** MUI Base UI (headless)
- **Animaciones:** Framer Motion
- **Fuente:** Almarai (Google Fonts)

## 📁 Estructura del Proyecto

```
2build/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Layout principal con fuentes y metadata
│   ├── page.tsx            # Landing page
│   └── globals.css         # Estilos globales + Tailwind
├── components/
│   ├── animations/         # Componentes de animación
│   │   ├── FadeIn.tsx
│   │   └── SlideIn.tsx
│   ├── layout/             # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/               # Componentes del home
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   └── AboutCard.tsx
│   ├── services/           # Componentes de servicios
│   │   ├── ServiceGrid.tsx
│   │   ├── ServiceCard.tsx
│   │   └── ServiceModal.tsx
│   └── ui/                 # Componentes UI base
│       ├── Button.tsx
│       └── Modal.tsx
├── data/                   # Datos del sitio
│   ├── services.ts         # 8 servicios
│   └── about.ts            # Cards de About
├── lib/                    # Utilidades
│   ├── constants.ts        # Constantes (colores, contacto, textos)
│   └── animations.ts       # Variantes de Framer Motion
├── types/                  # Tipos TypeScript
│   ├── service.ts
│   └── index.ts
└── public/                 # Assets estáticos
    ├── images/             # TODO: Agregar imágenes aquí
    │   ├── logo/
    │   ├── services/
    │   └── backgrounds/
    └── fonts/              # TODO: Agregar fuentes locales (opcional)
```

## 🔧 Problema con npm

Actualmente hay un error con npm en tu sistema. Para solucionarlo:

### Opción 1: Reinstalar Node.js (Recomendado)
1. Desinstalar Node.js completamente desde Panel de Control
2. Descargar la última versión LTS de https://nodejs.org/
3. Instalar de nuevo

### Opción 2: Actualizar npm
```bash
npm install -g npm@latest
```

### Opción 3: Usar pnpm (Alternativa)
```bash
# Instalar pnpm globalmente
npm install -g pnpm

# Usar pnpm para instalar dependencias
pnpm install
```

## 📦 Instalación

Una vez solucionado el problema de npm:

```bash
cd E:\Zombot\WEB\2build
npm install
```

## 🎨 Agregar Imágenes

Las imágenes están configuradas como placeholders. Para agregar las imágenes reales:

### 1. Logo
- Copiar desde: `2build_old/src/img/logonoslogan.svg`
- A: `public/images/logo/logonoslogan.svg`
- Actualizar en: `components/layout/Header.tsx` (línea del div placeholder)

### 2. Imágenes de Servicios (8 imágenes)
- Copiar desde: `2build_old/src/img/card/1.jpg` - `8.jpg`
- A: `public/images/services/1.jpg` - `8.jpg`
- Las rutas ya están configuradas en `data/services.ts`

### 3. Backgrounds
- Copiar desde: `2build_old/src/img/stock/photo1.jpg`, `photo2.jpg`, `photo3.jpg`
- A: `public/images/backgrounds/photo1.jpg`, `photo2.jpg`, `photo3.jpg`
- Actualizar en:
  - `tailwind.config.ts` (líneas 21-22)
  - `components/home/Hero.tsx` (cambiar backgroundColor por backgroundImage)
  - `components/services/ServiceGrid.tsx` (cambiar backgroundColor por backgroundImage)

### 4. Usar las imágenes en componentes

**En ServiceCard.tsx**, reemplazar el div placeholder con:
```tsx
<Image
  src={service.image}
  alt={service.title}
  width={300}
  height={200}
  className="opacity-80 rounded-t-xl"
/>
```

**En Hero.tsx**, actualizar el style:
```tsx
style={{ backgroundImage: "url('/images/backgrounds/photo1.jpg')" }}
```

## 🎯 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌈 Colores de Marca

Configurados en `tailwind.config.ts` y `lib/constants.ts`:

- **Primary Blue:** `#3d7ed3`
- **Primary Dark:** `#2965b4`
- **Accent Orange:** `#ffa100`
- **Accent Dark:** `#fd8f14`

## 📝 Contenido

Todo el contenido del sitio antiguo ha sido preservado:

- ✅ Hero: Headline y subtitle
- ✅ About: 3 cards (Quienes Somos, Nuestra Misión, El Enfoque)
- ✅ Services: 8 servicios con descripciones completas
- ✅ Footer: Contacto (+569 50124613, contacto@2build.cl)

## 🎬 Animaciones

El sitio incluye animaciones sofisticadas con Framer Motion:

- Fade in al hacer scroll
- Slide up animations
- Stagger animations para grids
- Modal transitions
- Hover effects en cards
- Button press animations

## 📱 Responsive

El sitio es completamente responsive:

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🔄 Próximos Pasos

1. ✅ Landing page completa (HECHO)
2. ⏳ Agregar imágenes reales
3. ⏳ Crear páginas de servicios individuales (`/servicios/[slug]`)
4. ⏳ Crear galería de proyectos (`/proyectos`)
5. ⏳ Crear página de contacto (`/contacto`)

## 🚀 Build para Producción

```bash
npm run build
npm start
```

## 📞 Contacto

- Teléfono: +569 50124613
- Email: contacto@2build.cl

---

Desarrollado con ❤️ usando Next.js y Framer Motion
