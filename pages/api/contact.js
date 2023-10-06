function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !email.includes("@") || !name || !message) {
      res.status(422).json({ message: "invalid format" });
      return;
    }

    //store in a database

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res.status(201).json({ message: "Sucessfully stored message" });
  }
}

export default handler;
