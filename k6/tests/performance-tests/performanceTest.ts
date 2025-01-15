import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 100,          // Número de usuários virtuais simultâneos
    duration: '30s',    // Duração do teste
    thresholds: {
        'http_req_duration': ['p(95)<2000'], // 95% das requisições devem ter duração inferior a 2 segundos
    },
};

// Função que o k6 irá executar. Deve ser exportada como 'default'
export default function () {
    // Acessa a página principal
    const resHome = http.get('https://afya.com.br');
    check(resHome, {
        'Página inicial - status 200': (r) => r.status === 200,   // Verifica se a resposta da página inicial tem status 200
        'Página inicial - tempo de resposta < 2s': (r) => r.timings.duration < 2000,  // Verifica se a duração da requisição é menor que 2 segundos
    });

    // Acessa a página "Quem Somos"
    const resQuemSomos = http.get('https://www.afya.com.br/sobre/quem-somos');
    check(resQuemSomos, {
        'Quem Somos - status 200': (r) => r.status === 200,   // Verifica se a resposta da página "Quem Somos" tem status 200
        'Quem Somos - tempo de resposta < 2s': (r) => r.timings.duration < 2000,  // Verifica se a duração da requisição é menor que 2 segundos
    });

    sleep(1);
}