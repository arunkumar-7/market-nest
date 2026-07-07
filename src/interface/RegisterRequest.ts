export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  gender: "MALE" | "FEMALE" | "OTHER";
}
