import API from "../api/axiosInstance"; // mee axios instance path correct chesko

export const createJob = (jobData) => {
  return API.post("/jobs/", jobData);
};


export const getJobFormOptions = () => {
  return API.get("/jobs/job-form-options");
};

export const getAllJobs = () => {
  return API.get("/jobs/");
}


export const updateJobByTitle = (title, data) => {
  return API.put(`/jobs/title/${encodeURIComponent(title)}`, data);
};

export const deleteJobByTitle = (title) => {
  return API.delete(`/jobs/title/${encodeURIComponent(title)}`);
};

