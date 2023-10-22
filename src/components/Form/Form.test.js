import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event/';

test('Button activation based on confirmation of conditions', async () => {
  render(<Form />);

  // Installing user.
  const user = userEvent.setup();

 //get required elements
  const termsCheck = screen.getByRole('checkbox', {
    name: 'I have read and accept the terms',
  });

  const orderBtn = screen.getByRole('button', {
    name: /confirm order/i,
  });

 //controlling whether the button is inactive
  expect(orderBtn).toBeDisabled();

 //checking that checkbox is not ticked.
  expect(termsCheck).not.toBeChecked();

// Click the checkbox and check that the button is active.
  await user.click(termsCheck);
  expect(orderBtn).toBeEnabled();

 // remove the tick and check that the button is inactive.
  await user.click(termsCheck);
  expect(orderBtn).toBeDisabled();
});

test('Notification when mouse hovers over the confirm button.', async () => {
  render(<Form />);

  const user = userEvent.setup();

  // checbox call
  const termsCheck = screen.getByRole('checkbox', {
    name: 'I have read and accept the terms',
  });

  // button call
  const button = screen.getByRole('button', {
    name: /confirm order/i,
  });

  //   checbox click
  await user.click(termsCheck);

// move the mouse over the button.
  fireEvent.mouseEnter(button);

  // call notification
  const popup = screen.getByText(
    " We won't actually deliver anything to you"
  );

 // Is the notification visible?
  expect(popup).toBeVisible();

 // pull the mouse over
  fireEvent.mouseLeave(button);

//checking that the button is not visible
  expect(popup).not.toBeVisible();
});