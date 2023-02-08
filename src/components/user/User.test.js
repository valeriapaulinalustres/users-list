import { render, screen } from '@testing-library/react';
import User from './User';

beforeEach(()=>{
    render(<User />)
})

test('should render user Container', async () => {
    const userContainer = await screen.findByRole('userContainer');
    expect(userContainer).toBeInTheDocument();
  });

  test('should render a person name', async () => {
    const userName = await screen.findByRole(/userName/i)
    expect(userName).toBeInTheDocument();
  });