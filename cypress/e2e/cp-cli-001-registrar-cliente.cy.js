describe('CP-CLI-001: Registrar cliente con información válida', () => {
  it('Debe guardar el cliente correctamente', () => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
      
      cy.contains('Clientes').click();
      cy.contains('Nuevo Cliente').click();
      
      cy.get('input[placeholder="Nombre completo"]').type(datos.cliente.nombre);
      cy.get('input[placeholder="Teléfono"]').type(datos.cliente.telefono);
      cy.get('input[placeholder="Número documento"]').type(datos.cliente.documento);
      
      cy.contains('Guardar cliente').click();
      
      cy.contains(datos.cliente.nombre).should('be.visible');
    });
  });
});