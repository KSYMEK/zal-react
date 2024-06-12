import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  console.log(query);
  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=f470b7f6&app_key=ff7d26741219ff81dd6d35fd5ad47150`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  return (
    <TextField
      label="Wyszukaj"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
