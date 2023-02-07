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

//   test('should render input for phone', () => {
//     render(<AddUser />);
//     const input = screen.getByPlaceholderText(/phone/i);
//     expect(input).toBeInTheDocument();
//   });

//   test('should render input for email', () => {
//     render(<AddUser />);
//     const input = screen.getByPlaceholderText(/email/i);
//     expect(input).toBeInTheDocument();
//   });

//   it('should render a primary button', () => {
//     render(<AddUser />);
//     const btn = screen.getByText("Add");
//     expect(btn).toBeInTheDocument();
//     expect(btn).toHaveClass('button')
//   });