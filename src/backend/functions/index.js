const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

exports.subscribe = onRequest(
    {cors: true},
    async (req, res) => {
      if (req.method === "OPTIONS") {
        return res.status(204).send("");
      }

      const {email} = req.body;
      if (!email) {
        return res.status(400).json({error: "Email is required"});
      }

      try {
        await admin.firestore().collection("subscribers").add({
          email,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        return res.status(200).json({message: "Subscription successful"});
      } catch (error) {
        console.error("Error adding subscriber:", error);
        return res.status(500).json({error: "Internal Server Error"});
      }
    },
);
