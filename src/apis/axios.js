import axios from "axios";

// const api = "https://5000-idx-gdg-backend-1740810625836.cluster-mwrgkbggpvbq6tvtviraw2knqg.cloudworkstations.dev";
const api = "https://5000-idx-gdg-campus-challengegit-1742479547584.cluster-qpa6grkipzc64wfjrbr3hsdma2.cloudworkstations.dev"

export default axios.create({
  baseURL: api,
});
