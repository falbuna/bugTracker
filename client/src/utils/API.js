import axios from "axios";

const API = {

    getProjects: function(){
        return axios.get("/api/projects");
    },

    saveProject: function(projectData){
        return axios.post("/api/projects", projectData);
    }

}

export default API;