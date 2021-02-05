import axios from "axios";

const API = {

    getProjects: function(){
        return axios.get("/api/projects");
    },

    getProject: function(id){
        return axios.get("/api/projects/" + id);
    },

    saveProject: function(projectData){
        return axios.post("/api/projects", projectData);
    },

    saveTicket: function(id, projectData){
        return axios.put("/api/projects/" + id, projectData);
    }

}

export default API;