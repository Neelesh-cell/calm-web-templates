document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const themeToggleBtn = document.getElementById('theme-toggle');
    const calmToggleBtn = document.getElementById('calm-toggle');
    const fontToggleBtn = document.getElementById('font-toggle');
    const fontDecreaseBtn = document.getElementById('font-decrease');
    const fontIncreaseBtn = document.getElementById('font-increase');
    const fontSizeDisplay = document.getElementById('font-size-display');
    const rootElements = document.documentElement;

    // Constants
    const DEFAULT_FONT_SIZE = 16;
    const MIN_FONT_SIZE = 12;
    const MAX_FONT_SIZE = 32; // Scaling up to 200%

    // Initialize State from inline script overrides (local storage / system pref)
    let currentTheme = rootElements.getAttribute('data-theme');
    let isCalmMode = rootElements.classList.contains('calm-mode');
    let isDyslexicFont = rootElements.classList.contains('dyslexic-font');
    let currentFontSize = parseInt(localStorage.getItem('fontSize')) || DEFAULT_FONT_SIZE;

    // Initialize UI states
    const updateThemeUI = () => {
        themeToggleBtn.setAttribute('aria-pressed', currentTheme === 'dark');
        themeToggleBtn.querySelector('.label').textContent = currentTheme === 'dark' ? 'Light Theme' : 'Dark Theme';
    };

    const updateCalmUI = () => {
        calmToggleBtn.setAttribute('aria-pressed', isCalmMode);
    };

    const updateFontUI = () => {
        fontToggleBtn.setAttribute('aria-pressed', isDyslexicFont);
    };

    const updateFontSizeUI = () => {
        // Calculate percentage for display
        const percentage = Math.round((currentFontSize / DEFAULT_FONT_SIZE) * 100);
        fontSizeDisplay.textContent = `${percentage}%`;
        rootElements.style.setProperty('--base-font-size', `${currentFontSize}px`);
        localStorage.setItem('fontSize', currentFontSize);
    };

    // Initial setup
    updateThemeUI();
    updateCalmUI();
    updateFontUI();
    updateFontSizeUI();

    // Event Listeners
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        rootElements.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeUI();
    });

    calmToggleBtn.addEventListener('click', () => {
        isCalmMode = !isCalmMode;
        if (isCalmMode) {
            rootElements.classList.add('calm-mode');
        } else {
            rootElements.classList.remove('calm-mode');
        }
        localStorage.setItem('calmMode', isCalmMode);
        updateCalmUI();
    });

    fontToggleBtn.addEventListener('click', () => {
        isDyslexicFont = !isDyslexicFont;
        if (isDyslexicFont) {
            rootElements.classList.add('dyslexic-font');
        } else {
            rootElements.classList.remove('dyslexic-font');
        }
        localStorage.setItem('dyslexicFont', isDyslexicFont);
        updateFontUI();
    });

    fontDecreaseBtn.addEventListener('click', () => {
        if (currentFontSize > MIN_FONT_SIZE) {
            currentFontSize -= 2;
            updateFontSizeUI();
        }
    });

    fontIncreaseBtn.addEventListener('click', () => {
        if (currentFontSize < MAX_FONT_SIZE) {
            currentFontSize += 2;
            updateFontSizeUI();
        }
    });

    // Handle system theme changes if user hasn't explicitly set a preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            rootElements.setAttribute('data-theme', currentTheme);
            updateThemeUI();
        }
    });
});
