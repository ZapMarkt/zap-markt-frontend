import { Box, Drawer } from "@mui/material";
import { CustomAppBar } from "../components/CustomAppBar";
import { SharedProductsTable } from "../components/SharedProductsTable";
import { Layout } from "../shared/Layout";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import { useState } from "react";
import { SharedProductForm } from "../components/SharedProductForm";
import { IoSearch } from "react-icons/io5";
import { Button, TextField } from "../components";

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
          placeholder="Buscar por produtos"
          endIcon={() => <IoSearch size={24} />}
        />
        <Box
          display="flex"
          gap={2.25}
        >
          <Button
            variant="secondary"
            startIcon={() => <DriveFolderUploadRoundedIcon />}
          >
            Importar produtos
          </Button>
          <Button onClick={toggleDrawer}>Novo produto</Button>
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
