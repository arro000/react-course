

class User 
{
  constructor(userName,password,firstName,lastName,email)
  {
    this.userName= userName;
    this.password= password;
    this.firstName= firstName;
    this.lastName= lastName;
    this.email= email;
  }

  toDbString(){
    return ("username=${this.userName};"+
            "password=${this.password};"+
            "firstName=${this.firstName};"+
            "lastName=${this.lastName};"+
            "username=${this.username};"+
            "email=${this.email}")
  }


}