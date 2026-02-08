// import React, { useState } from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   Card,
//   CardContent,
//   Stack,
// } from "@mui/material";

// import { createJob } from "../services/JobService";

// const CATEGORY_OPTIONS = ["OPT", "STEM OPT", "Non-OPT"];
// const WORKSPACE_OPTIONS = ["Chicago", "Remote", "Hybrid", "On-site", ""];
// const EMPLOYMENT_TYPES = ["Full-time", "F-1 OPT", "F-1 STEM OPT"];

// export default function CreateJob() {
//   const [form, setForm] = useState({
//     title: "",
//     location: "",
//     category: "",
//     workspace: "",
//     employmentType: "",
//     roleOverview: "",
//     keyResponsibilities: [""],
//     requiredQualifications: [""],
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleArrayChange = (field, index, value) => {
//     const updated = [...form[field]];
//     updated[index] = value;
//     setForm({ ...form, [field]: updated });
//   };

//   const addField = (field) =>
//     setForm({ ...form, [field]: [...form[field], ""] });

//   const handleSubmit = async () => {
//     try {
//       await createJob(form);
//       alert("Job created successfully");
//     } catch (err) {
//       alert("Failed to create job");
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ mt: 4 }}>
//       <Card>
//         <CardContent>
//           <Typography variant="h5" mb={3}>
//             Create Job
//           </Typography>

//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6}>
//               <TextField fullWidth label="Job Title" name="title" onChange={handleChange} />
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <TextField fullWidth label="Location" name="location" onChange={handleChange} />
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <TextField select fullWidth label="Category" name="category" onChange={handleChange}>
//                 {CATEGORY_OPTIONS.map((o) => (
//                   <MenuItem key={o} value={o}>{o}</MenuItem>
//                 ))}
//               </TextField>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <TextField select fullWidth label="Workspace" name="workspace" onChange={handleChange}>
//                 {WORKSPACE_OPTIONS.map((o) => (
//                   <MenuItem key={o} value={o}>{o}</MenuItem>
//                 ))}
//               </TextField>
//             </Grid>

//             <Grid item xs={12} md={4}>
//               <TextField select fullWidth label="Employment Type" name="employmentType" onChange={handleChange}>
//                 {EMPLOYMENT_TYPES.map((o) => (
//                   <MenuItem key={o} value={o}>{o}</MenuItem>
//                 ))}
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 multiline
//                 rows={3}
//                 label="Role Overview"
//                 name="roleOverview"
//                 onChange={handleChange}
//               />
//             </Grid>

//             {/* Responsibilities */}
//             <Grid item xs={12}>
//               <Typography fontWeight={600}>Responsibilities</Typography>
//               {form.keyResponsibilities.map((item, i) => (
//                 <Stack key={i} direction="row" spacing={1} mt={1}>
//                   <TextField
//                     fullWidth
//                     value={item}
//                     onChange={(e) =>
//                       handleArrayChange("keyResponsibilities", i, e.target.value)
//                     }
//                   />
//                 </Stack>
//               ))}
//               <Button onClick={() => addField("keyResponsibilities")}>
//                 + Add Responsibility
//               </Button>
//             </Grid>

//             {/* Qualifications */}
//             <Grid item xs={12}>
//               <Typography fontWeight={600}>Qualifications</Typography>
//               {form.requiredQualifications.map((item, i) => (
//                 <Stack key={i} direction="row" spacing={1} mt={1}>
//                   <TextField
//                     fullWidth
//                     value={item}
//                     onChange={(e) =>
//                       handleArrayChange("requiredQualifications", i, e.target.value)
//                     }
//                   />
//                 </Stack>
//               ))}
//               <Button onClick={() => addField("requiredQualifications")}>
//                 + Add Qualification
//               </Button>
//             </Grid>
//           </Grid>

//           <Button sx={{ mt: 4 }} variant="contained" onClick={handleSubmit}>
//             Create Job
//           </Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }
import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  Stack,
  Switch,
  FormControlLabel,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

import { createJob, getJobFormOptions } from "../services/JobService";

export default function CreateJob() {
  /* =======================
     FORM STATE
  ======================= */
  const [form, setForm] = useState({
    title: "",
    location: "",
    category: "",
    workspace: "",
    employmentType: "",
    roleOverview: "",
    keyResponsibilities: [""],
    requiredQualifications: [""],
    isActive: true,
  });

  /* =======================
     VALIDATION STATE
  ======================= */
  const [errors, setErrors] = useState({});

  /* =======================
     SNACKBAR
  ======================= */
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  /* =======================
     OPTIONS
  ======================= */
  const [options, setOptions] = useState({
    categories: [],
    workspaces: [],
    employmentTypes: [],
  });

  const [loadingOptions, setLoadingOptions] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  /* =======================
     LOAD OPTIONS
  ======================= */
  useEffect(() => {
    getJobFormOptions()
      .then((res) => {
        const data = res.data;

        setOptions({
          categories: data.categories || [],
          workspaces: data.workspaces || [],
          employmentTypes: data.employmentTypes || [],
        });

        setForm((prev) => ({
          ...prev,
          category: data.categories?.[0] || "",
          workspace: data.workspaces?.[0] || "",
          employmentType: data.employmentTypes?.[0] || "",
        }));
      })
      .finally(() => setLoadingOptions(false));
  }, []);

  /* =======================
     HANDLERS
  ======================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...form[field]];
    updated[index] = value;
    setForm({ ...form, [field]: updated });
  };

  const addField = (field) => {
    setForm({ ...form, [field]: [...form[field], ""] });
  };

  /* =======================
     VALIDATION LOGIC
  ======================= */
  const validateForm = () => {
    const newErrors = {};

    if (!form.title.trim()) newErrors.title = "Job title is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.workspace) newErrors.workspace = "Workspace is required";
    if (!form.employmentType)
      newErrors.employmentType = "Employment type is required";
    if (!form.roleOverview.trim())
      newErrors.roleOverview = "Role overview is required";

    if (
      form.keyResponsibilities.filter((v) => v.trim()).length === 0
    ) {
      newErrors.keyResponsibilities =
        "At least one responsibility is required";
    }

    if (
      form.requiredQualifications.filter((v) => v.trim()).length === 0
    ) {
      newErrors.requiredQualifications =
        "At least one qualification is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* =======================
     SUBMIT
  ======================= */
  const handleSubmit = async () => {
    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "Please fix the highlighted errors",
        severity: "error",
      });
      return;
    }

    const payload = {
      ...form,
      keyResponsibilities: form.keyResponsibilities.filter((v) => v.trim()),
      requiredQualifications: form.requiredQualifications.filter((v) => v.trim()),
    };

    try {
      setSubmitting(true);
      await createJob(payload);

      setSnackbar({
        open: true,
        message: "Job created successfully",
        severity: "success",
      });

      setForm({
        title: "",
        category: options.categories[0] || "",
        workspace: options.workspaces[0] || "",
        employmentType: options.employmentTypes[0] || "",
        roleOverview: "",
        keyResponsibilities: [""],
        requiredQualifications: [""],
        isActive: true,
      });
    } catch {
      setSnackbar({
        open: true,
        message: "Failed to create job. Please try again.",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  /* =======================
     LOADING
  ======================= */
  if (loadingOptions) {
    return (
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <CircularProgress />
        <Typography mt={2}>Loading job form…</Typography>
      </Container>
    );
  }

  /* =======================
     UI
  ======================= */
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Create Job
          </Typography>

          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                label="Job Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                error={!!errors.title}
                helperText={errors.title}
              />
            </Grid>

            <Grid xs={12} md={4}>
              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                error={!!errors.category}
                helperText={errors.category}
              >
                {options.categories.map((o) => (
                  <MenuItem key={o} value={o}>
                    {o}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid xs={12} md={4}>
              <TextField
                select
                fullWidth
                label="Workspace"
                name="workspace"
                value={form.workspace}
                onChange={handleChange}
                error={!!errors.workspace}
                helperText={errors.workspace}
              >
                {options.workspaces.map((o) => (
                  <MenuItem key={o} value={o}>
                    {o}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid xs={12} md={4}>
              <TextField
                select
                fullWidth
                label="Employment Type"
                name="employmentType"
                value={form.employmentType}
                onChange={handleChange}
                error={!!errors.employmentType}
                helperText={errors.employmentType}
              >
                {options.employmentTypes.map((o) => (
                  <MenuItem key={o} value={o}>
                    {o}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Role Overview"
                name="roleOverview"
                value={form.roleOverview}
                onChange={handleChange}
                error={!!errors.roleOverview}
                helperText={errors.roleOverview}
              />
            </Grid>

            <Grid xs={12}>
              <Typography fontWeight={600}>Key Responsibilities</Typography>
              {errors.keyResponsibilities && (
                <Typography color="error" variant="caption">
                  {errors.keyResponsibilities}
                </Typography>
              )}
              {form.keyResponsibilities.map((item, i) => (
                <Stack key={i} mt={1}>
                  <TextField
                    fullWidth
                    value={item}
                    onChange={(e) =>
                      handleArrayChange(
                        "keyResponsibilities",
                        i,
                        e.target.value
                      )
                    }
                  />
                </Stack>
              ))}
              <Button onClick={() => addField("keyResponsibilities")}>
                + Add Responsibility
              </Button>
            </Grid>

            <Grid xs={12}>
              <Typography fontWeight={600}>Required Qualifications</Typography>
              {errors.requiredQualifications && (
                <Typography color="error" variant="caption">
                  {errors.requiredQualifications}
                </Typography>
              )}
              {form.requiredQualifications.map((item, i) => (
                <Stack key={i} mt={1}>
                  <TextField
                    fullWidth
                    value={item}
                    onChange={(e) =>
                      handleArrayChange(
                        "requiredQualifications",
                        i,
                        e.target.value
                      )
                    }
                  />
                </Stack>
              ))}
              <Button onClick={() => addField("requiredQualifications")}>
                + Add Qualification
              </Button>
            </Grid>

            <Grid xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={form.isActive}
                    onChange={(e) =>
                      setForm({ ...form, isActive: e.target.checked })
                    }
                  />
                }
                label="Job Active"
              />
            </Grid>
          </Grid>

          <Button
            sx={{ mt: 4 }}
            variant="contained"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? "Creating…" : "Create Job"}
          </Button>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
