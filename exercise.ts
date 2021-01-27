// https://randomuser.me/api

interface Location {

}

interface Person {
  location: Location;
}

interface ApiResult<T> {

};

// Expected usage: type RandomUserApi = ApiResult<Person>;

// bonus points: actually do a request with node-fetch