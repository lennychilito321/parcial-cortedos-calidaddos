describe('CP-VENT-001: Registrar venta con productos disponibles', () => {
  it('Debe registrar la venta exitosamente', () => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
      
      cy.contains('Ventas').click();
      cy.get('.producto-card').first().click(); // VERIFICAR: Ajustar la clase de la tarjeta de producto
      cy.contains('Completar venta').click();
      cy.contains('Cobrar').click();
      
      cy.contains('¡Venta registrada!').should('be.visible');
    });
  });
});