import 'cypress-react-selector';

import {
  productsResponse,
} from '../../fixtures/market';
import { binanceRestApiEndpoint } from './config';

Cypress.Commands.add('mockBinanceMarketList', (response = productsResponse) => {
  cy.route({
    method: 'GET',
    url: `${binanceRestApiEndpoint}*`,
    response,
    status: 200,
    delay: 2000,
  }).as('market');
});

Cypress.Commands.add('mockInitialData', () => {
  cy.server();
  cy.mockBinanceMarketList();
});