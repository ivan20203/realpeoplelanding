// This script runs immediately and prevents flash of wrong theme
// It needs to be included in the head of the document
function setInitialTheme() {
  function getInitialTheme() {
    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
    
    // If no theme in localStorage, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Default to light theme
    return 'light';
  }

  // Get and apply the initial theme
  const theme = getInitialTheme();
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Store the theme for consistency
  localStorage.setItem('theme', theme);
}

// Run immediately
setInitialTheme();