import SearchBar from "../components/SearchBar/SearchBar";


const apiKey='IpRomzGKu4rqYco2VleUSHpP79o5ek9wRiu8ZHzQex9mVdVbN0w1tWKhSRHwf8tg5LrBn3ng_vKw7H-MO0vqoBKOdcVh0tpwPSgq8mQV3w201hDz3x_4ZKUGwk2TXXYx';
const Yelp= { 
searchYelp(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers:{Authorization:`Bearer ${apiKey}`}}).then(response=>{
        return response.json()
    }).then(jsonResponse=>{
        if(jsonResponse.businesses){
            return jsonResponse.businesses.map(business=>{
                return{
                    id: business.id,
                    imageSrc: business.image_url,
                    url: business.url,
                    name: business.name,
                    adress: business.location.adress,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count

                }
            })
        }
    })
}
};

export default Yelp;