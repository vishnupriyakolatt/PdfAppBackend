// functions/myServerlessFunction.js

const myServerlessFunction = async (event) => {
    try {
      // Your serverless function logic here
  
      // For example:
      const result = await someAsyncOperation();
      return {
        statusCode: 200,
        body: JSON.stringify({ result }),
      };
    } catch (error) {
      console.error("Error in serverless function:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  };
  
  module.exports = myServerlessFunction;
  