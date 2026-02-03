import API from "../api/axiosInstance";

export const getPublicJobs = () => {
  return API.get("/jobs");
};

export const getJobByTitle = (title) => {
  return API.get(`/jobs/title/${encodeURIComponent(title)}`);
};


  