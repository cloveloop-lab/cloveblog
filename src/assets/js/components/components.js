// assets/js/components/components.js

// Função para determinar os caminhos base
function getBasePaths() {
    // Verifica se estamos em uma subpasta ou na raiz
    const isSubfolder = window.location.pathname.includes('/pages/');
    
    return {
        home: isSubfolder ? '../index.html' : 'index.html',
        pricing: isSubfolder ? '../pages/pricing.html' : 'pages/pricing.html',
        pages: isSubfolder ? './' : 'pages/',
        assets: isSubfolder ? '../assets/' : 'assets/',
        images: isSubfolder ? '../assets/images/' : 'assets/images/'
    };
}

// Função para gerar o header com os caminhos   corretos
function generateHeader() {
    const paths = getBasePaths();
    
    return `
        <nav class="nav">
            <div class="nav-container">
                <a href="${paths.home}" class="nav-logo">
                    <img src="${paths.images}/logos/logo-dark.svg" alt="Cloveloop logo" class="nav-logo-img" width="200" height="50">
                </a>
                <div class="nav-links">
                    <a href="${paths.home}#work">Portfolio</a>
                    <a href="${paths.pages}pricing.html">Pricing</a>
                    <a href="${paths.home}#services">Services</a>
                    <a href="${paths.home}#contact">Contact</a>
                    <div class="nav-buttons">
                        <a href="${paths.pages}client-area.html" class="nav-secondary">Client Area</a>
                        <a href="${paths.home}#contact" class="nav-cta">Start Project</a>
                    </div>
                </div>
                <button class="nav-toggle" aria-label="Switch navigation menu">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `;
}

// Função para gerar o footer com os caminhos corretos
function generateFooter() {
    const paths = getBasePaths();
    
    return `
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>
                        <img src="${paths.images}/logos/logo-dark.svg" alt="Cloveloop logo" class="nav-logo-img" width="200" height="50">
                    </h3>
                    <p>Turning ideas into memorable digital experiences.</p>
                    <div class="footer-links">
                    <a href="mailto:hello@cloveloop.com">hello@cloveloop.com</a>
                </div>
                </div>
                <div class="footer-links">
                    <h4>Cloveloop</h4>
                    <a href="${paths.pages}pricing.html">Pricing</a>
                    <a href="${paths.pages}case-studies.html">Case Studies</a>
                    <a href="${paths.pricing}#faq">FAQ</a>
                </div>
                <div class="footer-links">
                    <h4>Company</h4>
                    <a href="${paths.pages}about.html">About us</a>
                    <a href="${paths.pages}portfolio.html">Portfolio</a>
                    <a href="${paths.pages}blog.html">Blog</a>
                </div>
                <div class="footer-links">
                    <h4>Services</h4>
                    <a href="${paths.pages}services/landing-pages.html">Landing Pages</a>
                    <a href="${paths.pages}services/business-websites.html">Business Websites</a>
                    <a href="${paths.pages}services/portfolio-sites.html">Portfolio Sites</a>
                </div>
                <div class="footer-links">
                    <h4>Legal</h4>
                    <a href="${paths.pages}services/landing-pages.html">Terms of Use</a>
                    <a href="${paths.pages}services/business-websites.html">Privacy Policy</a>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="powered-by">
                    <span>Powered by</span>
                    <a href="https://dokstack.netlify.app" target="_blank" class="dockstack-badge" aria-label="Powered by DokStack">
                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 110.63 23.81">
                            <defs>
                                <style>
                                .cls-1 {
                                    fill: #2d2d51;
                                }

                                .cls-2 {
                                    fill: url(#linear-gradient-2);
                                    opacity: .7;
                                }

                                .cls-2, .cls-3 {
                                    isolation: isolate;
                                }

                                .cls-3 {
                                    fill: url(#linear-gradient);
                                    opacity: .9;
                                }
                                </style>
                                <linearGradient id="linear-gradient" x1="-619.59" y1="394.99" x2="-619.41" y2="394.81" gradientTransform="translate(-59260.66 -24169.36) rotate(-180) scale(95.67 -61.24)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#6a11cb"/>
                                <stop offset="1" stop-color="#2575fc"/>
                                </linearGradient>
                                <linearGradient id="linear-gradient-2" x1="-619.68" y1="395.21" x2="-619.39" y2="394.92" gradientTransform="translate(-59260.66 -24183.12) rotate(-180) scale(95.67 -61.24)" xlink:href="#linear-gradient"/>
                            </defs>
                            <g id="Layer_1-2" data-name="Layer 1">
                                <g>
                                <g>
                                    <path class="cls-3" d="M11.95,21.03c-.76,1.69-2.43,2.78-4.28,2.78H3.51C-3.63,23.81.18,11.9,14.46,5.95c13.17-5.49,2.37,4.2-2.51,15.08Z"/>
                                    <path class="cls-2" d="M11.95,2.78c-.76-1.69-2.43-2.78-4.28-2.78H3.51C-3.63,0,.18,11.9,14.46,17.85c13.17,5.49,2.37-4.2-2.51-15.08Z"/>
                                </g>
                                <g>
                                    <path class="cls-1" d="M39.55,4.6c.12,0,.19.05.19.16v14.06c0,.12-.06.18-.19.18h-3.06c-.12,0-.18-.06-.18-.18v-.17s-.02-.05-.05-.06c-.03-.01-.06-.01-.09,0-.9.5-1.86.75-2.89.75-1.6,0-2.97-.56-4.11-1.68-1.14-1.12-1.71-2.47-1.71-4.05s.57-2.94,1.71-4.06c1.14-1.12,2.51-1.69,4.11-1.69,1.04,0,2,.26,2.89.77.03.01.06.01.09,0,.03-.01.05-.04.05-.08v-3.79c0-.11.06-.16.18-.16h3.06ZM33.83,16.24c.71,0,1.31-.26,1.78-.77.47-.51.71-1.14.71-1.87s-.24-1.36-.71-1.86-1.06-.76-1.78-.76-1.38.26-1.89.77c-.51.51-.77,1.13-.77,1.85s.26,1.34.77,1.86c.52.52,1.15.78,1.89.78Z"/>
                                    <path class="cls-1" d="M41.99,9.56c1.14-1.12,2.51-1.68,4.11-1.68s2.98.56,4.11,1.68c1.14,1.12,1.71,2.47,1.71,4.05s-.57,2.94-1.71,4.06c-1.14,1.12-2.51,1.69-4.11,1.69s-2.98-.56-4.11-1.69c-1.14-1.12-1.71-2.48-1.71-4.06s.57-2.94,1.71-4.05ZM44.32,15.38c.49.49,1.09.73,1.79.73s1.29-.24,1.79-.73.75-1.08.75-1.77-.25-1.28-.75-1.77c-.5-.49-1.1-.73-1.79-.73s-1.29.24-1.79.73c-.5.49-.74,1.08-.74,1.77s.25,1.28.74,1.77Z"/>
                                    <path class="cls-1" d="M58.77,13.61l3.08,5.13c.03.05.02.11-.01.18-.03.06-.09.1-.16.1h-3.55c-.07,0-.11-.03-.14-.08l-1.76-3.29c-.04-.08-.11-.11-.2-.09s-.14.08-.14.17v3.13c0,.11-.05.16-.16.16h-3.09c-.11,0-.16-.05-.16-.16V4.76c0-.11.05-.16.16-.16h3.09c.11,0,.16.05.16.16v6.57c0,.09.05.15.14.18s.16,0,.2-.1l1.76-3.28c.03-.05.07-.08.14-.08h3.55c.07,0,.12.03.16.09s.04.12.02.17l-3.08,5.13c-.04.05-.04.11,0,.16Z"/>
                                    <path class="cls-1" d="M68.14,12.72c.24.11.46.24.68.38.21.15.46.35.73.6s.48.55.63.91c.15.36.22.73.21,1.13-.03.38-.12.79-.29,1.22-.33.69-.85,1.23-1.57,1.62-.72.39-1.54.59-2.48.59-.26,0-.53-.01-.81-.04-.86-.09-1.59-.31-2.21-.66-.63-.44-1.11-1.04-1.43-1.8-.03-.04-.03-.09,0-.14.03-.05.07-.08.13-.1l2.99-.64c.08-.03.14,0,.19.06.19.29.45.45.77.49.36.04.63-.02.81-.19.12-.12.18-.27.16-.43-.03-.2-.13-.36-.31-.49-.18-.13-.56-.34-1.14-.62h-.02c-.34-.17-.62-.31-.83-.41-.24-.09-.45-.2-.65-.31h-.02s-.07-.05-.08-.06c-1.05-.59-1.66-1.31-1.82-2.15-.07-.36-.05-.73.06-1.12s.22-.67.33-.84c.11-.17.21-.33.31-.47.24-.26.5-.49.81-.68.95-.59,2.05-.82,3.31-.69.75.09,1.41.3,1.98.61.28.13.53.3.77.49.41.38.67.84.79,1.38.03.11-.01.18-.12.2l-2.96.59c-.09.03-.17,0-.21-.1-.11-.26-.32-.41-.64-.45-.28-.03-.5.04-.67.2-.11.13-.15.27-.12.41.09.3.55.62,1.36.95.26.11.47.19.63.25.25.09.5.19.74.28Z"/>
                                    <path class="cls-1" d="M76.92,16.15c.05,0,.1.02.13.07.03.04.05.09.05.15l-.39,2.58c-.01.09-.07.14-.16.14-.9.05-1.46.08-1.7.08h-.04c-.94-.04-1.65-.29-2.13-.76s-.73-1.13-.73-1.98v-5.27c0-.11-.06-.17-.18-.17h-1.14c-.11,0-.16-.06-.16-.18v-2.58c0-.12.05-.18.16-.18h1.14c.12,0,.18-.06.18-.17v-3c0-.12.06-.18.17-.18h3.08c.11,0,.16.06.16.18v3c0,.11.06.17.17.17h1.13c.12,0,.18.06.19.18v2.58c0,.12-.06.18-.19.18h-1.13c-.11,0-.17.06-.17.17v3.69c-.01.53.06.89.23,1.08.17.15.42.23.75.22h.58Z"/>
                                    <path class="cls-1" d="M89.22,8.06c.12,0,.19.05.19.16v10.61c0,.12-.06.18-.19.18h-3.06c-.12,0-.18-.06-.18-.18v-.17s-.02-.05-.05-.06c-.03-.01-.06-.01-.09,0-.89.5-1.86.75-2.89.75-1.6,0-2.97-.56-4.11-1.68s-1.71-2.47-1.71-4.05.57-2.94,1.71-4.06,2.51-1.69,4.11-1.69c1.04,0,2,.26,2.89.77.03.01.06.01.09,0,.03-.01.05-.04.05-.08v-.33c0-.11.06-.16.18-.16h3.06ZM83.5,16.24c.71,0,1.31-.26,1.78-.77.47-.51.71-1.14.71-1.87s-.24-1.36-.71-1.86c-.47-.5-1.06-.76-1.78-.76s-1.38.26-1.89.77c-.51.51-.77,1.13-.77,1.85s.26,1.34.77,1.86c.51.52,1.15.78,1.89.78Z"/>
                                    <path class="cls-1" d="M100.67,16.38c.09.05.11.13.06.24-.13.2-.23.33-.28.41-.11.13-.23.27-.35.41-.04.04-.1.1-.19.19-.01.01-.02.03-.02.04-.04.04-.09.09-.16.14-.03.01-.05.04-.08.08-.03.01-.06.04-.09.07-.87.71-1.86,1.15-2.97,1.32h-.11c-.05.01-.1.02-.14.02-.07.01-.14.02-.21.02h-.34c-1.6,0-2.97-.56-4.11-1.68s-1.71-2.47-1.71-4.05.57-2.94,1.71-4.06,2.51-1.69,4.11-1.69c.08,0,.17,0,.26.02h.08c.07,0,.14,0,.21.02h.14s.08.02.11.02c1.12.16,2.11.6,2.97,1.32.01,0,.03,0,.05.02.02.01.03.03.04.04.03.03.05.06.08.09.05.05.11.1.16.14h0s.01.03.01.04c.07.05.12.11.17.16v.02s.02.01.02.01c.12.13.24.27.35.41.11.13.21.29.3.45.04.07.03.13-.04.18l-1.57.89-.9.51c-.09.05-.17.04-.22-.04-.54-.8-1.23-1.2-2.07-1.2s-1.51.31-2.05.94c-.44.48-.67,1.05-.66,1.7,0,.65.22,1.2.66,1.67.54.63,1.22.95,2.05.96.84,0,1.53-.4,2.07-1.2.05-.09.13-.11.22-.06l2.42,1.4Z"/>
                                    <path class="cls-1" d="M107.54,13.61l3.08,5.13c.03.05.02.11-.01.18-.03.06-.09.1-.16.1h-3.55c-.07,0-.11-.03-.14-.08l-1.76-3.29c-.04-.08-.11-.11-.2-.09s-.14.08-.14.17v3.13c0,.11-.05.16-.16.16h-3.09c-.11,0-.16-.05-.16-.16V4.76c0-.11.05-.16.16-.16h3.09c.11,0,.16.05.16.16v6.57c0,.09.05.15.14.18s.16,0,.2-.1l1.76-3.28c.03-.05.07-.08.14-.08h3.55c.07,0,.12.03.16.09s.04.12.02.17l-3.08,5.13c-.04.05-.04.11,0,.16Z"/>
                                </g>
                                </g>
                            </g>
                            </svg>
                    </a>
                </div>
                <p>&copy; 2025 Cloveloop. All rights reserved.</p>
            </div>
        </div>
    `;
}

const COMPONENTS = {
    header: generateHeader(),
    footer: generateFooter(),
};