

const fetchScienceMuseum = async (urlSearch) => {
    const url = 'https://collection.sciencemuseumgroup.org.uk';
    
    fetch(`${url}${urlSearch}`, { headers: { Accept: 'application/json' } })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(new Error(res.status + ' Failed to fetch results'));
        }
      })
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.error(err);
      });
}

module.exports = {fetchScienceMuseum}