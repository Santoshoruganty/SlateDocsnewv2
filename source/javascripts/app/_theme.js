//= require ../lib/_jquery

/*
Futuristic Theme Toggle System
*/
;(function () {
  'use strict';

  var currentTheme = 'light';
  var THEME_KEY = 'slate-theme';

  // Initialize theme system
  function initTheme() {
    // Check for saved theme preference or system preference
    var savedTheme = localStorage.getItem(THEME_KEY);
    var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      currentTheme = savedTheme;
    } else if (systemDark) {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
    
    applyTheme(currentTheme);
    createThemeToggle();
  }

  // Apply theme to document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    
    // Update toggle button if it exists
    var toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      updateToggleButton(toggleButton, theme);
    }
    
    // Save preference
    localStorage.setItem(THEME_KEY, theme);
    
    // Add smooth transition
    document.documentElement.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  }

  // Create theme toggle button
  function createThemeToggle() {
    var toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle theme');
    toggleButton.setAttribute('title', 'Toggle dark/light theme');
    
    updateToggleButton(toggleButton, currentTheme);
    
    toggleButton.addEventListener('click', function() {
      var newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
    
    // Add to navigation
    var tocWrapper = document.querySelector('.toc-wrapper');
    if (tocWrapper) {
      var logo = tocWrapper.querySelector('.logo');
      if (logo && logo.parentNode) {
        logo.parentNode.insertBefore(toggleButton, logo.nextSibling);
      } else {
        tocWrapper.insertBefore(toggleButton, tocWrapper.firstChild);
      }
    }
  }

  // Update toggle button appearance
  function updateToggleButton(button, theme) {
    if (theme === 'dark') {
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2"/>
          <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
          <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2"/>
          <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
        </svg>
      `;
    } else {
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" fill="currentColor"/>
        </svg>
      `;
    }
  }

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Initialize when DOM is ready
  $(document).ready(function() {
    initTheme();
  });

  // Export functions
  window.initTheme = initTheme;
  window.applyTheme = applyTheme;

})();