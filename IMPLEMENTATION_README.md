# 🚀 Futuristic API Documentation

A beautifully themed Slate documentation site with **dark/light theme toggle** and **cutting-edge futuristic design**. Built for modern API documentation with GitHub Pages deployment support.

![Light Theme](screenshots/light_theme.png) ![Dark Theme](screenshots/dark_theme.png)

## ✨ Features

### 🎨 **Futuristic Design Elements**
- **Glassmorphism Effects**: Translucent elements with backdrop blur
- **Gradient Accents**: Beautiful gradient highlights and animations  
- **Smooth Transitions**: Buttery smooth theme switching and interactions
- **Modern Typography**: Clean, readable fonts with perfect spacing
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile

### 🌓 **Advanced Theme System**
- **Dark/Light Toggle**: Seamless switching with floating toggle button
- **System Preference Detection**: Automatically matches your OS theme
- **Local Storage Persistence**: Remembers your theme choice
- **Smooth Animations**: Elegant transitions between themes

### 🔧 **Developer Features**
- **Multi-language Code Examples**: cURL, JavaScript, Python, Ruby
- **Syntax Highlighting**: Beautiful code highlighting for 100+ languages
- **Search Functionality**: Smart search with wildcards
- **Internationalization**: Built-in i18n support
- **GitHub Pages Ready**: Zero-config deployment

## 🚀 Quick Start

### Option 1: Use the Preview (Fastest)
1. Open `preview.html` in your browser
2. Click the theme toggle button to test dark/light modes
3. Customize the content for your API

### Option 2: Full Slate Setup (Recommended for Production)

#### Prerequisites
- Ruby 2.6+
- Bundler gem

#### Installation
```bash
# Clone this repository
git clone <your-repo-url>
cd your-api-docs

# Install dependencies
bundle install

# Start development server
./slate.sh serve

# Build for production
./slate.sh build

# Deploy to GitHub Pages
./slate.sh deploy
```

## 📝 Customization

### 🎨 Theme Colors
Edit `/source/stylesheets/_variables.scss` to customize colors:

```scss
:root {
  // Light theme
  --nav-bg: #fff;
  --main-bg: #fff;
  --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  // Your custom colors here...
}

[data-theme="dark"] {
  // Dark theme colors
  --nav-bg: #1a1d29;
  --main-bg: #0d1117;
  
  // Your custom dark colors here...
}
```

### 📖 Content
Edit `/source/localizable/index.html.md` to customize your API documentation:

```markdown
---
title: Your API Documentation
language_tabs:
  - shell
  - javascript
  - python
  - ruby
includes:
  - your_api_sections
---

# Your API

Welcome to your amazing API documentation!
```

### 🔧 Theme Toggle
The theme toggle is automatically added to the navigation. To customize its position or appearance, edit `/source/javascripts/app/_theme.js` and `/source/stylesheets/_theme.scss`.

## 🏗️ File Structure

```
your-api-docs/
├── source/
│   ├── stylesheets/
│   │   ├── _variables.scss    # Theme colors & variables
│   │   ├── _theme.scss        # Futuristic theme styles
│   │   └── screen.scss        # Main stylesheet
│   ├── javascripts/
│   │   └── app/
│   │       └── _theme.js      # Theme toggle functionality
│   ├── layouts/
│   │   └── layout.erb         # HTML layout template
│   └── localizable/
│       └── index.html.md      # Your API documentation content
├── preview.html               # Standalone preview
└── README.md                  # This file
```

## 🎯 Key Implementation Details

### Theme System Architecture
- **CSS Custom Properties**: Dynamic theme switching using CSS variables
- **JavaScript Controller**: Handles theme persistence and system preference detection  
- **Smooth Transitions**: All elements transition smoothly between themes
- **Accessibility**: Proper color contrast and screen reader support

### Futuristic Design Elements
- **Backdrop Blur**: `backdrop-filter: blur(20px)` for glassmorphism
- **Gradient Accents**: CSS gradients for visual interest
- **Box Shadows**: Glowing effects with CSS shadows
- **Smooth Animations**: CSS transitions and transforms

## 📱 Browser Support

- ✅ Chrome 88+
- ✅ Firefox 85+ 
- ✅ Safari 14+
- ✅ Edge 88+

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Push your code to a GitHub repository
2. Run `./slate.sh deploy` 
3. Your documentation will be live at `https://yourusername.github.io/your-repo`

### Other Hosting
The built files in the `/build` directory can be deployed to any static hosting service:
- Netlify
- Vercel  
- AWS S3
- Azure Static Web Apps

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built on top of [Slate](https://github.com/slatedocs/slate) documentation framework
- Inspired by modern design systems and futuristic UI trends
- Color palette and gradients inspired by contemporary design languages

---

**Made with ❤️ for beautiful API documentation**

Need help? Open an issue or check out the [live demo](https://your-demo-url.com)!