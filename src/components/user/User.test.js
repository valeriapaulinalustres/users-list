import { render, screen } from '@testing-library/react';
import User from './User';

//Testing:
//Unit testing:
//✔ renders a user
//event onClick edit button renders form/navigate
//event onClick delete button doesn't render user

describe('renders a user', ()=>{

  const nameProp = "Leanne Graham"
  
  it("matches snapshot (name PROP)", () => {
    const { asFragment } = render(<User prop={nameProp} />);
    expect(asFragment()).toMatchSnapshot();
  });

  const phoneProp = "1-770-736-8031 x56442"
  
  it("matches snapshot (phone PROP)", () => {
    const { asFragment } = render(<User prop={phoneProp} />);
    expect(asFragment()).toMatchSnapshot();
  });

  const mailProp = "Sincere@april.biz"
  
  it("matches snapshot (mail PROP)", () => {
    const { asFragment } = render(<User prop={mailProp} />);
    expect(asFragment()).toMatchSnapshot();
  });



test('should render user Container', async () => {
  render(<User />)
    const userContainer = await screen.findByRole('userContainer');
    expect(userContainer).toBeInTheDocument();
  });

  test('should render a person name', async () => {
    render(<User />)
    const userName = await screen.findByRole(/userName/i)
    expect(userName).toBeInTheDocument();
  });

  test('should render a new card passed as prop', async () => {
    render(<User />)
    const userName = await screen.findByRole(/userName/i)
    expect(userName).toBeInTheDocument();
  });

  
// describe('fetch users', ()=>{
  
//   it('should render the quantity of users', async ()=>{
//     render(<User />)
//     const div = await screen.findByRole(/userContainer/i)
//     expect(div.length).toBe(10)
//   })
// })

})


