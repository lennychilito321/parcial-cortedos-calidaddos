describe('Módulos Complementarios: Clientes, Proveedores, Gastos y Reportes', () => {

  beforeEach(() => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
    });
  });

  // --- CLIENTES (M-008) ---
  it('CP-CLI-001: Registrar cliente con información válida', () => {
    cy.fixture('datos').then((datos) => {
      cy.contains('Clientes').click();
      cy.contains(/nuevo cliente/i).click();
      cy.get('input[name="nombre"]').type(datos.cliente.nombre);
      cy.get('input[name="email"]').type(datos.cliente.email);
      cy.get('input[name="telefono"]').type(datos.cliente.telefono);
      cy.contains(/guardar/i).click();
      cy.contains(datos.cliente.nombre).should('be.visible');
    });
  });

  // --- PROVEEDORES (M-009) ---
  it('CP-PROV-001: Registrar proveedor válido', () => {
    cy.fixture('datos').then((datos) => {
      cy.contains('Proveedores').click();
      cy.contains(/nuevo proveedor/i).click();
      cy.get('input[name="nombre"]').type(datos.proveedor.nombre);
      cy.get('input[name="nit"]').type(datos.proveedor.nit);
      cy.contains(/guardar/i).click();
      cy.contains(datos.proveedor.nombre).should('be.visible');
    });
  });

  // --- GASTOS (M-010) ---
  it('CP-GAS-001: Registrar gasto válido', () => {
    cy.fixture('datos').then((datos) => {
      cy.contains('Gastos').click();
      cy.contains(/nuevo gasto/i).click();
      cy.get('input[name="concepto"]').type(datos.gasto.concepto);
      cy.get('input[name="monto"]').type(datos.gasto.monto);
      cy.contains(/guardar/i).click();
      cy.contains(datos.gasto.concepto).should('be.visible');
    });
  });

  // --- REPORTES (M-011) ---
  it('CP-REP-001: Consultar reporte con información disponible', () => {
    cy.contains('Reportes').click();
    cy.contains(/reporte de caja|movimientos/i).click();
    cy.get('table, .chart-container').should('be.visible');
  });
});