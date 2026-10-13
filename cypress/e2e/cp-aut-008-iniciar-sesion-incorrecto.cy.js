describe('CP-AUT-008: Iniciar sesión con contraseña incorrecta', () => {
  it('Debe mostrar alerta de credenciales incorrectas', () => {
    cy.fixture('datos').then((datos) => {
      cy.visit('/login');
      cy.get('input[type="email"]').type(datos.usuario_registrado.email);
      cy.get('input[type="password"]').type('ClaveFalsa123');
      cy.contains('Iniciar sesión').click();
      cy.contains('Email o contraseña incorrectos').should('be.visible');
    });
  });
});