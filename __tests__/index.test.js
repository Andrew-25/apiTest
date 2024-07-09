const { fetchScienceMuseum } = require('../index.js');

const urlSearch = '/search/museum/Science%20Museum?page[number]=2';


describe('ScienceMuseum', () => {
    test('should ', async () => {
        
        await fetchScienceMuseum(urlSearch)
        expect(urlSearch).toBe('/search/museum/Science%20Museum?page[number]=2');
    });
});