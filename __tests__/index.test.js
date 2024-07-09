const { fetchScienceMuseum } = require('../index.js');

describe('ScienceMuseum', () => {
    test('should ', async () => {
        const peopleData = await fetchScienceMuseum('/search/people')
        peopleData.forEach((res) => {
            expect(res.type).toBe('people');
        })
    });
});