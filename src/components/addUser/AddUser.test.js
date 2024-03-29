import { fireEvent, render, screen } from '@testing-library/react';
import AddUser from './AddUser';

//Testing:
//Unit testing:
//✔ render each input, tittle and button
//✔ render input when event onChange
//X inputs to come back to "" after event click

//Interaction testing:
//event click sends to <User/> the input => see <Users />

  
it("should render the title passed as prop", async () => {
  render(<AddUser addUser={"Add User"} />);
  const title = screen.getByText(/add user/i)
  expect(title).toBeInTheDocument();
});

const addUser = "Add User"

  it("matches snapshot (PROP)", () => {
    const { asFragment } = render(<AddUser addUser={addUser} />);
    expect(asFragment()).toMatchSnapshot();
  });


  beforeEach(()=>{
    render(<AddUser />)
})

test('should render form Container', () => {
    const formContainer = screen.getByRole('formContainer');
    expect(formContainer).toBeInTheDocument();
  });

  describe("should render inputs and button", ()=>{
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

    test('should render button', () => {
      const btn = screen.getByRole(/buttonSubmit/i);
      expect(btn).toBeInTheDocument();
    });

  })

  describe('input events', ()=>{
    test('should be able to type in input', async () => {
      const input = screen.getByPlaceholderText(/name/i);
      fireEvent.change(input, {target: {value: "Valeria"}})
      expect(input.value).toBe("Valeria");
    });


    // test('should be able to clear input when clicked "add user" button', async () => {
    // //  render(<AddUser validateName={()=>{}} onAdd={()=>{}}/>)
    //   const input = screen.getByPlaceholderText(/name/i);
    //   const btn = screen.getByRole('buttonSubmit')
    //   fireEvent.change(input, {target: {value: "Valeria"}})
    //   fireEvent.click(btn)
    //   expect(input.value).toBe("");
    // });

   
  })

 
