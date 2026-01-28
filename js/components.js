/**
 * torres - Componentes JavaScript
 * =================================
 */

/**
 * Modal Component
 */
class Modal {
    constructor(options = {}) {
        this.options = {
            closeOnBackdrop: true,
            closeOnEscape: true,
            animation: true,
            ...options
        };
        this.modal = null;
        this.isOpen = false;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen && this.options.closeOnEscape) {
                this.close();
            }
        });
    }

    open(content, title = '') {
        this.modal = document.createElement('div');
        this.modal.className = 'modal-overlay';
        this.modal.innerHTML = `
            <div class="modal-container">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button class="modal-close" aria-label="Fechar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div class="modal-body">${content}</div>
            </div>
        `;

        document.body.appendChild(this.modal);
        document.body.style.overflow = 'hidden';

        // Event listeners
        this.modal.querySelector('.modal-close').addEventListener('click', () => this.close());
        
        if (this.options.closeOnBackdrop) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.close();
            });
        }

        // Animate in
        requestAnimationFrame(() => {
            this.modal.classList.add('active');
        });

        this.isOpen = true;
    }

    close() {
        if (!this.modal) return;

        this.modal.classList.remove('active');
        
        setTimeout(() => {
            this.modal.remove();
            document.body.style.overflow = '';
            this.isOpen = false;
        }, 300);
    }
}

/**
 * Toast Notifications
 */
class Toast {
    constructor() {
        this.container = null;
        this.init();
    }

    init() {
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
    }

    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icons = {
            success: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
            error: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
            warning: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
            info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
        };

        toast.innerHTML = `
            <span class="toast-icon">${icons[type] || icons.info}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close">×</button>
        `;

        this.container.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            this.hide(toast);
        });

        // Auto hide
        if (duration > 0) {
            setTimeout(() => this.hide(toast), duration);
        }
    }

    hide(toast) {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }

    success(message, duration) {
        this.show(message, 'success', duration);
    }

    error(message, duration) {
        this.show(message, 'error', duration);
    }

    warning(message, duration) {
        this.show(message, 'warning', duration);
    }

    info(message, duration) {
        this.show(message, 'info', duration);
    }
}

/**
 * Tabs Component
 */
class Tabs {
    constructor(container) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        if (!this.container) return;
        
        this.tabs = this.container.querySelectorAll('[data-tab]');
        this.panels = this.container.querySelectorAll('[data-panel]');
        
        this.init();
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                this.activate(target);
            });
        });
    }

    activate(target) {
        this.tabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === target);
        });

        this.panels.forEach(panel => {
            panel.classList.toggle('active', panel.dataset.panel === target);
        });
    }
}

/**
 * Accordion Component
 */
class Accordion {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        if (!this.container) return;

        this.options = {
            multiple: false,
            ...options
        };

        this.items = this.container.querySelectorAll('.accordion-item');
        this.init();
    }

    init() {
        this.items.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', () => this.toggle(item));
        });
    }

    toggle(item) {
        const isOpen = item.classList.contains('active');

        if (!this.options.multiple) {
            this.items.forEach(i => i.classList.remove('active'));
        }

        item.classList.toggle('active', !isOpen);
    }
}

/**
 * Dropdown Component
 */
class Dropdown {
    constructor(trigger, options = {}) {
        this.trigger = typeof trigger === 'string' ? document.querySelector(trigger) : trigger;
        if (!this.trigger) return;

        this.options = {
            closeOnClick: true,
            ...options
        };

        this.menu = this.trigger.nextElementSibling;
        this.isOpen = false;
        this.init();
    }

    init() {
        this.trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle();
        });

        document.addEventListener('click', () => this.close());

        if (this.options.closeOnClick) {
            this.menu.addEventListener('click', () => this.close());
        }
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.menu.classList.add('active');
        this.trigger.setAttribute('aria-expanded', 'true');
        this.isOpen = true;
    }

    close() {
        this.menu.classList.remove('active');
        this.trigger.setAttribute('aria-expanded', 'false');
        this.isOpen = false;
    }
}

/**
 * Counter Animation
 */
class Counter {
    constructor(element, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        if (!this.element) return;

        this.options = {
            duration: 2000,
            start: 0,
            end: parseInt(this.element.dataset.target) || 100,
            suffix: this.element.dataset.suffix || '',
            prefix: this.element.dataset.prefix || '',
            ...options
        };

        this.started = false;
    }

    start() {
        if (this.started) return;
        this.started = true;

        const { start, end, duration, suffix, prefix } = this.options;
        const range = end - start;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;

        const timer = setInterval(() => {
            current += 1;
            this.element.textContent = prefix + current + suffix;
            
            if (current >= end) {
                clearInterval(timer);
                this.element.textContent = prefix + end + suffix;
            }
        }, stepTime);
    }
}

// Adiciona estilos dos componentes
const componentStyles = document.createElement('style');
componentStyles.textContent = `
    /* Modal Styles */
    .modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s;
        padding: 1rem;
    }
    .modal-overlay.active { opacity: 1; }
    .modal-container {
        background: white;
        border-radius: 16px;
        max-width: 500px;
        width: 100%;
        max-height: 90vh;
        overflow: auto;
        transform: scale(0.9);
        transition: transform 0.3s;
    }
    .modal-overlay.active .modal-container { transform: scale(1); }
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        border-bottom: 1px solid #e2e8f0;
    }
    .modal-title { font-size: 1.25rem; font-weight: 700; }
    .modal-close {
        background: none;
        border: none;
        cursor: pointer;
        color: #64748b;
        transition: color 0.3s;
    }
    .modal-close:hover { color: #0f172a; }
    .modal-body { padding: 1.5rem; }

    /* Toast Styles */
    .toast-container {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 2000;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .toast {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        transform: translateX(120%);
        transition: transform 0.3s;
    }
    .toast.show { transform: translateX(0); }
    .toast-success { border-left: 4px solid #22c55e; }
    .toast-error { border-left: 4px solid #ef4444; }
    .toast-warning { border-left: 4px solid #fbbf24; }
    .toast-info { border-left: 4px solid #3b82f6; }
    .toast-close {
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        color: #94a3b8;
        margin-left: auto;
    }
`;
document.head.appendChild(componentStyles);

// Exporta para uso global
window.Modal = Modal;
window.Toast = new Toast();
window.Tabs = Tabs;
window.Accordion = Accordion;
window.Dropdown = Dropdown;
window.Counter = Counter;
