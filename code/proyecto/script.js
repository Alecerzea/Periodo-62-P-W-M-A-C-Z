// Función para obtener el token de autenticación
async function login(username, password) {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    const data = await response.json();
    return data.token;
  }
  
  // Función para obtener los datos del dashboard
  async function getDashboardData(token) {
    const response = await fetch('/dashboard', {
      headers: {
        'Authorization': token
      }
    });
  
    const data = await response.json();
    return data;
  }
  
  // Ejemplo de uso
  async function initializeDashboard() {
    const username = 'tu_usuario';
    const password = 'tu_contraseña';
  
    try {
      const token = await login(username, password);
      const dashboardData = await getDashboardData(token);
  
      // Aquí puedes utilizar los datos para crear los gráficos en el dashboard
      console.log(dashboardData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  initializeDashboard();
  