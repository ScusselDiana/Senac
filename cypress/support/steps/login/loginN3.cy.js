// Login feature steps
Given("Eu acesso o site", () => {
    cy.visit(Cypress.env('baseUrl'));
  });
  
  When("Eu faço login com {string} e {string}", (email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  Then("Eu devo ser redirecionado para a página de dashboard", () => {
    cy.url().should('include', '/dashboard');
  });
  
  Then("Eu devo ver o nome do usuário {string}", (username) => {
    cy.get('#user-name').should('contain', username);
  });
  
  // Settings page
  When("Eu navego para a página de configurações", () => {
    cy.get('a[href="/settings"]').click();
  });
  
  Then("Eu devo ver a seção de configurações", () => {
    cy.get('#settings-header').should('contain', 'Configurações');
  });
  
  // Logout
  When("Eu clico no botão de logout", () => {
    cy.get('#logout-button').click();
  });
  
  Then("Eu devo ser redirecionado para a página de login", () => {
    cy.url().should('include', '/login');
  });
  
  // Update profile
  When("Eu atualizo meu perfil", () => {
    cy.get('#profile-link').click();
    cy.get('#name-input').clear().type('Novo Nome');
    cy.get('#save-button').click();
  });
  
  Then("Eu devo ver a mensagem de sucesso {string}", (message) => {
    cy.get('#flash-messages').should('be.visible').and('contain', message);
  });
  
  // Edit item
  When("Eu edito um item na lista", () => {
    cy.get('table tr').first().find('.edit-button').click();
    cy.get('#item-name-input').clear().type('Novo Nome do Item');
    cy.get('#save-item-button').click();
  });
  
  Then("Eu devo ver o item atualizado na lista", () => {
    cy.get('table tr').first().should('contain', 'Novo Nome do Item');
  });
  