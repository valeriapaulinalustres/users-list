import { fireEvent, render, screen } from '@testing-library/react';
import AddUser from './AddUser';


const addUserProp = "Add User"
  
  it("matches snapshot (PROP)", () => {
    const { asFragment } = render(<AddUser addUserProp={addUserProp} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // describe("AddUser component", () => {
  //   const mockChangeValue = jest.fn();
  //   const stubbedSearchValue = {
  //     name: "Valeria",
  //     phone: "123456",
  //     email: "va@gmail.com",
  //   };
  
  //   it("shows all required input fields with empty values", () => {
  //     const { getByTestId } = render(
  //       <AddUser
  //         searchValue={stubbedSearchValue}
  //         onAdd={mockChangeValue}
  //       />
  //     );
  
  //   //  expect(screen.getAllByPlaceholderText(/name/i).name.value).toBe("Valeria");
  //      expect(getByTestId("filter-input-phone").value).toBe("123456");
  //      expect(getByTestId("filter-input-email").value).toBe("va@gmail.com");
  //   });
  // })

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
