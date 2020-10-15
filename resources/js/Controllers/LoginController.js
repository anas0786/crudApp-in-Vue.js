import axios from 'axios';
class LoginController {

    validation(password, email) {

        let errors = {}
        var email_format = /\S+@\S+\.\S+/;
        if (!email_format.test(email)) {
            errors.email = "Please Enter the Valid Email"
        } else if (password == '') {
            console.log(password)
            errors.password = "Please Enter the Password"
        }
        return errors

    }


    async login(email, password) {
        var errors = {}
        try {
            var response = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email,
                password: password
            })
          
            if (response.data.access_token) {
                sessionStorage.setItem("access_token", response.data.access_token);
                sessionStorage.setItem("user_id", response.data.user_id);
                return true
            } else {
                errors.email = "Invalid Email and Password";
                return errors


            }

        } catch (error) {
            errors.email = "Invalid Email and Password";
            return errors

        }
        


    }
}


export default new LoginController;
