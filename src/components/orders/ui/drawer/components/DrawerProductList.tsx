import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import FeijaoKikaldoPreto from "../../../../../assets/feijao-preto-kicaldo.jpeg";
import Tomate from "../../../../../assets/tomate.jpeg";
import { Order, Product } from "../../../../../types/Order";
import { formatCurrency } from "../../../../../utils/formatCurrency";
import { formatQuantity } from "../../../../../utils/formatQuantity";
import ChangeQuantityModal from "./ChangeQuantityModal";

interface DrawerProductListProps {
  selectedOrder: Order | null;
}

const dataProductList: Product[] = [
  {
    id: 1,
    nome: "Feijão Preto Kicaldo",
    valor: 13.7,
    img: FeijaoKikaldoPreto,
    quantidade: 2,
    unidade: "un",
  },
  {
    id: 2,
    nome: "Tomate",
    valor: 8.7,
    img: Tomate,
    quantidade: 1200,
    unidade: "kg",
  },
];

const DrawerProductList: React.FC<DrawerProductListProps> = ({ selectedOrder }) => {
  const [productStates, setProductStates] = useState<
    Record<number, { anchorEl: null | HTMLElement; open: boolean }>
  >({});

  const statusDisabled =
    selectedOrder?.status === "Pendente" ||
    selectedOrder?.status === "Rota de entrega" ||
    selectedOrder?.status === "Concluído" ||
    selectedOrder?.status === "Cancelado";

  const [openModalQuantify, setOpenModalQuantify] = useState(false);
  const handleOpenModalQuantify = () => {
    setOpenModalQuantify(true);
    setProductStates((prevState) =>
      Object.fromEntries(
        Object.entries(prevState).map(([key, state]) => [key, { ...state, open: false }])
      )
    );
  };

  const handleCloseModalQuantify = () => setOpenModalQuantify(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>, product: Product) => {
    setProductStates((prevState) => ({
      ...prevState,
      [product.id]: {
        anchorEl: event.currentTarget,
        open: true,
      },
    }));
  };

  const handleClose = (product: Product) => {
    setProductStates((prevState) => ({
      ...prevState,
      [product.id]: {
        ...prevState[product.id],
        open: false,
      },
    }));
  };

  return (
    <Box>
      {dataProductList.map((product) => (
        <Box
          key={product.id}
          padding={"10px 0"}
          display={"flex"}
          gap={"8px"}
          alignItems={"center"}
          borderBottom={"thin solid rgba(0, 0, 0, 0.12)"}
        >
          <Box
            width={98}
            height={98}
            borderRadius={"5px"}
            bgcolor={"#FFFFFF"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src={product.img}
              alt="Feijão Kikaldo Preto"
              height={"100%"}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Typography
              color={"#110B0A"}
              fontSize={"20px"}
              lineHeight={1.2}
              fontWeight={500}
            >
              {product.nome}
            </Typography>
            <Typography
              color={"primary"}
              fontSize={"18px"}
              lineHeight={1.2}
              fontWeight={500}
            >
              {formatCurrency(product.valor)}
            </Typography>
          </Box>
          <Typography
            color={"#110B0A"}
            fontSize={"20px"}
            lineHeight={1.2}
            fontWeight={500}
            marginLeft={"auto"}
          >
            {formatQuantity(product)}
          </Typography>
          <Box>
            <IconButton
              aria-label={`more-${product.id}`}
              id={`long-button-${product.id}`}
              aria-controls={
                productStates[product.id]?.open ? `long-menu-${product.id}` : undefined
              }
              aria-expanded={productStates[product.id]?.open ? "true" : undefined}
              aria-haspopup="true"
              onClick={(event) => handleClick(event, product)}
              disabled={statusDisabled}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id={`long-menu-${product.id}`}
              MenuListProps={{
                "aria-labelledby": `long-button-${product.id}`,
              }}
              anchorEl={productStates[product.id]?.anchorEl}
              open={productStates[product.id]?.open || false}
              onClose={() => handleClose(product)}
              sx={{ left: "-23px" }}
              tabIndex={product.id - 1}
            >
              <MenuItem
                sx={{
                  padding: "10px",
                  display: " flex",
                  gap: "10px",
                  color: "#909090",
                }}
                onClick={handleOpenModalQuantify}
              >
                <LooksOneOutlinedIcon />
                <Typography
                  color={"#909090"}
                  fontSize={"18px"}
                  fontWeight={400}
                >
                  Alterar quantidade
                </Typography>
              </MenuItem>
              <MenuItem
                sx={{
                  padding: "10px",
                  display: " flex",
                  gap: "10px",
                  color: "#909090",
                }}
              >
                <DeleteForeverOutlinedIcon />
                <Typography
                  color={"#909090"}
                  fontSize={"18px"}
                  fontWeight={400}
                >
                  Cancela produto
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      ))}

      <ChangeQuantityModal
        open={openModalQuantify}
        onClose={handleCloseModalQuantify}
      />
    </Box>
  );
};

export default DrawerProductList;
