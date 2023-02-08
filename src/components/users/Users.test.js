import { render, screen } from '@testing-library/react';
import Users from './Users';

const saludo = "hola"
  
  it("matches snapshot (prop)", () => {
    const { asFragment } = render(<Users country={saludo} />);
  
    expect(asFragment()).toMatchSnapshot();
  });

// beforeEach(()=>{
//     render(<Users />)
// })


//   it('should add a new user when clicked', async () => {
//    
//     const btn = screen.getByText("Add");
//     const inputName = screen.getByPlaceholderText(/name/i);
//     fireEvent.change(inputName, {target: {value:'Valeria'}})
//     fireEvent.click(btn)
//     const addedUser = await screen.findByText(/valeria/i)
//     expect(addedUser).toBeInTheDocument();
//   });