const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37611793-ff698e652459b51eca316bb1c';



export  function getQuery(query, page=1, per_page) {
    const params = new URLSearchParams({
        q: query,
        per_page: per_page,
        page: page,
        orientation: 'horizontal',
        image_type: 'photo'
        }
    )
    return fetch(`${BASE_URL}?key=${API_KEY}&${params}`)
        .then(resp => {
            console.log(resp);
            if (!resp.ok)
                throw new Error('Something went wrong...');
            return resp.json()
        
        })
       
    


}