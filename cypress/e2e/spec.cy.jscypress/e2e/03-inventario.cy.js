describe('Módulo M-004: Control de Inventario', () => {

  beforeEach(() => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
      cy.contains('Inventario').click();
    });
  });

  // CP-INV-001
  it('CP-INV-001: Consultar inventario con productos registrados', () => {
    cy.get('table').should('be.visible');
    cy.get('table tbody tr').should('have.length.greaterThan', 0);
  });

  // CP-INV-002
  it('CP-INV-002: Registrar entrada válida de producto', () => {
    cy.contains(/nueva entrada|ingreso/i).click();
    cy.get('select[name="producto_id"]').select(1);
    cy.get('input[name="cantidad"]').type('10');
    cy.contains(/guardar|registrar/i).click();
    cy.contains(/entrada registrada|éxito/i).should('be.visible');
  });

  // CP-INV-003
  it('CP-INV-003: Registrar salida válida de producto', () => {
    cy.contains(/nueva salida|egreso/i).click();
    cy.get('select[name="producto_id"]').select(1);
    cy.get('input[name="cantidad"]').type('2');
    cy.contains(/guardar|registrar/i).click();
    cy.contains(/salida registrada|éxito/i).should('be.visible');
  });

  // CP-INV-004
  it('CP-INV-004: Registrar cantidad cero en inventario', () => {
    cy.contains(/nueva entrada|ingreso/i).click();
    cy.get('input[name="cantidad"]').type('0');
    cy.contains(/guardar|registrar/i).click();
    cy.contains(/la cantidad debe ser mayor a cero/i).should('be.visible');
  });

  // CP-INV-005
  it('CP-INV-005: Registrar cantidad negativa en inventario', () => {
    cy.contains(/nueva entrada|ingreso/i).click();
    cy.get('input[name="cantidad"]').type('-5');
    cy.contains(/guardar|registrar/i).click();
    cy.contains(/inválido|positivo/i).should('be.visible');
  });

  // CP-INV-006
  it('CP-INV-006: Intentar retirar más unidades que las disponibles', () => {
    cy.contains(/nueva salida|egreso/i).click();
    cy.get('select[name="producto_id"]').select(1);
    cy.get('input[name="cantidad"]').type('999999');
    cy.contains(/guardar|registrar/i).click();
    cy.contains(/stock insuficiente|cantidad no disponible/i).should('be.visible');
  });
});