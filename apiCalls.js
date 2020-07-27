export const searchNavOnSubmit = (data, setLocation, setMarketsNearMe) => {
  let url = "https://us-farmers-markets-api.herokuapp.com/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query($city: String!, $state: String!){ marketsByCity(city: $city, state: $state, radius: 50) {
            latitude 
            longitude
            markets {
              marketname
              latitude
              longitude
              website
              distance
              season1date
              season1time
              street
              city
              state
              zip
              fmid 
              products { name }
          }
        }
        }`,
      variables: {
        city: data.city,
        state: data.state,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA", data);
      setLocation({
        coords: {
          latitude: data.data.marketsByCity.latitude,
          longitude: data.data.marketsByCity.longitude,
        },
      });
      setMarketsNearMe(data.data.marketsByCity.markets);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
// Setting markets based off the hook:location
export const getMarketsNearby = (
  location,
  setMarketsNearMe,
  setFilteredProducts,
  filteredProducts
) => {
  let url = "https://us-farmers-markets-api.herokuapp.com/";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query($lat: Float!, $lng: Float!, $radius: Int!, $products: [String!]){ marketsByCoords(lat: $lat, lng: $lng, radius: $radius, products: $products ) { 
            location 
            markets {
            fmid 
            marketname
            latitude
            longitude
            website
            distance
            season1date
            season1time
            street
            city
            state
            zip
            products {
                name
            }
            }
        }
    }`,
      variables: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
        radius: 40,
        products: filteredProducts || [],
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      setMarketsNearMe(data.data.marketsByCoords.markets);
      setFilteredProducts([]);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
