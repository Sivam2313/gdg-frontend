import axios from "axios";

const api = "https://5000-idx-gdg-backend-1740810625836.cluster-mwrgkbggpvbq6tvtviraw2knqg.cloudworkstations.dev";

export default axios.create({
  baseURL: api,
});
