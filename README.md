# orgaaa

## Dependencies
```
-Node
-Express
```

### Prerequisites

```
Example:
- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/)
```

### Installation

Step-by-step installation instructions, including any configuration needed.

```
Steps:
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a .env file and add your environment variables.
4. Start the server with `npm start` or `nodemon index`
```

### API Testing
To prepare testing requests for each of your API routes using Postman, you can create requests for each route as follows:

1. **Search Products**:

   - URL: `http://localhost:5000/api/product/searchProducts`
   - Method: GET
   - Headers: (if needed)
   - Params: (if you have query parameters, e.g., `searchTerm`)
   
2. **Get Products By Category**:

   - URL: `http://localhost:5000/api/product/getProductsByCategory/:category`
   - Method: GET
   - Headers: (if needed)
   - Params: Replace `:category` with an actual category value in the URL.

3. **Get Products By Price Range**:

   - URL: `http://localhost:5000/api/product/getProductsByPriceRange`
   - Method: GET
   - Headers: (if needed)
   - Params: (if you have query parameters, e.g., `minPrice` and `maxPrice`)
   
4. **Get Product Count**:

   - URL: `http://localhost:5000/api/product/getProductCount`
   - Method: GET
   - Headers: (if needed)
   - Params: (if you have any query parameters)

5. **Get Featured Products**:

   - URL: `http://localhost:5000/api/product/getFeaturedProducts`
   - Method: GET
   - Headers: (if needed)
   - Params: (if you have any query parameters)

6. **Get Newest Products**:

   - URL: `http://localhost:5000/api/product/getNewestProducts`
   - Method: GET
   - Headers: (if needed)
   - Params: (if you have any query parameters)

7. **Get Top Selling Products**:

   - URL: `http://localhost:5000/api/product/getTopSellingProducts`
   - Method: GET
   - Headers: (if needed)
   - Params: (if you have any query parameters)

Make sure to replace `:category`, `:id`, and other placeholders with actual values when sending the requests. You can also add any necessary headers, request body, or query parameters based on your API's requirements.

These Postman requests should allow you to test your API routes for different functionalities.