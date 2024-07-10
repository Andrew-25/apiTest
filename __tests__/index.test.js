const { fetchScienceMuseum, fetchVam } = require('../index.js');

describe.skip('ScienceMuseum', () => {
    test('should get everything of type people with "/search/people" ', async () => {
        const peopleData = await fetchScienceMuseum('/search/people')
        peopleData.forEach((res) => {
            expect(res.type).toBe('people');
        })
        expect(peopleData.length).toBe(50);
    });
    test('should work for objects and documents too', async () => {
        const objectsData = await fetchScienceMuseum('/search/objects')
        objectsData.forEach((res) => {
            expect(res.type).toBe('objects');
        })
        const docsData = await fetchScienceMuseum('/search/documents')
        docsData.forEach((res) => {
            expect(res.type).toBe('documents');
        })
    });
    test('should be able to get specific responses by the id', async () => {
        const getObject = await fetchScienceMuseum('/objects/co34119')
        expect(getObject.id).toBe('co34119');
        
        const getPerson = await fetchScienceMuseum('/people/cp100979')
        expect(getPerson.id).toBe('cp100979');

        const getDocument = await fetchScienceMuseum('/documents/aa110067102')
        expect(getDocument.id).toBe('aa110067102');
    }), 20000;
});

describe('Victoria and Albert', () => {
    test('should return requested object', async () => {
        const data = await fetchVam('/museumobject/O828146')
        expect(data.record.systemNumber).toBe('O828146');
    });
});