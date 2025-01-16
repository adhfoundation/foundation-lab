import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: true, // Mostra o navegador
        viewport: { width: 1280, height: 720 }, // Tamanho da janela do navegador
        browserName: 'chromium', // 'chromium', 'firefox' ou 'webkit'
    },
    testDir: './src/tests',
});