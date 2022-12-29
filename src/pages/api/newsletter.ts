import axios from "axios";

const getRequestParams = (
  email: string,
  fullName: string,
  companyName: string,
  companyWebsite: string
) => {
  // get env variables
  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

  // get the mailchimp datacenter
  // mailchimp API keys example: c0e214879c8542a54e716f38edf1635d-us2
  // we need the us2 part
  const DATACENTER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // you can add additional parameters here.
  // see full list of available parameters at:
  // https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      MMERGE2: fullName,
      MMERGE3: companyName,
      MMERGE4: companyWebsite,
    },
  };

  // API key needs to be encoded in base 64 format
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
};

export default async (req: any, res: any) => {
  const { businessEmail, fullName, companyName, companyWebsite } = req.body;

  if (!businessEmail || !businessEmail.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }

  try {
    const { url, data, headers } = getRequestParams(
      businessEmail,
      fullName,
      companyName,
      companyWebsite
    );

    await axios.post(url, data, { headers });

    // success
    return res.status(201).json({ error: null });
  } catch (error: any) {
    if (error.response.data.title === "Member Exists") {
      return res.status(201).json({ error: null });
    } else {
      return res.status(error.response.status).json({
        error: error.response.data.detail,
      });
    }
  }
};
