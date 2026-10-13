describe('CP-PROD-005 (Defecto): Registrar producto duplicado', () => {
  it('Debería bloquear el registro por nombre duplicado', () => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
      
      cy.contains('Productos').click();
      cy.contains('Nuevo producto').click();
      
      cy.get('input[name="nombre"]').type(datos.producto.nombre); 
      cy.contains('Siguiente').click();
      cy.get('input[name="precio_venta"]').type(datos.producto.precio);
      cy.contains('Guardar').click();
      
      // Lo que ESPERAMOS que pase, pero fallará porque la app permite duplicados
      cy.contains('El producto ya existe').should('be.visible'); 
    });
  });
});