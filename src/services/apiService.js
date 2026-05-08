import axios from 'axios';

// Criação da instância do Axios com configurações básicas
const apiService = axios.create({
  //baseURL: import.meta.env.VITE_API_BASE_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor de Requisição
apiService.interceptors.request.use(
  (config) => {
    // Aqui você pode adicionar lógica antes da requisição ser enviada
    // Exemplo: Adicionar token de autenticação do localStorage ou Pinia
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    console.log(`[Axios Request] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    // Lógica para lidar com erros de requisição
    return Promise.reject(error);
  }
);

// Interceptor de Resposta
apiService.interceptors.response.use(
  (response) => {
    // Qualquer status code que esteja no range de 2xx faz com que esta função seja acionada
    console.log(`[Axios Response] ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    // Qualquer status code que esteja fora do range de 2xx faz com que esta função seja acionada
    if (error.response) {
      // O servidor respondeu com um status de erro (4xx, 5xx)
      console.error(`[Axios Error Response] ${error.response.status}:`, error.response.data);

      // Exemplo de tratamento para erro 401 (Não autorizado)
      if (error.response.status === 401) {
        // Redirecionar para login ou limpar dados de sessão
        // window.location.href = '/login';
      }
    } else if (error.request) {
      // A requisição foi feita mas não houve resposta
      console.error('[Axios Error No Response]:', error.request);
    } else {
      // Algo aconteceu na configuração da requisição que acionou o erro
      console.error('[Axios Error Message]:', error.message);
    }

    return Promise.reject(error);
  }
);

export default apiService;
