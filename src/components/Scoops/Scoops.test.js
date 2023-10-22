   import {findAllByRole,render,screen, } from '@testing-library/react';
  import Scoops from './Scoops';
  import userEvent from '@testing-library/user-event';
  
  /*
   ! Selectors
   ? Command [All] BySelector
  
   * Command > get / find / query
   * get => used if elements exist in the DOM
   * find => if it is not clear when the element will be printed // async
   * query => Used if the element is not in the Dom and will appear according to the condition
  
  
   * Since the find: method is an async method, it should be used together with async await.
   */
  test("For each category coming from the API, a card is printed on the screen.", async () => {
    render(<Scoops />);
  
    // take all images
    const images = await screen.findAllByRole('img', { name: 'various' });
  
   //checking that the number of incoming images is 4
    expect(images).toHaveLength(4);
  });
  
  test('Total change depending on addition and reset in ice cream types ', async () => {
    const user = userEvent.setup();
    render(<Scoops />);
  //get the necessary elements
  
    const total = screen.getByRole('heading', {
      name: /Ice Cream Types Fee: /i,
    });
  
  //get add buttons
    const addBtns = await screen.findAllByRole('button', {
      name: 'ADD',
    });
  
   //pull the reset buttons
    const clearBtns = await screen.findAllByRole('button', {
      name: 'CLEAR',
    });
  
   // When you press the add buttons, the total increases
    await user.click(addBtns[0]);
  
    expect(total).toHaveTextContent('3');
  
   // double click on vanilla's add button.
    await user.dblClick(addBtns[1]);
  
    expect(total).toHaveTextContent('9');
  
   // click on vanilla clear button
    await user.click(clearBtns[1]);
  
    expect(total).toHaveTextContent('3');
  });