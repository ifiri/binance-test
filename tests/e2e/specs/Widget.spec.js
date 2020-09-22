describe ('Widget', () => {
  beforeEach(() => {
    cy.mockInitialData();
    cy.visit('/');
    cy.waitForReact();
  });

  it ('should render controls and table', () => {
    cy.react('WidgetPairsSwitcher').should('have.length', 1);

    cy.react('Radio', {
      props: {
        value: 'btc'
      }
    }).should('exist');

    cy.react('Radio', {
      props: {
        value: 'bnb'
      }
    }).should('exist');

    cy.react('RadioDropdown', {
      props: {
        defaultValue: 'alts'
      }
    }).should('exist');

    cy.react('WidgetSocketControls').should('have.length', 1);
    cy.react('WidgetPairsTable').should('have.length', 1);
    
    cy.react('HeaderCell').eq(0).should('have.text', 'Pair');
    cy.react('HeaderCell').eq(1).should('have.text', 'Last Price');
  });

  it('should load markets data', () => {
    cy.react('WidgetPairsTable', {
      props: {
        loading: true,
      },
    }).should('exist');

    cy.getReact('WidgetPairsTable').getProps('data').should('have.length', 0);
    
    cy.wait('@market');

    cy.getReact('WidgetPairsTable').getProps('data').should('have.length', 4);
  });

  describe('filtering', () => {
    beforeEach(() => {
      cy.wait('@market');
    });

    it('should search', () => {
      cy.getReact('WidgetPairsTable').getProps('data').should('have.length', 4);

      cy.react('Input', {
        props: {
          name: 'search',
        },
      }).eq(0).type('neo');

      cy.getReact('WidgetPairsTable').getProps('data').should('have.length', 1);
    });

    it('should filter', () => {
      cy.getReact('WidgetPairsTable').getProps('data').should('have.length', 4);

      cy.react('Dropdown').eq(0).click();
      cy.react('Dropdown').eq(0).get('li').eq(1).click();

      cy.getReact('WidgetPairsTable').getProps('data').should('have.length', 1);
    });
  });
});
