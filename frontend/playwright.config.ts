import { defineConfig } from '@playwright/test';
import path from 'path';

export default defineConfig({
    use: {
        headless: true, // Executa o navegador em modo headless
        viewport: { width: 1280, height: 720 },
        browserName: 'chromium',
    },
    testDir: path.resolve(__dirname, './src/tests'), // Caminho dinâmico
});