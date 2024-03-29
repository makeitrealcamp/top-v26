import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Alert, AlertTitle, Grid, Button } from "@mui/material";
import { useGlobalStore } from "../redux-toolkit/store";
import { Loader } from "../components/Loader";
import { FormBike } from "../components/FormBike";
import { getDiffByHours, formatDate } from "../generalFunctions/date";
import { PRICES_OF_BIKES } from "../contants";
import { Bike } from "../components/Bike";
import { AlertDialog } from "../components/AlertDialog";
import { Info, FormData, InfoRent } from "../types";
import { PayButton } from "../components/PayButton";


const BikePage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [info, setInfo] = useState<Info>({ title: "", content: "" });
  const [infoRent, setInforRent] = useState<InfoRent>();
  const { getOneBike, bikeSelect } = useGlobalStore();
  const { loading, currentBike } = bikeSelect;
  const { title, content } = info;
  const navigate = useNavigate();

  useEffect(() => {
    getOneBike(id);
  }, []);

  const handler = ePayco.checkout.configure({
    key: "4ec1da2ab37a6d0f37fa3d2fc8f01549",
    test: true
  });

  const data = {
    //Parametros compra (obligatorio)
    name: "Pantalon",
    description: "Pantalon",
    invoice: "909092",
    currency: "cop",
    amount: "12000",
    tax_base: "0",
    tax: "0",
    country: "co",
    lang: "en",

    //Onpage="false" - Standard="true"
    external: "false",

    //Atributos cliente
    name_billing: "Andres Perez",
    address_billing: "Carrera 19 numero 14 91",
    type_doc_billing: "cc",
    mobilephone_billing: "3050000000",
    number_doc_billing: "100000000",
  };

  const handlePayment = () => {
    console.log("handle Payment");
    handler.open(data)
  };

  const goToHome = () => {
    navigate("/");
  };

  if (Object.keys(currentBike).length < 1) {
    goToHome();
  }

  if (loading) {
    return <Loader />;
  }

  const openConfirmation = (price: number) => {
    const title = "Rent bike confirmation";
    const content = `Your price to rent a bike is: ${price}USD.`;

    setInfo((prev) => {
      return {
        ...prev,
        title,
        content,
      };
    });
    setOpen(true);
  };

  const handleSubmit = (formData: FormData): void => {
    const { dateStart, dateEnd } = formData;

    const startDate: Date = formatDate(dateStart);
    const endDate: Date = formatDate(dateEnd);
    const diffDays = getDiffByHours(startDate, endDate);
    const currentDay = startDate.getDate();
    const { type } = currentBike;

    // calc price by day
    const priceByDay = currentDay <= 14 ? 10 : 12;

    type Prices = {
      days: number;
      priceByDay: number;
      getPrice: () => number;
    };

    const prices: Prices = PRICES_OF_BIKES[type];
    prices.days = diffDays;
    prices.priceByDay = priceByDay;

    setInforRent({
      ...formData,
      idBike: currentBike.id,
    });
    openConfirmation(prices.getPrice());
  };

  const handleAgree = () => {
    // Save in localstorage
    localStorage.setItem("rent", JSON.stringify(infoRent));
    setSuccess(true);
    setOpen(false);
    //Hide alert after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    handlePayment()
  };

  return (
    <>
      {success && (
        <>
          <Button
            style={{ position: "fixed", top: "10px", left: "10px" }}
            variant="contained"
            size="small"
            color="secondary"
            type="submit"
            onClick={goToHome}
          >
            Back
          </Button>
          <Alert severity="success" variant="filled">
            <AlertTitle>Success</AlertTitle>
            Request saved succesfull!!
          </Alert>
        </>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h2" component="h2" data-cy="title">
            Rent a bike
          </Typography>
          <PayButton handlePayment={handlePayment} />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Bike {...currentBike} />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <FormBike handleSubmit={handleSubmit}/>
        </Grid>
      </Grid>
      {
        <AlertDialog
          open={open}
          setOpen={setOpen}
          title={title}
          content={content}
          handleAgree={handleAgree}
        />
      }
    </>
  );
};

export default BikePage;
