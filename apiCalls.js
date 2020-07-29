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
              seasonDates
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
            seasonDates
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

// Registering a new user
export const registerFetchCall = async (data) => {
  const url = "https://find-my-market-api.herokuapp.com/users/register";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const userData = await response.json();
    return await tokenCall(data);
  } catch (error) {
    console.log("error", error);
  }
};

// Taken Call for register fetch call
export const tokenCall = async (data) => {
  const url = "https://find-my-market-api.herokuapp.com/login/token";
  let formData = new FormData();
  formData.append("username", data.email);
  formData.append("password", data.password);
  try {
    let response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    let token = await response.json();
    return await tokenResolver(token);
  } catch (error) {
    console.log("error", error);
  }
};

const tokenResolver = async (token) => {
  const url = "https://find-my-market-api.herokuapp.com/login/token_check";
  try {
    let user = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token["access_token"]}`,
      },
    });
    let newUser = await user.json();
    return await newUser;
  } catch (error) {
    console.log("error", error);
  }
};
