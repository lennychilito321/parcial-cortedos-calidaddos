describe('CP-INV-005 (Defecto): Registrar cantidad negativa', () => {
  it('Debería mostrar validación de error con números negativos', () => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
      
      cy.contains('Productos').click();
      cy.contains(datos.producto.nombre).click();
      cy.contains('Ajustar stock').click();
      
      cy.get('input[type="number"]').clear().type('-3');
      cy.contains('Confirmar ajuste').click();
      
      // Lo que ESPERAMOS que pase, pero fallará porque la app lo convierte a positivo
      cy.contains('La cantidad no puede ser negativa').should('be.visible');
    });
  });
});