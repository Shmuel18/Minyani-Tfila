// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form";

// interface FormValues {
//   name: string;
//   phone: string;
//   schoolName: string;
//   address: string;
//   prayerTimes: string;
//   email: string;
//   password: string;
// }

// const RegistrationForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>();

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     // Handle the submitted data here
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>
//         Name:
//         <input {...register("name", { required: "This field is required" })} />
//         {errors.name && <span>{errors.name.message}</span>}
//       </label>

//       <label>
//         Phone:
//         <input
//           {...register("phone", {
//             pattern: { value: /^\d+$/, message: "Please enter numbers only" },
//           })}
//         />
//         {errors.phone && <span>{errors.phone.message}</span>}
//       </label>

//       {/* ... (other fields) */}

//       <label>
//         Email:
//         <input
//           {...register("email", {
//             pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
//           })}
//         />
//         {errors.email && <span>{errors.email.message}</span>}
//       </label>

//       <label>
//         Password:
//         <input
//           type="password"
//           {...register("password", {
//             minLength: {
//               value: 6,
//               message: "Password must be at least 6 characters",
//             },
//           })}
//         />
//         {errors.password && <span>{errors.password.message}</span>}
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default RegistrationForm;

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Grid, Button } from "@mui/material";

interface FormValues {
  name: string;
  phone: string;
  schoolName: string;
  address: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Handle the submitted data here
    console.log(data);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ padding: "20px", mt: 2 }}
    >
      <Grid
        item
        xs={10}
        md={6}
        lg={4}
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            {...register("name", { required: "This field is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            style={{ marginBottom: "10px" }}
          />

          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            {...register("phone", {
              pattern: { value: /^\d+$/, message: "Please enter numbers only" },
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            style={{ marginBottom: "10px" }}
          />

          <TextField
            label="School Name"
            variant="outlined"
            fullWidth
            {...register("schoolName", { required: "This field is required" })}
            error={!!errors.schoolName}
            helperText={errors.schoolName?.message}
            style={{ marginBottom: "10px" }}
          />

          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            {...register("address", { required: "This field is required" })}
            error={!!errors.address}
            helperText={errors.address?.message}
            style={{ marginBottom: "10px" }}
          />

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            {...register("email", {
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            style={{ marginBottom: "10px" }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            {...register("password", {
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            style={{ marginBottom: "10px" }}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
