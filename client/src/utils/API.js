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

    createTicket: function(id, ticketData){
        return axios.put("/api/projects/" + id, ticketData);
    },

    getTickets: function(){
        return axios.get("/api/tickets");
    },

    getTicket: function(id){
        return axios.get("/api/tickets/" + id);
    }

}

export default API;