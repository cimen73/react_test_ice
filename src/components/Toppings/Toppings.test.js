import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toppings from './Toppings';

test("Changes made to the basket state of SOS cards", async () => {
  render(<Toppings />);

  const user = userEvent.setup();
//call aggregate header
  const total = screen.getByRole('heading', {
    name: /Sauces Fee:/i,
  });

//getting cherry input
  const cherryCheck = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });

  const mochiCheck = await screen.findByRole('checkbox', {
    name: /mochi/i,
  });

// add one of the sauces
  await user.click(mochiCheck);

//checking the new value of the sum
  expect(total).toHaveTextContent(2);

// add one of the sauces
  await user.click(cherryCheck);

//checking the new value of the sum
  expect(total).toHaveTextContent(4);

// remove one of the sauces
  await user.click(mochiCheck);
//checking the new value of the sum
  expect(total).toHaveTextContent(2);
});