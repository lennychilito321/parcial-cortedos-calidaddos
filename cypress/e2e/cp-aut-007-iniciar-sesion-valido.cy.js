describe('CP-AUT-007: Iniciar sesión con credenciales válidas', () => {
  it('Debe ingresar al panel principal', () => {
    cy.fixture('datos').then((datos) => {
      cy.login(datos.usuario_registrado.email, datos.usuario_registrado.password);
    });
  });
});