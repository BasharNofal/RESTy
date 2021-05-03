import { render, screen } from '@testing-library/react';
import Data from '../Data.js';
describe('=================DATA=================', () => {
  test('Should render star wars list', () => {
    const people = [
      {
        name: 'Luke Skywalker',
        url: 'http://swapi.dev/api/people/1/',
      },
      {
        name: 'Darth Vader',
        url: 'http://swapi.dev/api/people/4/',
      },
    ];
    render(<Data prompt={people} />);
    const name1 = screen.getAllByLabelText('name');
    console.log(name1);
    expect(name1[0]).toHaveTextContent('Luke Skywalker');
    // expect(items[0]).toContainHTML(
    //   '<a href="http://swapi.dev/api/people/1/">Luke Skywalker</a>'
    // );
  
    // expect(items[1]).toHaveTextContent('Darth Vader');
    // expect(items[1]).toContainHTML(
    //   '<a href="http://swapi.dev/api/people/4/">Darth Vader</a>'
    // );
  });
})