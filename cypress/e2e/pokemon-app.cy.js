// cypress/e2e/pokemon-app.cy.js

describe('Pokémon App', () => {
    beforeEach(() => {
      // Visit the application before each test
      cy.visit('http://localhost:4200');
    });
  
    it('should display a list of Pokémon', () => {
      // Check if the list of Pokémon is visible
      cy.get('li').should('have.length.greaterThan', 0);
    });
  
    it('should check Pokémon details ++', () => {
      // Click on the first Pokémon in the list
      cy.get('.pokemon-link').first().click();
  
      // Verify that the Pokémon details page is displayed
      cy.url().should('include', '/pokemon');
      cy.get('h2').should('exist');
    // });
  
    // it('should display Pokémon sprite in the details view', () => {
      // Click on the first Pokémon in the list
      // cy.get('a').first().click();
  
      // Verify that the sprite is visible
      cy.get('img[alt$="sprite"]').should('be.visible');
    // });
  
    // it('should display Pokémon types in the details view', () => {
      // Click on the first Pokémon in the list
      // cy.get('a').first().click();
  
      // Verify that Pokémon types are displayed
      cy.get('div').contains('Type:').next().should('not.be.empty');
    // });
  
    // it('should display Pokémon abilities in the details view', () => {
      // Click on the first Pokémon in the list
      // cy.get('a').first().click();
  
      // Zweryfikuj, że lista umiejętności (Abilities) jest wyświetlana
      cy.contains('Abilities') // znajdź element z tekstem 'Abilities'
      .next('ul')            // przejdź do następnego elementu typu <ul>
      .find('li')            // znajdź wszystkie elementy <li> w tym <ul>
      .should('have.length.greaterThan', 0); // upewnij się, że jest ich więcej niż 0
    // });
  
    // it('should display Pokémon base stats in the details view', () => {
      // Click on the first Pokémon in the list
      // cy.get('a').first().click();
  
      // Verify that base stats are displayed
      cy.contains('Base Stats')
      .next()
      .find('li')
      .should('have.length.greaterThan', 0);
    });
  });
  