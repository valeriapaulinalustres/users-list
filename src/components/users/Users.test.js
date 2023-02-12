import { render, screen } from '@testing-library/react';
import Users from './Users';


beforeEach(()=>{
    render(<Users />)
})

test('should render edit button', () => {
    const btn = screen.getByRole('btnEdit');
    expect(btn).toBeInTheDocument();
  });

// const stubbedUsers = [
//     {
//         address: {
//             city: "Gwenborough",
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             },
//             street: "Kulas Light",
//             suite: "Apt. 556",
//             zipcode: "92998-3874",
//         },
//         company: {
//             bs: "harness real-time e-markets",
//             catchPhrase: "Multi-layered client-server neural-net",
//             name: "Romaguera-Crona",
//         },
//         email: "Sincere@april.biz",
//         id: 1,
//         name: "Leanne Graham",
//         phone: "1-770-736-8031 x56442",
//         username: "Bret",
//         website: "hildegard.org"
//     },
// ];

// const data = async () => {
  
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const responseUsers = await response.json();
//         return responseUsers;
//       } catch (err) {
//         console.log(err);
//       }
//   };

// describe("all users request", () => {
//     it("should return status code 200 and a defined body as response", async () => {
//         // Mock API
//         jest.spyOn(global, "fetch").mockImplementation(() =>
//             Promise.resolve({
//                 json: () =>
//                     Promise.resolve({
//                         status: 200,
//                         data: stubbedUsers,
//                     }),
//             })
//         );

//         const result = await data();

//       //  expect(result.status).toBe(200);
//         expect(result.data[0]).toBe(stubbedUsers);
//     });
// })
