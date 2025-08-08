// Configuration file for WhatsApp integration
export const WHATSAPP_CONFIG = {
  // Replace this with your actual WhatsApp number (include country code without + sign)
  // Example: "1234567890" for US number +1 (234) 567-8900
  phoneNumber: "+94711519402", // Update this with your WhatsApp business number
  
  // Default message template
  messageTemplate: (productName, weight, price) => `Hi! I'm interested in ordering:

Product: ${productName}
Weight: ${weight}
Price: $${price}

Please let me know about availability and delivery options.`
};
