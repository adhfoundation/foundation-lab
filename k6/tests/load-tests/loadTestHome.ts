import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10, // Número de usuários virtuais simultâneos
    duration: '30s', // Tempo de execução do teste
};

export default function () {
    // Acessa a página principal
    const resHome = http.get('https://afya.com.br');
    check(resHome, {
        'Página inicial - status 200': (r) => r.status === 200,
    });

    // Acessa a página "Quem Somos"
    const resQuemSomos = http.get('https://www.afya.com.br/sobre/quem-somos');
    check(resQuemSomos, {
        'Quem Somos - status 200': (r) => r.status === 200,
    });

    sleep(1);
}