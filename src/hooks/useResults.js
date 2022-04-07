import { useEffect, useState, useCallback } from "react";
import { Yelp } from "../api";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = useCallback(async (searchTerm) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage(err.message);
    }
  }, []);

  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return [searchAPI, results, errorMessage];
};
