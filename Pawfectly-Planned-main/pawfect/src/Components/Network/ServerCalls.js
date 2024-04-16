import ServerPost from "./BackendPost"

function HandleServer(obj, location) {
    switch (location){
        case "new user": // name on front end
           return ServerPost(obj,"api/users") // bacckend api call
            
        case "Get user": // name on front end
            return ServerPost(obj,'api/GetUser') //back end call
        case "Get images": //gets image paths from server, and seperate call to user matrix for which images they own
            return ServerPost(obj,'api/GetImageData')// needs to return obj with image.path and image.isBought

            default:
                return null
        }
        
    }
    
    export default HandleServer