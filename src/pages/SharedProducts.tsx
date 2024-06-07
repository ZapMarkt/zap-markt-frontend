import { Box, Button, Drawer, TextField } from "@mui/material";
import { CustomAppBar } from "../components/CustomAppBar";
import { SharedProductsTable } from "../components/SharedProductsTable";
import { Layout } from "../shared/Layout";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { SharedProductForm } from "../components/SharedProductForm";

export function SharedProducts() {
  const [openDrawer, setOpenDrawer] = useState(false);

  function toggleDrawer() {
    setOpenDrawer((prev) => !prev);
  }

  return (
    <Layout>
      <CustomAppBar title="Produtos compartilhados" />
      <Box
        marginTop={12.5}
        marginBottom={3.75}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Buscar por produtos"
          InputProps={{
            endAdornment: <SearchRoundedIcon />,
          }}
        />
        <Box
          display="flex"
          gap={2.25}
        >
          <Button
            variant="outlined"
            startIcon={<DriveFolderUploadRoundedIcon />}
          >
            Importar produtos
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawer}
          >
            Novo produto
          </Button>
        </Box>
      </Box>
      <SharedProductsTable />
      <Drawer
        anchor="right"
        open={openDrawer}
        PaperProps={{
          sx: {
            width: "900px",
            padding: 3.75,
          },
        }}
      >
        <SharedProductForm handleClickClose={toggleDrawer} />
      </Drawer>
    </Layout>
  );
}
