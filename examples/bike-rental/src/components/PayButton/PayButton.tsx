import React, { FC } from "react";
import { Button } from "@mui/material";
import { PayButtonProps } from "../../types";

const PayButton: FC<PayButtonProps> = ({ handlePayment }: PayButtonProps) => {
  return (
    <Button
      variant="contained"
      size="small"
      color="secondary"
      type="button"
      onClick={handlePayment}
    >
      Pay
    </Button>
  );
};

export default PayButton;
