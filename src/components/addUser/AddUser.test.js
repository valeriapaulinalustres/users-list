import { fireEvent, render, screen } from '@testing-library/react';
import AddUser from './AddUser';
//import User from './User'

beforeEach(()=>{
    render(<AddUser />)
})

test('renders tittle', () => {
  const tittle = screen.getByText(/add user/i);
  expect(tittle).toBeInTheDocument();
});


test('should render form Container', () => {
    const formContainer = screen.getByRole('formContainer');
    expect(formContainer).toBeInTheDocument();
  });

  test('should render input for name', () => {
    const input = screen.getByPlaceholderText(/name/i);
    expect(input).toBeInTheDocument();
  });

  test('should render input for phone', () => {
    const input = screen.getByPlaceholderText(/phone/i);
    expect(input).toBeInTheDocument();
  });

  test('should render input for email', () => {
    const input = screen.getByPlaceholderText(/email/i);
    expect(input).toBeInTheDocument();
  });

  it('should render a primary button', () => {
    const btn = screen.getByText("Add");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass('button') 
  });

//   it('should add a new user when clicked', async () => {
//     render(<User />)
//     const btn = screen.getByText("Add");
//     const inputName = screen.getByPlaceholderText(/name/i);
//     fireEvent.change(inputName, {target: {value:'Valeria'}})
//     fireEvent.click(btn)
//     const addedUser = await screen.findByText(/valeria/i)
//     expect(addedUser).toBeInTheDocument();
//   });