# Devfolio-Inspired Portfolio

A modern, aesthetic portfolio website inspired by the Devfolio design, built with HTML, CSS, JavaScript, and GSAP animations.

## Features

### 🎨 Design & UI
- **Violet/Purple Color Palette** - Modern gradient-based color scheme
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Fully optimized for all device sizes
- **Custom Cursor** - Interactive custom cursor with hover effects
- **Smooth Animations** - GSAP-powered scroll and interaction animations

### 🎯 Core Features
- **Responsive Navigation Menu** - Full-screen hamburger menu with smooth animations
- **Soundbar Feature** - Background music player with animated sound bars
- **Typed Text Effect** - Dynamic typing animation for hero subtitle
- **Project Cards with Hover Effects** - GSAP-animated project showcases
- **Collaboration Section** - Animated scrolling text background
- **Contact Form** - Clean, functional contact interface
- **Progress Bar** - Scroll progress indicator
- **Social Links** - Fixed social media links sidebar

### ⚡ Animations
- **GSAP ScrollTrigger** - Scroll-based animations
- **Hover Interactions** - Smooth transitions on interactive elements
- **Project Card Reveals** - Description appears on hover with GSAP
- **Parallax Effects** - Subtle parallax scrolling
- **Stagger Animations** - Sequential element animations

## File Structure

```
devfolio-portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   └── sounds/
│       └── song.mp3 (optional)
└── README.md
```

## Setup Instructions

### 1. Basic Setup
1. Extract/clone the portfolio folder
2. Open `index.html` in your browser
3. No build process required - pure HTML/CSS/JS!

### 2. Customization

#### Update Personal Information
Open `index.html` and update:
- Name and title in hero section
- About section content
- Skills (add/remove skill cards)
- Project information and images
- Contact information
- Social media links

#### Add Your Projects
For each project in the `projects-grid` section:
```html
<div class="project-card" data-gradient="linear-gradient(90deg, #F14658 0%, #DC2537 100%)">
    <div class="project-bg"></div>
    <img src="path/to/image.png" alt="Project Name" class="project-image">
    <div class="project-content">
        <h3 class="project-name">Project Name</h3>
        <p class="project-description">Description here...</p>
        <div class="project-tech">
            <span>Tech 1</span>
            <span>Tech 2</span>
        </div>
        <div class="project-links">
            <a href="github-url" class="link" target="_blank">
                <i class='bx bxl-github'></i>
            </a>
            <a href="live-url" class="link" target="_blank">
                <i class='bx bx-link-external'></i>
            </a>
        </div>
    </div>
</div>
```

#### Update Skills
Add or modify skills in the `skills-grid` section:
```html
<div class="skill-card">
    <img src="path/to/skill-icon.svg" alt="Skill Name">
    <span>Skill Name</span>
</div>
```

#### Change Color Scheme
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --color-primary: #8b31ff;
    --color-primary-dark: #7000ff;
    --color-primary-light: #9f55ff;
    /* Modify these for different colors */
}
```

### 3. Add Background Music (Optional)
1. Add your audio file to `assets/sounds/song.mp3`
2. The soundbar will automatically work with it
3. Supported formats: MP3, WAV, OGG

### 4. Image Optimization
- Place all images in `assets/images/` or reference from existing Image folder
- Recommended formats: WebP for best performance, PNG/JPG as fallback
- Optimize images before uploading (compress, resize)

## Browser Support
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Dependencies

### External Libraries (CDN)
- **GSAP 3.12.5** - Animation library
- **ScrollTrigger** - GSAP scroll plugin
- **Boxicons** - Icon library
- **Google Fonts (Inter)** - Typography

All dependencies are loaded via CDN - no npm install required!

## Features Breakdown

### Custom Cursor
- Follows mouse movement with smooth GSAP animation
- Scales up on hovering interactive elements
- Disabled on mobile devices

### Theme Toggle
- Dark/Light mode switch
- Saves preference to localStorage
- Smooth color transitions

### Soundbar
- Click to play/pause background music
- Animated sound bars when playing
- Smooth hover effects

### Menu System
- Full-screen overlay menu
- Circular scale animation
- Gradient text effects on menu items
- Close on link click or Escape key

### Project Cards
- Gradient backgrounds per project
- Image rotates and fades on hover
- Description appears with GSAP animation
- Links to GitHub and live demo

### Scroll Animations
- Fade-in sections on scroll
- Stagger animations for skill cards
- Parallax text in collaboration section
- Progress bar tracks scroll position

## Performance Tips

1. **Lazy Load Images**: Add `loading="lazy"` to images
2. **Minify Files**: Use minified CSS/JS for production
3. **Compress Images**: Use tools like TinyPNG
4. **Cache Assets**: Configure proper caching headers
5. **Use WebP**: Convert images to WebP format

## Customization Tips

### Change Gradient Colors
Project cards use data-gradient attribute:
```html
data-gradient="linear-gradient(90deg, #color1 0%, #color2 100%)"
```

### Modify Typed Strings
Edit in `assets/js/script.js`:
```javascript
this.strings = [
    'Your Text 1',
    'Your Text 2',
    'Your Text 3'
];
```

### Adjust Animation Speed
Modify GSAP duration values:
```javascript
gsap.from(element, {
    duration: 1, // Change this value
    // ...
});
```

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Your site will be live!

### Netlify
1. Drag and drop the folder to Netlify
2. Done! Auto-deployed with HTTPS

### Vercel
1. Import repository
2. Deploy with one click

## Troubleshooting

### Animations Not Working
- Check if GSAP is loaded (open console)
- Ensure ScrollTrigger is registered
- Clear browser cache

### Custom Cursor Not Showing
- Only works on desktop (disabled on mobile)
- Check if elements have `.link` class

### Theme Not Persisting
- Check localStorage permissions
- Ensure JavaScript is enabled

### Images Not Loading
- Verify image paths are correct
- Check file extensions match
- Use relative paths

## Credits

- **Design Inspiration**: Devfolio by Shubh Porwal
- **Icons**: Boxicons
- **Animations**: GSAP
- **Fonts**: Google Fonts (Inter)

## License

This is a portfolio template. Feel free to use it for your personal portfolio!

## Support

For issues or questions:
- Check browser console for errors
- Ensure all files are properly linked
- Verify GSAP CDN is loading

---

**Built with** ❤️ **using HTML, CSS, JavaScript, and GSAP**

**Developer**: Jonard Gan
