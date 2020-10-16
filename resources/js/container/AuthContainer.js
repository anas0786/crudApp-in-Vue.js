import axios from 'axios';
class AuthContainer {

    signupValidation(password,email,name, mobile) {
        let errors = {}
        var email_format = /\S+@\S+\.\S+/;
        var mob = /^[1-9]{1}[0-9]{9}$/;
        if(name==''){
            errors.name = "Please Enter the Name."
        }
       else if (email_format.test(email) == false) {
            errors.email = "Please Enter the Valid Email."
        } else if (mob.test(mobile) == false) {
            errors.mobile = "Please enter valid mobile number."
        } else if (password == '') {
            console.log(password)
            errors.password = "Please Enter the Password."
        }
        return errors

    }


    lognValidation(password, email) {
        let errors = {}
        var email_format = /\S+@\S+\.\S+/;
        if (email_format.test(email) == false) {
            errors.email = "Please Enter the Valid Email."
        } else if (password == '') {
            console.log(password)
            errors.password = "Please Enter the Password."
        }
        return errors

    }


    async login(email, password) {
        var errors = {}
        try {
            var response = await axios.post('/api/login', {
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
            if (error.status == 422) {
            if (error.data.errors.email) {
                errors.email = error.data.errors.email.toString();
            }

            if (error.data.errors.password) {
                errors.password = error.data.errors.password.toString();
            }
            return errors
        }
        if (error.status == 401) {
            errors.email = "Invalid Email and Password";
            return errors
        }

        }

    }

    async signup(name,email, password,mobile) {
        var errors = {}
        try {
            var response = await axios.post('/api/register', {
                email: email,
                name:name,
                mobile: mobile,
                password: password
            })

            if (response.data.access_token) {
                sessionStorage.setItem("access_token", response.data.access_token);
                sessionStorage.setItem("user_id", response.data.user_id);
                return true
            } else {
                errors.name = "Something is Wrong";
                return errors
            }

        } catch (error) {
            if (error.status == 422) {
                if (error.data.errors.name) {
                    errors.name = error.data.errors.name.toString();
                }
                if (error.data.errors.email) {
                    errors.email = error.data.errors.email.toString();
                }
                if (error.data.errors.mobile) {
                    errors.mobile = error.data.errors.mobile.toString();
                }
                if (error.data.errors.password) {
                    errors.password = error.data.errors.password.toString();
                }

            }
            return errors

        }

    }
}


export default new AuthContainer;
