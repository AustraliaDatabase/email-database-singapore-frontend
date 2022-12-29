import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  // body.totalAmount
  try {
    fetch(
      `https://plisio.net/api/v1/invoices/new?source_currency=USD&source_amount=${body.totalAmount}&order_number=${body.orderId}&currency=BTC&email=${body.email}&order_name=btc1&callback_url=${body.callBackUrl}&api_key=J0sbLEZJE0_pRPaoZw2IighTLouJv4ME5sSHKBm-8CO2OC_ge7UsTiYgWv0K07NE`
    ).then(async (response) => {
      const movies = await response.json();

      return res.status(200).json(movies);
    });
  } catch (error: any) {
    return res.status(400);
  }
}
