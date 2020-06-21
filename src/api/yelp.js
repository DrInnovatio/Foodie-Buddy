import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer opye6_xCkf31dzueEXlMnnZ7imvJ6eNIeB-2zvFwwQUvtEljYq2cgf-mjKlORLzI1wD3KnN9UQVYwhCvWONEqI5fYFSd9JBi5qyH5WVIk3HrLmTj8Nv_VEeFb9TpXnYx'
  }
});

 