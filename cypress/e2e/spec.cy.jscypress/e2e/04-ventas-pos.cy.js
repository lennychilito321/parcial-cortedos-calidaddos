describe('Módulo M-005 / M-007: Ventas y Punto de Venta', () => {

  beforeEach(() => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
      cy.contains(/ventas|pos/i).click();
    });
  });

  // CP-VENT-001
  it('CP-VENT-001: Registrar venta con productos disponibles', () => {
    cy.contains(/nueva venta|pos/i).click();
    cy.get('.producto-card, table tbody tr').first().click();
    cy.contains(/completar venta|pagar/i).click();
    cy.contains(/venta realizada|éxito/i).should('be.visible');
  });

  // CP-VENT-002
  it('CP-VENT-002: Registrar venta sin seleccionar productos', () => {
    cy.contains(/nueva venta|pos/i).click();
    cy.contains(/completar venta|pagar/i).click();
    cy.contains(/seleccione al menos un producto|carrito vacío/i).should('be.visible');
  });

  // CP-VENT-003
  it('CP-VENT-003: Registrar venta con cantidad válida', () => {
    cy.get('.producto-card').first().click();
    cy.get('input[name="cantidad"]').clear().type('3');
    cy.contains(/completar venta|pagar/i).click();
    cy.contains(/venta realizada/i).should('be.visible');
  });

  // CP-VENT-004
  it('CP-VENT-004: Intentar vender más unidades que las disponibles', () => {
    cy.get('.producto-card').first().click();
    cy.get('input[name="cantidad"]').clear().type('9999');
    cy.contains(/completar venta|pagar/i).click();
    cy.contains(/supera el stock/i).should('be.visible');
  });

  // CP-VENT-005
  it('CP-VENT-005: Generar comprobante de una venta válida', () => {
    cy.get('table tbody tr').first().contains(/ver comprobante|recibo/i).click();
    cy.contains(/comprobante de venta|factura/i).should('be.visible');
  });

  // CP-VENT-006
  it('CP-VENT-006: Verificar que el total de la venta sea correcto', () => {
    cy.get('.producto-card').first().click();
    cy.get('.subtotal').then(($subtotal) => {
      const val = $subtotal.text();
      cy.get('.total-factura').should('contain', val);
    });
  });
});