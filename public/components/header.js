// Alpine component for the header navigation
document.addEventListener('alpine:init', () => {
    Alpine.data('header', () => ({
        init() {
            // Check current path to set active class
            this.currentPath = window.location.pathname;
        },
        currentPath: '/',
        isActive(path) {
            return this.currentPath === path;
        }
    }));
});

// Create a helper to insert the header HTML
function insertHeader(title, subtitle, description) {
    const headerElement = document.querySelector('header');
    if (!headerElement) return;

    headerElement.innerHTML = `
        <h1>Keep Alive<div class="title-accent"></div></h1>
        <div class="subtitle">${subtitle || 'URI Health Monitor'}</div>
        <p class="header-description">${description || 'Keep your services responsive and prevent cold starts.'}</p>

        <nav class="main-nav" x-data="header()">
            <a href="index.html" :class="isActive('/') ? 'active' : ''">Home</a>
            <div class="dropdown-menu">
                <a href="#" class="dropdown-trigger">Use Cases</a>
                <div class="dropdown-content">
                    <a href="platform/aws-lambda-guide.html">AWS Lambda</a>
                    <a href="platform/render-guide.html">Render</a>
                    <a href="platform/amplify-guide.html">Amplify</a>
                    <a href="platform/heroku-guide.html">Heroku</a>
                    <a href="platform/vercel-guide.html">Vercel</a>
                    <a href="platform/platform-comparison.html">Platform Comparison</a>
                </div>
            </div>
            <a href="cold-starts.html" :class="isActive('/cold-starts.html') ? 'active' : ''">Cold Starts</a>
            <a href="about.html" :class="isActive('/about.html') ? 'active' : ''">About</a>
            <a href="faq.html" :class="isActive('/faq.html') ? 'active' : ''">FAQ</a>
        </nav>
    `;
}
