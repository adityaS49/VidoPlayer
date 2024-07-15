import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/Constants";
import styles from "./Style.module.css"
const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
  className={styles.sideBar}
    direction="row"
    sx={{
      padding:"5px",
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className={styles.categoryBtn}
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "grey",
          color: "black",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "grey", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8", fontSize:"16px" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;