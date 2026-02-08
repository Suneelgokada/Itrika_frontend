import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { Edit, Trash2, Save, X } from "lucide-react";
import {
  getAllJobs,
  updateJobByTitle,
  deleteJobByTitle,
} from "../services/JobService";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editTitle, setEditTitle] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      const res = await getAllJobs();
      setJobs(res.data.jobs || []);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (title) => {
    if (!window.confirm("Delete this job?")) return;

    try {
      await deleteJobByTitle(title);
      setJobs(prev => prev.filter(j => j.title !== title));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  /* ================= EDIT ================= */
  const startEdit = (job) => {
    setEditTitle(job.title);
    setEditData({ ...job });
  };

  const cancelEdit = () => {
    setEditTitle(null);
    setEditData({});
  };

  const saveEdit = async () => {
    try {
      await updateJobByTitle(editTitle, editData);
      await loadJobs();
      cancelEdit();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Manage Jobs
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Title</b></TableCell>
              <TableCell><b>Category</b></TableCell>
              <TableCell><b>Workspace</b></TableCell>
              <TableCell><b>Overview</b></TableCell>
              <TableCell align="right"><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {jobs.map(job => {
              const isEditing = editTitle === job.title;

              return (
                <TableRow key={job.title} hover>
                  <TableCell>
                    {isEditing ? (
                      <TextField
                        value={editData.title}
                        onChange={(e) =>
                          setEditData({ ...editData, title: e.target.value })
                        }
                        size="small"
                      />
                    ) : (
                      job.title
                    )}
                  </TableCell>

                  <TableCell>{job.category}</TableCell>
                  <TableCell>{job.workspace}</TableCell>

                  <TableCell>
                    {isEditing ? (
                      <TextField
                        value={editData.roleOverview}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            roleOverview: e.target.value,
                          })
                        }
                        size="small"
                        fullWidth
                      />
                    ) : (
                      job.roleOverview
                    )}
                  </TableCell>

                  <TableCell align="right">
                    {isEditing ? (
                      <>
                        <IconButton color="success" onClick={saveEdit}>
                          <Save size={18} />
                        </IconButton>
                        <IconButton color="warning" onClick={cancelEdit}>
                          <X size={18} />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton onClick={() => startEdit(job)}>
                          <Edit size={18} />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(job.title)}
                        >
                          <Trash2 size={18} />
                        </IconButton>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}

            {jobs.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No jobs found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
