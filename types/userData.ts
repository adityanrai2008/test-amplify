interface UserData {
    gender?: string;
    name?: {
      title?: string;
      first?: string;
      last?: string;
    };
    email?: string;
    phone?: string;
    picture?: {
      large?: string;
    };
  }

export default UserData