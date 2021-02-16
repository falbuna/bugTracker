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
    },

    getOpenTickets: function(){
        return axios.put("/api/tickets")
    },

    getTicketStatus: function(){
        return axios.post("/api/tickets")
    },

    createComment: function(id, commentData){
        return axios.post("/api/tickets/" + id, commentData);
    },

    updateTicket: function(id, ticketData){
        return axios.put("/api/tickets/" + id, ticketData)
    },

    getComment: function(id){
        return axios.get("/api/comments/" + id);
    },

}

export default API;