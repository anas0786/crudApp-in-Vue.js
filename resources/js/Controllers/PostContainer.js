import axios from 'axios';
class PostContainer {

    validation(description, title) {

        let errors = {}
         if (title == '') {
            errors.title = "Please Enter the title"
        }else  if (description=='') {
            errors.description = "Please Enter the description"
        } 
        return errors

    }


    async store(description, title) {
        var errors = {}
        
        try {
            var response = await axios.post('http://127.0.0.1:8000/api/store', {
                title: title,
                description: description, 
                 user_id:sessionStorage.getItem("user_id"),
        },{
                headers: {
                   'Authorization': `Bearer ${sessionStorage.getItem("access_token")}` 
               },
            })
            if (response.data.message=="successfully data store") {
    
                return true
            } else {
                errors.title = "somthing is wrong";
                return errors


            }
           

        } catch (error) {
          
            if(error.status==422)
            {
                if(error.data.errors.description)
                {
                    errors.description = error.data.errors.description.toString();
                }
                if(error.data.errors.title)
                {
                    errors.title = error.data.errors.title.toString();
                }
                console.log(errors);

            }
            return errors

        }
        


    }
}


export default new PostContainer;
