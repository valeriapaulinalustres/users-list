import { fireEvent, render, screen } from '@testing-library/react';
import AddUser from './AddUser';



// test('renders tittle', () => {
//   const tittle = screen.getByText(/add user/i);
//   expect(tittle).toBeInTheDocument();
// });


const addUserProp = "Add User"
  
  it("matches snapshot (PROP)", () => {
    const { asFragment } = render(<AddUser addUserProp={addUserProp} />);
    expect(asFragment()).toMatchSnapshot();
  });

  beforeEach(()=>{
    render(<AddUser />)
})

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

  // it('should render a primary button', () => {
  //   const btn = screen.getByText("Add User");
  //   expect(btn).toBeInTheDocument();
  //   expect(btn).toHaveClass('button') 
  // });
