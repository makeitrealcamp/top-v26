import React, { FC, useState } from "react";
import { Card, CardContent, TextField, Button, Stack } from "@mui/material";
import { FormBikeProps, FormData } from "../../types";

const FormBike: FC<FormBikeProps> = ({ handleSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    dateStart: "",
    dateEnd: "",
  });

  const { username, email, phone, dateStart, dateEnd } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Card>
        <CardContent>
          <Stack spacing={0} direction="row" sx={{ marginBottom: 0 }}>
            <TextField
              data-testid="username"
              color="secondary"
              label="Name"
              name="username"
              type="text"
              size="small"
              value={username}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              data-testid="phone"
              color="secondary"
              label="Phone"
              name="phone"
              type="number"
              size="small"
              value={phone}
              onChange={handleChange}
              fullWidth
              required
            />
          </Stack>
        </CardContent>

        <CardContent>
          <TextField
            data-testid="email"
            color="secondary"
            label="Email"
            name="email"
            type="email"
            size="small"
            value={email}
            onChange={handleChange}
            fullWidth
            required
          />
        </CardContent>

        <CardContent>
          <Stack
            spacing={0}
            direction="row"
            justifyContent="space-around"
            sx={{ marginBottom: 0 }}
          >
            <TextField
              data-testid="dateStart"
              type="date"
              name="dateStart"
              variant="outlined"
              color="secondary"
              size="small"
              label="Start date"
              onChange={handleChange}
              value={dateStart}
              fullWidth
              required
              sx={{ mb: 4 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              data-testid="dateEnd"
              type="date"
              name="dateEnd"
              color="secondary"
              size="small"
              label="Start date"
              onChange={handleChange}
              value={dateEnd}
              placeholder=""
              fullWidth
              required
              sx={{ mb: 4 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </CardContent>

        <CardContent>
          <Button variant="outlined" color="secondary" type="submit">
            Rent
          </Button>
        </CardContent>
      </Card>
    </form>
  );
};

export default FormBike;
