import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (order: any) => {
  return await emailjs.send(
    "service_okm5lyf",
    "template_m29tjak",
    order,
    "QvMoVfAmGswYTjRxg",
  );
};
