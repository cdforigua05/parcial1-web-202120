export const getRow = (objeto) => `
    <th scope="row">${objeto.index}</th>
    <td>${objeto.first_player}</td>
    <td>${objeto.second_player}</td>
`;