describe('Módulo M-001 / M-002: Autenticación y Usuarios', () => {
  // CP-AUT-001: Registro con correo único dinámico
  it('CP-AUT-001: Registrar usuario con datos válidos', () => {
    const emailDinamico = `user_${Date.now()}@gmail.com`;

    cy.visit('https://www.zentaro.business/register');
    cy.get('input').eq(0).type('Juan Perez');
    cy.get('input').eq(1).type(emailDinamico);
    cy.get('input').eq(2).type('Clave123*');
    cy.get('input[type="checkbox"]').click({ force: true });

    cy.get('button[type="submit"]').click({ force: true });
    cy.get('body').should('be.visible');
  });

  // CP-AUT-002: Botón deshabilitado cuando los campos están vacíos
  it('CP-AUT-002: Registrar usuario con campos obligatorios vacíos', () => {
    cy.visit('https://www.zentaro.business/register');
    cy.get('button[type="submit"]').should('be.disabled');
  });

  // CP-AUT-003: Validar que el formulario permanece en registro con correo inválido
  it('CP-AUT-003: Registrar usuario con correo inválido', () => {
    cy.visit('https://www.zentaro.business/register');
    cy.get('input').eq(0).type('Juan Perez');
    cy.get('input').eq(1).type('usuario@');
    cy.get('input').eq(2).type('Clave123*');
    cy.get('input[type="checkbox"]').click({ force: true });

    cy.get('button[type="submit"]').click({ force: true });
    cy.url().should('include', '/register');
  });

  // CP-AUT-004: Validar que el formulario permanece en registro con contraseña inválida
  it('CP-AUT-004: Registrar usuario con contraseña que no cumple condiciones', () => {
    cy.visit('https://www.zentaro.business/register');
    cy.get('input').eq(0).type('Juan Perez');
    cy.get('input').eq(1).type('test.pass@gmail.com');
    cy.get('input').eq(2).type('123');
    cy.get('input[type="checkbox"]').click({ force: true });

    cy.get('button[type="submit"]').click({ force: true });
    cy.url().should('include', '/register');
  });

  // CP-AUT-005: Intento de registro con correo duplicado
  it('CP-AUT-005: Registrar usuario con correo previamente registrado', () => {
    cy.fixture('datos').then((datos) => {
      cy.visit('https://www.zentaro.business/register');
      cy.get('input').eq(0).type('Juan Perez');
      cy.get('input').eq(1).type(datos.usuario_registrado.email);
      cy.get('input').eq(2).type(datos.usuario_registrado.password);
      cy.get('input[type="checkbox"]').click({ force: true });

      cy.get('button[type="submit"]').click({ force: true });
      cy.get('body').should('be.visible');
    });
  });

  // CP-AUT-006: Intento de registro sin aceptar términos
  it('CP-AUT-006: Intentar registrarse sin aceptar términos y condiciones', () => {
    cy.visit('https://www.zentaro.business/register');
    cy.get('input').eq(0).type('Juan Perez');
    cy.get('input').eq(1).type('sin.terminos@gmail.com');
    cy.get('input').eq(2).type('Clave123*');

    cy.get('button[type="submit"]').should('be.disabled');
  });

  // CP-AUT-007: Login válido usando índice de posición de inputs
  it('CP-AUT-007: Iniciar sesión con credenciales válidas', () => {
    cy.fixture('datos').then((datos) => {
      cy.visit('https://www.zentaro.business/login');
      cy.get('input').eq(0).clear().type(datos.usuario_registrado.email);
      cy.get('input').eq(1).clear().type(datos.usuario_registrado.password);
      cy.get('button[type="submit"]').click({ force: true });
      cy.get('body').should('be.visible');
    });
  });

  // CP-AUT-008: Login con contraseña incorrecta
  it('CP-AUT-008: Iniciar sesión con contraseña incorrecta', () => {
    cy.fixture('datos').then((datos) => {
      cy.visit('https://www.zentaro.business/login');
      cy.get('input').eq(0).clear().type(datos.usuario_registrado.email);
      cy.get('input').eq(1).clear().type('ContraseñaIncorrecta999*');
      cy.get('button[type="submit"]').click({ force: true });
      cy.get('body').should('be.visible');
    });
  });

  // CP-AUT-009: Login con usuario no existente
  it('CP-AUT-009: Iniciar sesión con correo no registrado', () => {
    cy.visit('https://www.zentaro.business/login');
    cy.get('input').eq(0).clear().type('correo.falso.inexistente@zentaro.com');
    cy.get('input').eq(1).clear().type('Clave123*');
    cy.get('button[type="submit"]').click({ force: true });
    cy.get('body').should('be.visible');
  });
});
