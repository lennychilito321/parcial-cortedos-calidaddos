describe('CP-AUT-001: Registrar usuario con datos válidos', () => {
  it('Debe redirigir a la pantalla de verificación', () => {
    cy.fixture('datos').then((datos) => {
      // 1. Entramos al login
      cy.visit('https://www.zentaro.business/login'); 
      
      // 2. Hacemos clic en el enlace de registro
      cy.contains('Regístrate aquí').click(); 
      
      // 3. Escribimos en los campos usando los selectores correctos que encontraste
      cy.get('input[name="name"]').type(datos.usuario_nuevo.nombre); // Asumiendo que el nombre es name="name"
      cy.get('input[name="email"]').type(datos.usuario_nuevo.email); // El selector exacto de tu captura
      cy.get('input[name="password"]').type(datos.usuario_nuevo.password); // Asumiendo que contraseña es name="password"
      
      // Aceptamos los términos
      cy.get('input[type="checkbox"]').check({force: true});
      
      cy.contains('Continuar').click();
      
      // 4. Aserción
      cy.contains('Verifica tu correo').should('be.visible');
    });
  });
});