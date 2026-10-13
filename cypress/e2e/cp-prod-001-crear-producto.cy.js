describe('CP-PROD-001: Crear producto con información válida', () => {
  it('Debe crear el producto y mostrarlo en el listado', () => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
      
      cy.contains('Productos').click(); 
      cy.contains('Nuevo producto').click();
      
      cy.get('input[name="nombre"]').type(datos.producto.nombre); // VERIFICAR: ajusta el selector si es necesario
      cy.contains('Siguiente').click();
      
      cy.get('input[name="precio_venta"]').type(datos.producto.precio);
      cy.get('input[name="stock_actual"]').type(datos.producto.stock);
      cy.contains('Guardar').click();
      
      cy.contains('Producto creado').should('be.visible');
    });
  });
});