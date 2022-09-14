export interface UserResponse {
  name: string;
  email: string;
  profile: Profile;
}

export interface Profile {
  mobileNo: string;
  img: string;
}

export interface User {
  name: string;
  email: string;
  mobileNo: string;
  img: string;
}
